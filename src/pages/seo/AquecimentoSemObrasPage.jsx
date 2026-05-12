import React from 'react';
import ProblemPage from '@/components/ProblemPage';

export default function AquecimentoSemObrasPage() {
  return (
    <ProblemPage
      slug="aquecimento-sem-obras"
      pageTitle="Aquecimento Sem Obras: Como Aquecer Casa Sem Partir Paredes"
      metaTitle="Aquecimento Sem Obras | Soluções Rápidas para Casa | Evoluimos Comércio"
      metaDescription="Aquecer a casa sem fazer obras é possível. Painéis infravermelhos, radiadores em pedra e piso radiante eléctrico fino. Instalação em poucas horas, sem demolições."
      heroImage="/Duotherm/saladeestar.png"
      heroImageAlt="Sala de estar aquecida por painel infravermelho sem obras"
      introParagraph="Quer aquecer a casa sem partir paredes, sem ter de retirar móveis durante semanas, sem obras pesadas. É possível: existem soluções modernas, rápidas e eficientes que se instalam em horas."
      searchKeywords={[
        'aquecimento sem obras',
        'como aquecer casa sem gás',
        'aquecer casa sem obras',
        'aquecimento elétrico eficiente',
        'painéis infravermelhos',
      ]}
      problem="A maior parte das pessoas adia o aquecimento da casa porque associa o tema a obras dispendiosas: paredes partidas, tubagens, caldeiras, semanas de poeira. Em casas arrendadas, em apartamentos ou em edifícios antigos, esse tipo de intervenção é simplesmente inviável. O resultado é viver várias semanas por ano com frio em casa, com impacto na saúde, no conforto e na própria conta de eletricidade, porque equipamentos pontuais (termoventiladores, aquecedores a óleo) consomem muito para aquecer pouco."
      causes={[
        {
          title: 'Construção sem isolamento térmico',
          text: 'A maior parte das casas portuguesas construídas antes dos anos 2000 não tem isolamento adequado nas paredes, no tecto ou nas janelas. O calor gerado por aquecedores tradicionais perde-se rapidamente.',
        },
        {
          title: 'Equipamentos pontuais ineficientes',
          text: 'Termoventiladores e aquecedores a óleo consomem muita eletricidade, aquecem só localmente e secam o ar. Ao fim de um mês a conta dispara sem que a casa fique realmente quente.',
        },
        {
          title: 'Aquecimento central caro de instalar',
          text: 'Caldeiras a gás ou a gasóleo exigem obras estruturais, tubagens, certificações e custos de instalação a partir de vários milhares de euros, sem contar com manutenção e combustível.',
        },
        {
          title: 'Receio de partir paredes e perder tempo',
          text: 'Em apartamentos, casas arrendadas ou imóveis antigos, partir paredes é quase sempre impossível ou inviável. A maioria das famílias acaba por não fazer nada.',
        },
      ]}
      consequences={[
        'Casa fria entre Novembro e Março, com impacto no conforto e na saúde',
        'Contas de eletricidade altas com soluções pontuais ineficientes',
        'Condensação e humidade em divisões pouco aquecidas, paredes frias atraem vapor de água',
        'Famílias com crianças e idosos mais expostas a constipações, gripes e problemas respiratórios',
        'Equipamentos ruidosos e que ressecam o ar interior',
        'Adiamento contínuo de uma decisão que pesa todos os anos',
      ]}
      solution="As soluções de aquecimento sem obras evoluíram bastante na última década. Os painéis infravermelhos aquecem por radiação directa, como o Sol, sem aquecer o ar nem o secar. Os radiadores Duotherm, em pedra natural, irradiam calor saudável e suave por horas após desligar. O piso radiante eléctrico fino instala-se directamente sobre o pavimento existente, em poucas horas. E todas estas soluções funcionam a eletricidade, o que as torna 100% compatíveis com painéis solares fotovoltaicos."
      benefits={[
        'Instalação em poucas horas, sem demolição nem tubagens',
        'Compatível com apartamentos arrendados e edifícios antigos',
        'Sem combustão, sem CO2 e sem manutenção anual',
        'Calor radiante saudável, que não seca o ar',
        'Eficiência energética elevada, até 92% no caso dos infravermelhos',
        '100% compatível com painéis fotovoltaicos, para ainda mais poupança',
      ]}
      process={[
        { title: 'Análise técnica gratuita', text: 'Visitamos o imóvel, medimos as divisões e identificamos perdas térmicas. Recomendamos a solução adequada para cada espaço.' },
        { title: 'Escolha da solução', text: 'Painéis infravermelhos para divisões pontuais, Duotherm para aquecimento prolongado, piso radiante para casas de banho e cozinhas, ou combinação das três soluções.' },
        { title: 'Instalação rápida', text: 'A montagem demora tipicamente entre algumas horas e um dia, dependendo da escala. Sem obras de demolição, sem poeira, sem semanas de obras.' },
        { title: 'Configuração e ajustes', text: 'Programação de termóstatos, ajuste de potências por divisão e instruções de utilização. Apoio técnico contínuo após instalação.' },
      ]}
      faqs={[
        { question: 'Quais são as melhores soluções de aquecimento sem obras?', answer: 'Painéis infravermelhos (ComfortSun e Duotherm), radiadores em pedra natural (Duotherm), piso radiante eléctrico fino e biolareiras a bioetanol Herkell. Todas estas soluções dispensam tubagens, caldeiras e obras estruturais.' },
        { question: 'Como funciona o aquecimento por infravermelhos?', answer: 'Os painéis infravermelhos emitem ondas que aquecem directamente as pessoas, móveis e paredes, em vez de aquecer o ar. É a mesma sensação do Sol num dia frio: o ar pode estar frio, mas a pele sente calor. A vantagem é que o calor não se escapa pelas frestas e o ar não fica seco.' },
        { question: 'Os painéis consomem muita eletricidade?', answer: 'Os infravermelhos têm uma eficiência muito superior aos aquecedores convencionais, porque aquecem por radiação directa e não dissipam energia em aquecer o ar. Em divisões com bom isolamento, o consumo é entre 30 e 50% inferior ao de aquecedores tradicionais.' },
        { question: 'É possível instalar piso radiante em casa já habitada?', answer: 'Sim. O piso radiante eléctrico fino, que utilizamos, tem apenas 1 a 3 mm de espessura e instala-se sobre o pavimento existente, em poucas horas. Não precisa de tirar móveis durante semanas nem fazer demolições.' },
        { question: 'O aquecimento sem obras funciona bem em apartamentos antigos?', answer: 'Sim. Estas soluções foram pensadas exactamente para apartamentos antigos, casas arrendadas e edifícios sem isolamento. Como dispensam tubagens, podem ser instaladas em qualquer divisão.' },
        { question: 'É compatível com painéis fotovoltaicos?', answer: 'Totalmente. Todas as nossas soluções de aquecimento sem obras funcionam a eletricidade, pelo que se alimentam directamente de painéis solares. Combinando os dois, o custo operacional do aquecimento aproxima-se de zero.' },
        { question: 'Tem garantia?', answer: 'Sim. Os equipamentos têm garantia entre 2 e 10 anos, dependendo do modelo. Os painéis ComfortSun Deluxe e Duotherm têm vida útil estimada superior a 25 anos.' },
        { question: 'É preciso autorização do senhorio para instalar?', answer: 'Em apartamentos arrendados, normalmente não. Painéis infravermelhos e biolareiras são removíveis e não causam alterações estruturais. Para piso radiante recomendamos verificar com o senhorio, embora a instalação seja reversível.' },
      ]}
      relatedProducts={[
        { label: 'Duotherm radiante', path: '/products/duotherm' },
        { label: 'ComfortSun infravermelho', path: '/products/comfortsun' },
        { label: 'Piso radiante eléctrico', path: '/products/piso-radiante' },
        { label: 'Biolareiras Herkell', path: '/products/eco-fireplaces' },
      ]}
      relatedSolutions={[
        { label: 'Reduzir custos de aquecimento', path: '/reduzir-custos-aquecimento' },
        { label: 'Isolamento térmico', path: '/isolamento-termico' },
        { label: 'Soluções para esplanadas', path: '/aquecimento-exterior' },
      ]}
      serviceName="Aquecimento residencial sem obras"
      serviceType="Aquecimento por infravermelhos, piso radiante e radiadores em pedra"
    />
  );
}
