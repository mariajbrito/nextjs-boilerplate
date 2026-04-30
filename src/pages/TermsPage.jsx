import React from 'react';
import SEOHead from '@/components/SEOHead';

export default function TermsPage() {
  const year = new Date().getFullYear();
  return (
    <>
      <SEOHead
        title="Termos e Condições | Evoluimos Comércio"
        description="Termos e condições de utilização e venda da Evoluimos Comércio Lda."
        canonical="/terms"
      />
      <div style={{ background: '#0F0F11', minHeight: '100vh', color: '#EDE8E0', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', padding: 'clamp(48px, 8vw, 80px) 24px' }}>
          <span style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#FF6B00' }}>Legal</span>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, color: '#F5F0E8', margin: '12px 0 8px', lineHeight: 1.1 }}>
            Termos e Condições
          </h1>
          <p style={{ color: '#7A7470', fontSize: '14px', marginBottom: '48px' }}>Última atualização: abril de {year}</p>

          {[
            {
              title: '1. Identificação do Prestador',
              content: 'Evoluimos Comércio Lda, NIF PT513000461, com sede em Vila Nova de Cacela, 8900-057, Portugal. Email: evolucom@gmail.com | Telefone: +351 965 026 603.'
            },
            {
              title: '2. Objeto',
              content: 'Os presentes Termos e Condições regulam o acesso e utilização do website evoluimoscomercio.com, bem como a comercialização de produtos e serviços de aquecimento por infravermelhos, eliminação de humidade, isolamento térmico e climatização.'
            },
            {
              title: '3. Processo de Encomenda e Celebração do Contrato',
              content: 'Os pedidos de orçamento e encomendas podem ser efetuados por telefone, email ou formulário de contacto. O contrato considera-se celebrado após confirmação escrita por parte da Evoluimos Comércio Lda. Os preços apresentados são válidos até à emissão de proposta formal e podem estar sujeitos a alterações.'
            },
            {
              title: '4. Preços e Pagamento',
              content: 'Todos os preços são apresentados em euros e incluem IVA à taxa legal em vigor, salvo indicação em contrário. A Evoluimos Comércio reserva-se o direito de corrigir eventuais erros tipográficos nos preços. As condições de pagamento serão definidas em proposta ou fatura.'
            },
            {
              title: '5. Entrega',
              content: 'Os prazos de entrega são indicados aquando da confirmação da encomenda e podem variar conforme a disponibilidade e origem do produto. A Evoluimos Comércio não se responsabiliza por atrasos devidos a circunstâncias fora do seu controlo.'
            },
            {
              title: '6. Direito de Resolução (Consumidores)',
              content: 'Nos termos da legislação aplicável (Decreto-Lei n.º 84/2021), os consumidores dispõem de um prazo de 14 dias a contar da receção do bem para exercer o direito de livre resolução, sem necessidade de indicar o motivo. Para tal, deverão contactar-nos por escrito para evolucom@gmail.com. Os custos de devolução são suportados pelo consumidor, salvo acordo em contrário.'
            },
            {
              title: '7. Garantias',
              content: 'Os produtos comercializados beneficiam das garantias legais previstas no Decreto-Lei n.º 84/2021 (mínimo 3 anos para bens novos adquiridos por consumidores) e das garantias comerciais indicadas por cada fabricante. A Duotherm oferece 10 anos de garantia de fábrica. Os produtos ComfortSun e Solamagic têm 3 anos de garantia comercial.'
            },
            {
              title: '8. Responsabilidade',
              content: 'A Evoluimos Comércio não se responsabiliza por danos resultantes de instalação incorreta, utilização indevida ou não cumprimento das instruções do fabricante. A responsabilidade máxima fica limitada ao valor do produto adquirido.'
            },
            {
              title: '9. Propriedade Intelectual',
              content: 'Todo o conteúdo deste website (textos, imagens, logótipos e design) é propriedade da Evoluimos Comércio Lda ou dos respetivos titulares, sendo proibida a sua reprodução sem autorização prévia e escrita.'
            },
            {
              title: '10. Proteção de Dados',
              content: 'O tratamento de dados pessoais é efetuado em conformidade com o RGPD e com a nossa Política de Privacidade, disponível em evoluimoscomercio.com/privacy-policy.'
            },
            {
              title: '11. Resolução de Litígios',
              content: 'Em caso de litígio, o consumidor pode recorrer ao Centro de Arbitragem de Conflitos de Consumo (www.cniacc.pt) ou à plataforma europeia de resolução de litígios em linha (ec.europa.eu/consumers/odr). Para questões não resolvidas extrajudicialmente, é competente o tribunal da comarca de Faro.'
            },
            {
              title: '12. Lei Aplicável',
              content: 'Os presentes Termos e Condições regem-se pela lei portuguesa. Em tudo o que neles não se encontre expressamente regulado, aplicam-se as disposições legais em vigor, nomeadamente o Código Civil, o Decreto-Lei n.º 7/2004 (comércio eletrónico) e o Decreto-Lei n.º 84/2021 (garantias dos consumidores).'
            },
            {
              title: '13. Alterações',
              content: 'A Evoluimos Comércio reserva-se o direito de alterar os presentes Termos e Condições a qualquer momento. As alterações produzem efeitos imediatos após publicação no website. Recomendamos a consulta periódica desta página.'
            },
            {
              title: '14. Contacto',
              content: 'Para qualquer questão relacionada com estes Termos e Condições: evolucom@gmail.com ou +351 965 026 603.'
            },
          ].map((s, i) => (
            <div key={i} style={{ marginBottom: '32px' }}>
              <h2 style={{ fontSize: '17px', fontWeight: 700, color: '#F5F0E8', marginBottom: '10px' }}>{s.title}</h2>
              <p style={{ fontSize: '15px', color: '#9A9490', lineHeight: 1.75 }}>{s.content}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
