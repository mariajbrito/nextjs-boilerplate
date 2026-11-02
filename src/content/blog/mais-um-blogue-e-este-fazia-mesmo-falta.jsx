import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

/**
 * Texto do artigo, publicado na integra tal como foi escrito pelo autor.
 *
 * A unica alteracao ao original e o travessao do titulo, substituido por
 * virgula conforme a regra de escrita do projeto em CLAUDE.md. O titulo vive em
 * src/content/blog/posts.js, nao aqui.
 *
 * A formatacao vem toda de .artigo-corpo, em src/index.css. Aqui so ha o texto
 * e a marcacao que o organiza, para que escrever um artigo novo nao obrigue a
 * pensar em classes.
 *
 * As ligacoes "Ver ..." no fim de cada exemplo foram acrescentadas por cima do
 * texto, nunca dentro dele: o leitor que se interesse por um dos casos chega a
 * pagina do produto num clique, e o texto do autor fica intacto.
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

export default function MaisUmBlogueEEsteFaziaMesmoFalta() {
  return (
    <>
      <p className="entrada">
        Ciente de que existem muitos blogues sobre todos os assuntos e mais algum, porque
        será que este é necessário? Por várias razões.
      </p>

      <p>
        É que, nesta página, vão ser colocadas informações que resultam de 30 anos de
        experiência comercial com produtos fora da caixa!
      </p>

      <h2>Soluções inovadoras, mas a sério</h2>

      <p>
        Porque quando um “produto inovador” passa a ser usado pela grande maioria do
        público, deixa de ser inovador e passa a ser comum. E nem sempre é por ser um ótimo
        produto. Há outras razões…
      </p>

      <p>
        Isso é algo que, até agora, não aconteceu com nenhum dos produtos com que eu
        trabalho: não por serem produtos piores do que os “convencionais”, e sim porque são
        produtos que contrariam os grandes lobbies e as grandes tendências impostas ao
        mercado.
      </p>

      <p>Por exemplo:</p>

      <div className="exemplos">
        <section className="exemplo">
          <h3>Aquecimento por infravermelhos em pedra natural</h3>
          <p>
            Um sistema de aquecimento por infravermelhos em pedra natural continua a deixar
            muitas pessoas “surpreendidas”, sobretudo depois de perceberem todas as vantagens
            que este produto traz. Muitos, nunca ouviram falar, contudo, a Duotherm existe há
            quase 30 anos em Portugal.
          </p>
          <VerMais to="/products/duotherm">Ver o aquecimento Duotherm</VerMais>
        </section>

        <section className="exemplo">
          <h3>
            Pintura com Climate Coating: menos ar condicionado no verão, menos aquecimento no
            inverno
          </h3>
          <p>
            Que uma simples pintura de uma casa com produtos Climate Coating reduz a
            necessidade de ar condicionado no verão, e melhora sempre o conforto no inverno,
            parece impossível para muita gente. E ainda evita problemas de humidade por
            condensação e seca as paredes.
          </p>
          <VerMais to="/products/climatecoating">Ver o ClimateCoating</VerMais>
        </section>

        <section className="exemplo">
          <h3>Eliminação de salitre e humidade ascendente</h3>
          <p>
            Salitre derivado de humidade ascendente? Temos uma solução com sucesso garantido,
            sem sequer precisar de obras! Disponível no mercado há mais de 20 anos.
          </p>
          <VerMais to="/products/drymat">Ver o Drymat anti-humidade</VerMais>
        </section>

        <section className="exemplo">
          <h3>Piso radiante de aquecimento rápido</h3>
          <p>
            Piso radiante de aquecimento rápido? Parece um contrassenso, mas não é, graças a
            tecnologia de ponta em piso radiante elétrico.
          </p>
          <VerMais to="/products/piso-radiante">Ver o piso radiante elétrico</VerMais>
        </section>

        <section className="exemplo">
          <h3>AQS sem sol e sem gás e com eficiência energética A+</h3>
          <p>
            Água quente instantânea, sem gás, sem sol, sem limites e de forma
            descentralizada? Com eficiência energética A+? Temos.
          </p>
          <VerMais to="/products/esquentadores">Ver os esquentadores Clage</VerMais>
        </section>

        <section className="exemplo">
          <h3>Aquecimento de espaços exteriores</h3>
          <p>
            Aquecer a rua, quer seja esplanada, jardim, mercado, igreja ou indústria, de
            forma eficaz? Fazemos isso há vinte anos!
          </p>
          <VerMais to="/aquecimento-exterior">Ver o aquecimento exterior</VerMais>
        </section>
      </div>

      <h2>Já conhecia todas estas soluções?</h2>

      <p>Não? Pois, é por isso que este blogue faz mesmo falta…</p>
    </>
  );
}
