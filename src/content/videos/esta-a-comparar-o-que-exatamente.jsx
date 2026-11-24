import React from 'react';

/**
 * Texto do video, publicado na integra tal como foi escrito pelo autor. Os
 * titulos h2 sao os do proprio texto, nenhuma palavra foi acrescentada nem
 * trocada.
 *
 * A formatacao vem toda de .artigo-corpo, em src/index.css, a mesma folha que
 * formata os artigos do blogue. Aqui so ha o texto e a marcacao que o organiza.
 * O titulo vive em src/content/videos/videos.js.
 */
export default function EstaAComparaOQueExatamente() {
  return (
    <>
      <p className="entrada">
        Nos últimos tempos tenho feito muitos orçamentos, e quase sempre acontece o mesmo:
        as pessoas agradecem os esclarecimentos e o orçamento, mas dizem que agora querem
        compará-lo com outros. Digo que sim, e aviso de um problema: os produtos com que
        trabalho são únicos.
      </p>

      <h2>Porque é difícil comparar um orçamento do Duotherm</h2>

      <p>
        Quem tem um orçamento de radiadores em pedra natural Duotherm vai ter dificuldade em
        compará-lo com outro sistema qualquer. O sistema é exclusivo e tem uma patente que só
        ele pode usar. Comparar com outro sistema não é comparar a mesma coisa.
      </p>

      <h2>E comparar o ClimateCoating com uma tinta?</h2>

      <p>
        Ainda mais complicado. O ClimateCoating tem características únicas, e mesmo as cópias
        deste material não são iguais: são cópias e, normalmente, mais limitadas.
      </p>

      <h2>Um orçamento mais barato nem sempre diz o que parece</h2>

      <p>
        Com produtos únicos, não é possível comparar com outras coisas. Quem encontra um
        orçamento mais barato tende a achar que o meu foi caro. Mas a diferença não está no
        meu orçamento: está em ser um produto diferente. É uma situação que se tem repetido
        ultimamente.
      </p>

      <p>
        Antes de comparar, vale a pena perguntar: está a comparar o quê exatamente?
      </p>
    </>
  );
}
