import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

/**
 * Texto do artigo, publicado na integra tal como foi escrito pelo autor.
 *
 * Duas coisas foram acrescentadas por cima do texto, nunca dentro dele:
 *
 *  - os titulos h2, que partem um texto longo e corrido em seccoes. Sao todos
 *    feitos de frases do proprio autor, para que a voz do artigo nao mude so
 *    porque alguem precisou de o tornar mais facil de ler e de indexar.
 *  - o bloco de exemplos no fim, com as solucoes de que o artigo fala e uma
 *    ligacao para a pagina de cada uma. O leitor que se interesse por uma
 *    delas chega la num clique, e as paragrafos do autor ficam intactos.
 *
 * O ThermoVital nao tem pagina propria: e a linha de interior do
 * ClimateCoating e vive na pagina desse produto. Por isso os dois aparecem
 * juntos no mesmo exemplo, em vez de repetirem a mesma ligacao duas vezes.
 *
 * A formatacao vem toda de .artigo-corpo, em src/index.css. Aqui so ha o texto
 * e a marcacao que o organiza. O titulo vive em src/content/blog/posts.js.
 */

/** Ligacao para a pagina do produto de que o exemplo fala. */
const VerMais = ({ to, children }) => (
  <p>
    <Link to={to} className="ver-mais">
      {children}
      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
    </Link>
  </p>
);

export default function OClienteERei() {
  return (
    <>
      <p className="entrada">
        Sempre que ouvimos a frase «O cliente é rei», tendemos a associá-la à ideia de que
        uma empresa presta um bom serviço quando satisfaz os desejos dos seus clientes,
        procurando corresponder a todas as suas expectativas. E isso é, sem dúvida,
        importante. Mas será que é sempre assim?
      </p>

      <p>
        Na minha experiência, que acaba por ser um pouco diferente, sobretudo porque
        trabalho com produtos menos conhecidos, nem sempre deixar o cliente decidir
        livremente, sem orientação, é a melhor forma de o servir. Por vezes, as pessoas não
        compreendem plenamente as características dos produtos, as suas limitações ou a
        forma correta de os utilizar, podendo até acreditar que se trata de soluções
        milagrosas.
      </p>

      <h2>O produto é bom, mas não é milagroso</h2>

      <p>
        Por exemplo, há uns dias, uma senhora pretendia aquecer uma sala com 50 m²
        utilizando uma pedra de aquecimento de 900 W, cuja capacidade de aquecimento está
        indicada para espaços até 20 m². O produto é bom, mas não é milagroso! Se eu tivesse
        simplesmente aceitado a sua escolha, sem a alertar para as limitações, a sala
        provavelmente não ficaria suficientemente quente e a conclusão da cliente seria que
        «este aquecimento não funciona». Quando, na realidade, o problema não estaria no
        produto, mas na utilização inadequada face às características do espaço.
      </p>

      <h2>Uma igreja com nove metros de pé-direito</h2>

      <p>
        Recentemente, vivi também uma outra situação com um potencial cliente em que,
        confesso, foi difícil manter a conversa no terreno dos argumentos técnicos, porque
        parecia haver pouco espaço para questionar as ideias que já estavam previamente
        definidas.
      </p>

      <p>
        Tratava-se do aquecimento de uma igreja com nove metros de pé-direito, muito fria no
        inverno e quente e húmida no verão. Ora, era um caso perfeito para aplicar o meu
        princípio da complementaridade: apresentar uma combinação de soluções que, em
        conjunto, permitiriam responder a diferentes problemas do espaço.
      </p>

      <p>
        A minha proposta passaria por instalar radiadores ComfortSun, para proporcionar um
        aquecimento eficaz no inverno, aplicar ClimateCoating, contribuindo para melhorar o
        ambiente interior e o comportamento térmico do espaço no verão, e, provavelmente,
        recorrer ao Drymat para ajudar a combater a humidade ascendente, caso esta se
        confirmasse.
      </p>

      <p>
        E, se estas soluções não fossem suficientes para lidar com o calor do verão,
        poderíamos ainda avaliar a utilização de um ou dois bioclimatizadores. Uma abordagem
        integrada, procurando resolver os diferentes problemas de forma eficaz e sensata.
      </p>

      <p>
        Mas, para apresentar esta combinação de soluções, era necessário que houvesse
        disponibilidade para ouvir e analisar alternativas.
      </p>

      <p>
        O cliente não queria qualquer equipamento afixado nas paredes, pelo que os
        aquecedores ficaram imediatamente descartados. Embora existissem opções móveis,
        também não quis considerá-las. Quanto às restantes soluções, não houve grande
        abertura para ouvir os esclarecimentos que tentei apresentar, com base na física, na
        experiência e no bom senso.
      </p>

      <h2>O que acontece ao ar quente num espaço tão alto?</h2>

      <p>
        A solução que o cliente pretendia era um ar condicionado portátil, que, na sua
        opinião, resolveria os problemas de aquecimento no inverno, de arrefecimento no
        verão e de humidade.
      </p>

      <p>
        Mas, num espaço com nove metros de pé-direito, o que acontece ao ar quente libertado
        por um aparelho deste tipo? Naturalmente, tende a subir. Ou seja, o calor
        acumular-se-ia sobretudo na parte superior da igreja, enquanto, na zona onde as
        pessoas estão sentadas, particularmente ao nível dos pés, o conforto térmico poderia
        continuar a ser insuficiente.
      </p>

      <p>
        E, para aquecer um espaço desta dimensão e volume, o consumo energético poderia
        também tornar-se bastante elevado, com os custos associados.
      </p>

      <p>
        Acresce que a utilização de sistemas que movimentam e distribuem ar pode não ser a
        solução mais adequada para todos os espaços ou para todas as pessoas, sobretudo
        quando existem pessoas mais sensíveis a correntes de ar, partículas em suspensão ou
        determinadas condições ambientais. Num espaço público, estes aspetos também devem
        ser ponderados.
      </p>

      <p>
        Quanto à humidade, há ainda outra questão que importa compreender. Se estivermos
        perante humidade ascendente, o recurso a um equipamento de ar condicionado não
        resolve, por si só, a origem do problema. Dependendo das condições de funcionamento,
        a redução da humidade do ar poderá até influenciar o equilíbrio de humidade
        existente nas paredes.
      </p>

      <p>
        Com o ThermoVital, seria possível abordar a gestão da humidade do ar sem custos
        energéticos de funcionamento, de acordo com as características desta solução.
      </p>

      <p>
        Mais uma vez, teria sido importante poder explicar, esclarecer e discutir estas
        possibilidades.
      </p>

      <h2>As soluções que estiveram em cima da mesa</h2>

      <div className="exemplos">
        <section className="exemplo">
          <h3>ComfortSun, aquecimento por infravermelhos</h3>
          <p>
            Aquece as pessoas e as superfícies, não o ar, o que faz diferença num espaço
            alto onde o ar quente tende sempre a subir.
          </p>
          <VerMais to="/products/comfortsun">Ver os radiadores ComfortSun</VerMais>
        </section>

        <section className="exemplo">
          <h3>ClimateCoating e ThermoVital</h3>
          <p>
            Pintura técnica que melhora o comportamento térmico do espaço no verão. O
            ThermoVital é a linha de interior, e regula a humidade do ar sem consumir
            energia.
          </p>
          <VerMais to="/products/climatecoating">Ver o ClimateCoating</VerMais>
        </section>

        <section className="exemplo">
          <h3>Drymat, contra a humidade ascendente</h3>
          <p>
            Atua na origem da humidade que sobe pelas paredes, sem obras. Um desumidificador
            trata o ar, não trata a parede.
          </p>
          <VerMais to="/products/drymat">Ver o Drymat anti-humidade</VerMais>
        </section>

        <section className="exemplo">
          <h3>Bioclimatizadores</h3>
          <p>
            Arrefecimento por evaporação para espaços grandes, com um consumo muito abaixo
            do de um ar condicionado com a mesma área para cobrir.
          </p>
          <VerMais to="/products/bioclimatizadores">Ver os bioclimatizadores</VerMais>
        </section>
      </div>

      <h2>Servir o cliente ou satisfazer o pedido</h2>

      <p>
        É precisamente aqui que, para mim, reside a diferença entre servir o cliente e
        simplesmente satisfazer o seu pedido. O cliente deve ser respeitado nas suas
        escolhas, mas também merece ser informado, orientado e alertado quando a solução que
        pretende poderá não corresponder às suas expectativas.
      </p>

      <p>
        Porque ser um bom profissional não significa dizer sempre que sim. Significa,
        também, ter a responsabilidade de explicar quando uma solução não é a mais adequada,
        mesmo que isso signifique não concretizar uma venda.
      </p>

      <p>
        Afinal, o cliente é rei. Mas o aconselhamento, a experiência e o conhecimento
        técnico também têm de ter lugar na decisão.
      </p>
    </>
  );
}
