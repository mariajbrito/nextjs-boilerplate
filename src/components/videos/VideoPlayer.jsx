import React, { useState } from 'react';
import { Play } from 'lucide-react';
import { videoCover, videoEmbedUrl, youtubeThumb } from '@/content/videos/videos';

/**
 * Leitor de um video do YouTube que so contacta o YouTube depois do clique.
 *
 * Ate la a pagina mostra apenas a capa, servida do proprio site quando o video
 * traz capa propria, e um botao de reproduzir. Nenhum iframe, nenhum script do
 * YouTube e nenhum cookie. So ao clicar e que o iframe e criado, e ja no
 * dominio youtube-nocookie.com, que nao guarda o historico de visualizacao de
 * quem ainda nao deu a tocar no video.
 *
 * O beneficio nao e so de privacidade: o leitor do YouTube traz perto de um
 * megabyte de JavaScript, que numa pagina de texto como esta seria carregado
 * para a maioria das visitas que nunca chega a ver o video.
 */
export default function VideoPlayer({ video }) {
  const [aLer, setALer] = useState(false);
  const vertical = video.format === 'vertical';
  const capa = videoCover(video);

  // Um Short tem a imagem ao alto e a capa e ao baixo, ou ao contrario. Em vez
  // de cortar a capa para encher a moldura, que comeria o titulo pelos lados,
  // a capa fica inteira ao centro e o fundo e preenchido por uma copia sua
  // desfocada. E o mesmo ficheiro, por isso nao ha segundo descarregamento.
  const moldura = vertical
    ? { aspectRatio: '9 / 16', maxWidth: 'min(100%, calc(80vh * 9 / 16))' }
    : { aspectRatio: '16 / 9', maxWidth: '100%' };

  return (
    <div className="mx-auto w-full" style={moldura}>
      <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black shadow-xl border border-gray-200">
        {aLer ? (
          <iframe
            /* autoplay porque o clique na capa ja foi o pedido de reproduzir:
               sem isto a pessoa tinha de clicar uma segunda vez. */
            src={`${videoEmbedUrl(video)}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
            title={video.title}
            className="absolute inset-0 w-full h-full"
            style={{ border: 0 }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setALer(true)}
            aria-label={`Reproduzir o vídeo: ${video.title}`}
            className="group absolute inset-0 w-full h-full cursor-pointer border-0 p-0 bg-black"
          >
            {vertical && (
              <img
                src={capa}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-60"
                loading="eager"
              />
            )}
            <img
              src={capa}
              alt={video.imageAlt || video.title}
              width={video.imageW}
              height={video.imageH}
              className={`absolute inset-0 w-full h-full ${vertical ? 'object-contain' : 'object-cover'}`}
              loading="eager"
              /* Sem capa propria, a miniatura grande do YouTube pode nao existir
                 para este video. Nesse caso cai para a media, que existe sempre. */
              onError={(e) => {
                if (video.image) return;
                const media = youtubeThumb(video, 'hqdefault');
                if (e.currentTarget.src !== media) e.currentTarget.src = media;
              }}
            />

            <span
              aria-hidden="true"
              className="absolute inset-0 flex items-center justify-center"
            >
              <span className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-black/55 backdrop-blur-sm border border-white/25 transition-transform duration-300 group-hover:scale-110">
                <span className="flex items-center justify-center w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-orange-600 group-hover:bg-orange-500 transition-colors">
                  {/* deslocado 2px para a direita: o triangulo parece
                      descentrado quando o seu centro geometrico fica no meio */}
                  <Play className="w-5 h-5 sm:w-6 sm:h-6 text-white translate-x-[2px]" fill="currentColor" />
                </span>
              </span>
            </span>
          </button>
        )}
      </div>
    </div>
  );
}
