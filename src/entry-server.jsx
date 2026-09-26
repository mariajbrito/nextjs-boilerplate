import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import { PassThrough } from 'node:stream';
// StaticRouter vive em react-router desde a versao 7, nao em react-router-dom/server
import { StaticRouter } from 'react-router';
import { HelmetProvider } from 'react-helmet-async';
import AppShell from '@/AppShell';

/**
 * Renderiza uma rota para HTML estatico.
 *
 * Usa renderToPipeableStream com onAllReady porque as paginas sao carregadas
 * com React.lazy: so este metodo espera que todos os Suspense resolvam antes de
 * entregar o HTML. Com renderToString sairia apenas o spinner de carregamento.
 *
 * @param {string} url caminho da rota, por exemplo '/products/esquentadores'
 * @returns {Promise<{html: string, head: string}>}
 */
export function render(url) {
  const helmetContext = {};

  return new Promise((resolve, reject) => {
    const stream = new PassThrough();
    const chunks = [];
    stream.on('data', (c) => chunks.push(c));
    stream.on('error', reject);
    stream.on('end', () => {
      const { helmet } = helmetContext;
      const head = [
        helmet.title.toString(),
        helmet.meta.toString(),
        helmet.link.toString(),
        helmet.script.toString(),
      ]
        .filter(Boolean)
        .join('\n    ');

      resolve({
        html: Buffer.concat(chunks).toString('utf8'),
        head,
        htmlAttributes: helmet.htmlAttributes.toString(),
      });
    });

    const { pipe, abort } = renderToPipeableStream(
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={url}>
          <AppShell />
        </StaticRouter>
      </HelmetProvider>,
      {
        onAllReady() {
          pipe(stream);
        },
        onShellError: reject,
        onError: reject,
      }
    );

    // rede de seguranca: nunca deixar uma rota bloquear o build
    setTimeout(() => {
      abort();
      reject(new Error(`timeout a renderizar ${url}`));
    }, 30000).unref?.();
  });
}
