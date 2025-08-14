import React, { useState, useEffect } from 'react';
// Importação dos ícones Lucide React
import { DollarSign, Clock, Wallet, Map, HeartCrack, TrendingDown, Shield, Lightbulb, Snowflake, CheckCircle } from 'lucide-react';


// Certifique-se de que o Tailwind CSS esteja carregado no ambiente
// Adicione <script src="https://cdn.tailwindcss.com"></script> no seu HTML, se necessário.

const questions = [
  {
    id: 'q1',
    question: "Você trabalha duro, se esforça todos os dias, mas sente que o dinheiro simplesmente 'some' antes do fim do mês? Qual opção mais se aproxima da sua realidade?",
    icon: <Clock className="inline-block mr-2 text-blue-500" size={24} />, // Ícone de relógio/tempo
    options: [
      { text: "Sim, parece que o dinheiro evapora e nunca vejo a 'cor' dele.", value: 1, insight: "Essa sensação é comum e, muitas vezes, está ligada a gastos invisíveis." },
      { text: "Às vezes, consigo equilibrar, mas qualquer imprevisto me desorganiza.", value: 2, insight: "É um sinal de que a estrutura financeira pode estar frágil. Pequenos ajustes podem criar uma base mais sólida." },
      { text: "Consigo me organizar, mas sempre falta para realizar meus sonhos.", value: 3, insight: "Saber onde o dinheiro está indo é ótimo! O desafio agora é otimizar para que sobre mais." },
      { text: "Tenho total controle, meu dinheiro rende e tenho reservas para tudo.", value: 4, insight: "Parabéns! Você está em um nível avançado. Há otimizações a explorar." }
    ]
  },
  {
    id: 'q2',
    question: "Quando você pensa em 'dívidas', qual tipo mais te tira o sono ou te aperta o coração no dia a dia?",
    icon: <TrendingDown className="inline-block mr-2 text-red-500" size={24} />, // Ícone de dívida/tendência de queda
    options: [
      { text: "Contas básicas em atraso (água, luz, aluguel), que geram preocupação constante.", value: 1, insight: "Atrasar contas essenciais é um alerta. Existem formas de organizar e priorizar esses pagamentos." },
      { text: "Cartão de crédito e cheque especial, com aqueles juros altíssimos.", value: 2, insight: "Essas são as dívidas mais agressivas. Elas podem ser um grande peso, mas existem estratégias para dominá-las." },
      { text: "Empréstimos pessoais ou consignados, que comprometem parte do salário.", value: 3, insight: "Esses empréstimos podem pesar no orçamento. Entender o impacto é essencial para retomar o controle." },
      { text: "Não tenho dívidas que me preocupem, consigo pagar tudo em dia.", value: 4, insight: "Que excelente notícia! Manter-se longe de dívidas é uma grande vitória. Fortaleça suas reservas e planeje o futuro." }
    ]
  },
  {
    id: 'q3',
    question: "Sua mente fica 'ligada' nas contas e nas preocupações com dinheiro mesmo quando você está trabalhando ou tentando relaxar?",
    icon: <Lightbulb className="inline-block mr-2 text-yellow-500" size={24} />, // Ícone de pensamento/preocupação
    options: [
      { text: "Sim, é difícil me concentrar e parece que as preocupações me seguem para todo lado.", value: 1, insight: "É um ciclo vicioso: preocupação financeira afeta bem-estar e produtividade. Romper esse ciclo começa com organização." },
      { text: "Às vezes sinto um peso, mas consigo focar no que preciso fazer.", value: 2, insight: "Esse 'peso' pode ser um sinal de estresse financeiro. Abordar as finanças pode liberar sua mente." },
      { text: "Não, eu separo bem as coisas e consigo me desligar das preocupações financeiras.", value: 3, insight: "Que ótimo! Gerenciar emoções financeiras é um trunfo. Continue cultivando essa mentalidade." },
      { text: "Eu nem penso muito nisso, só lido com o que aparece.", value: 4, insight: "Lidar com o que aparece pode levar a surpresas. Um pouco de planejamento traz paz de espírito." }
    ]
  },
  {
    id: 'q4_dificuldade', // Versão para quem tem dificuldade
    question: "Considerando seus desafios, {userName}, se você pudesse resolver um problema financeiro HOJE, qual seria a sua prioridade número 1?",
    icon: <DollarSign className="inline-block mr-2 text-red-500" size={24} />,
    options: [
      { text: "Quitar todas as minhas dívidas e ter meu 'nome limpo'.", value: 1, insight: "Liberar-se das dívidas é um objetivo alcançável. Existe um caminho claro para isso, e começar é o mais importante." },
      { text: "Ter uma reserva de emergência para imprevistos, sem precisar pedir emprestado.", value: 2, insight: "Construir uma reserva traz segurança e tranquilidade. É um 'colchão' que te protege de surpresas." },
      { text: "Entender para onde vai meu dinheiro e ter controle sobre meus gastos.", value: 3, insight: "Dominar o fluxo do seu dinheiro é fundamental. É o mapa que te mostra onde você está e para onde pode ir." },
      { text: "Conseguir pagar as contas básicas em dia sem sufoco.", value: 4, insight: "Essa é a base para a tranquilidade. Com um bom planejamento, pagar as contas em dia se torna uma realidade constante." }
    ]
  },
  {
    id: 'q4_otimizacao', // Versão para quem busca otimização
    question: "Com seu nível de organização, {userName}, qual seria seu próximo grande passo financeiro para otimizar seus recursos?",
    icon: <DollarSign className="inline-block mr-2 text-green-500" size={24} />,
    options: [
      { text: "Fazer meu dinheiro render mais e começar a investir para o futuro.", value: 1, insight: "Fazer o dinheiro trabalhar para você é um grande passo! Construa patrimônio e realize sonhos maiores." },
      { text: "Planejar grandes compras ou objetivos (casa, carro, viagem) de forma mais eficiente.", value: 2, insight: "O planejamento estratégico é a chave para realizar grandes sonhos sem comprometer sua saúde financeira." },
      { text: "Otimizar investimentos e buscar maior rentabilidade.", value: 3, insight: "Sua base é sólida! Agora, focar em otimização e maior rentabilidade fará seu patrimônio crescer de forma exponencial." },
      { text: "Diversificar minhas fontes de renda ou buscar novas oportunidades de crescimento.", value: 4, insight: "Excelente! Buscar novas fontes de renda acelera sua jornada para a liberdade financeira e a realização de objetivos ambiciosos." }
    ]
  },
  {
    id: 'q5',
    question: "Você já sentiu vergonha ou culpa por suas dificuldades financeiras, a ponto de evitar falar sobre o assunto ou buscar ajuda?",
    icon: <HeartCrack className="inline-block mr-2 text-purple-500" size={24} />, // Ícone de vergonha/coração partido
    options: [
      { text: "Sim, é muito constrangedor e prefiro guardar para mim.", value: 1, insight: "Esse sentimento é comum e uma grande barreira. Saiba que você não está sozinho(a) e pedir ajuda é um sinal de força." },
      { text: "Às vezes sinto, mas sei que preciso enfrentar e buscar soluções.", value: 2, insight: "Reconhecer a necessidade de agir é o primeiro passo. Existem especialistas dispostos a ajudar sem julgamentos." },
      { text: "Não, eu converso abertamente e busco informações sempre que preciso.", value: 3, insight: "Essa abertura é uma grande vantagem! Continue buscando conhecimento e compartilhando, pois isso acelera sua jornada." },
      { text: "Nunca tive dificuldades financeiras, então não sinto vergonha.", value: 4, insight: "Que bom! Manter a saúde financeira exige atenção constante e planejamento. Continue cultivando essa mentalidade." }
    ]
  },
  {
    id: 'q6',
    question: "Você se vê gastando por impulso, talvez depois de um dia estressante, e só se arrepende quando a fatura chega?",
    icon: <Wallet className="inline-block mr-2 text-orange-500" size={24} />, // Ícone de carteira/gastos
    options: [
      { text: "Sim, muitas vezes minhas emoções me levam a gastos desnecessários.", value: 1, insight: "Esse é o comportamento comum que impacta o orçamento. Entender a ligação entre emoções e gastos é crucial para quebrar esse ciclo." },
      { text: "Às vezes acontece, mas tento me controlar e me arrependo menos.", value: 2, insight: "Você está no caminho certo! Pequenas estratégias podem fortalecer seu controle e te ajudar a fazer escolhas mais conscientes." },
      { text: "Raramente, eu penso bem antes de gastar e compro o que preciso.", value: 3, insight: "Parabéns pelo seu autocontrole! Essa disciplina é fundamental para uma vida financeira saudável e abundante." },
      { text: "Não, eu nunca gasto por impulso, sou muito racional com dinheiro.", value: 4, insight: "Sua racionalidade é valiosa. Continue usando-a para otimizar suas finanças e alcançar seus maiores sonhos." }
    ]
  },
  {
    id: 'q7',
    question: "Se você precisasse de R$ 1.000,00 para uma emergência hoje (ex: doença, carro quebrou), você teria essa quantia disponível sem se endividar?",
    icon: <Shield className="inline-block mr-2 text-indigo-500" size={24} />, // Ícone de escudo/segurança
    options: [
      { text: "Não, eu teria que pegar emprestado ou usar o cartão de crédito.", value: 1, insight: "Essa é a realidade de muitos, mas construir uma reserva de emergência é um pilar da segurança financeira. É mais simples do que parece." },
      { text: "Talvez, eu teria que verificar minhas contas e talvez apertar um pouco.", value: 2, insight: "Um planejamento mais claro e o início de uma reserva, mesmo pequena, podem trazer mais tranquilidade para imprevistos." },
      { text: "Sim, eu tenho uma reserva para cobrir imprevistos como esse.", value: 3, insight: "Excelente! Ter uma reserva de emergência é um sinal de saúde financeira e te dá liberdade para enfrentar o inesperado." },
      { text: "Temos muito mais que isso em reservas, estamos bem protegidos.", value: 4, insight: "Você está em um nível muito bom de segurança financeira! Mantenha o foco em seus objetivos e continue crescendo." }
    ]
  },
  {
    id: 'q8',
    question: "Qual a sensação mais forte que você tem em relação ao seu futuro financeiro?",
    icon: <Snowflake className="inline-block mr-2 text-cyan-500" size={24} />, // Ícone de futuro/mudança
    options: [
      { text: "Incerteza e medo de não conseguir sair das dívidas ou ter uma vida digna.", value: 1, insight: "Esse medo é compreensível, mas existe um caminho para a clareza e um futuro financeiro mais seguro. Você não precisa passar por isso sozinho." },
      { text: "Esperança, mas sem saber exatamente por onde começar para melhorar.", value: 2, insight: "A esperança é um grande motor! O próximo passo é transformar essa esperança em um plano de ação claro e prático." },
      { text: "Tranquilidade, pois tenho controle e estou planejando bem meu futuro.", value: 3, insight: "Parabéns pela sua tranquilidade e proatividade! Você está construindo um futuro sólido para si e sua família." },
      { text: "Eu nem penso muito nisso, só lido com o que aparece.", value: 4, insight: "Focar no presente é importante, mas um pouco de planejamento para o futuro pode evitar dores de cabeça e trazer mais liberdade." }
    ]
  },
  {
    id: 'q9',
    question: "Você já sentiu que, por mais que tente, suas dívidas parecem uma 'bola de neve' que só cresce, mesmo você trabalhando sem parar?",
    icon: <TrendingDown className="inline-block mr-2 text-red-500" size={24} />, // Ícone de dívida/tendência de queda
    options: [
      { text: "Sim, parece que eu pago, mas nunca vejo o fim e as dívidas se multiplicam.", value: 1, insight: "Essa sensação de 'bola de neve' é um dos maiores desafios. É crucial identificar e quebrar esse ciclo com a estratégia certa." },
      { text: "Às vezes, mas consigo controlar e fazer ela diminuir.", value: 2, insight: "Você já tem algum controle, o que é ótimo! Agora é refinar as estratégias para eliminar essa 'bola de neve' de vez." },
      { text: "Não, minhas dívidas são controladas e eu pago em dia.", value: 3, insight: "Excelente! Manter as dívidas sob controle é um pilar da saúde financeira. Continue assim e busque otimizar seus recursos." },
      { text: "Eu nem tenho dívidas, sou totalmente livre financeiramente.", value: 4, insight: "Parabéns pela sua liberdade financeira! Você é um exemplo de sucesso e inspiração." }
    ]
  },
  {
    id: 'q10',
    question: "Você acredita que ter um 'mapa' claro da sua vida financeira e um plano personalizado para sair das dificuldades faria a diferença para você?",
    icon: <Map className="inline-block mr-2 text-green-500" size={24} />, // Ícone de mapa/direção
    options: [
      { text: "Com certeza! Me sinto perdido e preciso de um guia para mudar minha situação.", value: 1, insight: "Essa é a base para a transformação! Um mapa claro e um plano personalizado te dão direção e confiança." },
      { text: "Talvez, mas acho que é muito complicado ou caro para mim.", value: 2, insight: "Pode parecer complicado, mas com a orientação certa, é mais acessível do que você imagina. O investimento na sua clareza financeira se paga." },
      { text: "Não sei, acho que já sei o que preciso, só preciso de disciplina.", value: 3, insight: "A disciplina é importante, mas sem um mapa e as ferramentas certas, ela pode se esgotar. Um bom plano potencializa sua disciplina." },
      { text: "Não preciso, já tenho tudo organizado e meus objetivos claros.", value: 4, insight: "Fantástico! Você já tem um diferencial. Talvez nosso diagnóstico possa oferecer insights ainda mais profundos para otimizar seus resultados." }
    ]
  }
];

// Definição dos temas de cores
const themeColors = {
  masculino: {
    primary: 'blue-600', // Azul principal para botões, barra de progresso
    primaryHover: 'blue-700',
    textHighlight: 'blue-800', // Azul escuro para destaque na headline
    progressBarBg: 'blue-600', // Cor inicial da barra de progólio (sólida)
    buttonBorder: 'blue-700', // Borda dos botões de resposta
    inputBorder: 'blue-400',
    inputFocusBorder: 'blue-200',
    insightBg: 'blue-200', // Fundo do insight
    insightText: 'gray-800', // Texto do insight
    errorBg: 'red-100', // Fundo do erro
    errorText: 'red-800', // Texto do erro
  },
  feminino: {
    primary: 'purple-700', // Lilás/Roxo principal
    primaryHover: 'purple-800',
    textHighlight: 'purple-900', // Roxo mais escuro para destaque na headline
    progressBarBg: 'purple-700', // Cor inicial da barra de progresso (sólida)
    buttonBorder: 'purple-700', // Borda dos botões de resposta
    inputBorder: 'purple-400',
    inputFocusBorder: 'purple-200',
    insightBg: 'purple-200', // Fundo do insight
    insightText: 'gray-800', // Texto do insight
    errorBg: 'red-100', // Fundo do erro
    errorText: 'red-800', // Texto do erro
  },
  outros: { // Tema neutro/meio-termo
    primary: 'teal-600', // Verde-água/ciano
    primaryHover: 'teal-700',
    textHighlight: 'cyan-800', // Ciano escuro para destaque
    progressBarBg: 'teal-600', // Cor inicial da barra de progresso (sólida)
    buttonBorder: 'teal-700',
    inputBorder: 'teal-400',
    inputFocusBorder: 'teal-200',
    insightBg: 'cyan-200', // Fundo do insight
    insightText: 'gray-800', // Texto do insight
    errorBg: 'red-100', // Fundo do erro
    errorText: 'red-800', // Texto do erro
  },
};


function App() {
  const [quizState, setQuizState] = useState('welcome'); // 'welcome', 'quiz', 'processing', 'leadForm', 'results'
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOptionValue, setSelectedOptionValue] = useState(null); // Armazena o valor da opção selecionada
  const [currentInsightText, setCurrentInsightText] = useState(''); // Estado para o texto do insight
  const [showInsight, setShowInsight] = useState(false); // Estado para controlar a visibilidade do insight
  const [userName, setUserName] = useState('');
  const [userGender, setUserGender] = useState(''); // Novo estado para o gênero
  const [userEmail, setUserEmail] = useState('');
  const [userWhatsapp, setUserWhatsapp] = useState('');
  const [userIncomeRange, setUserIncomeRange] = useState('');
  const [userDebtRange, setUserDebtRange] = useState('');
  const [userAnswers, setUserAnswers] = useState([]); // Armazena as respostas do quiz
  const [quizSessionId, setQuizSessionId] = useState(null); // ID único da sessão do quiz
  const [initialUrlParams, setInitialUrlParams] = useState({}); // Parâmetros da URL
  const [isLoading, setIsLoading] = useState(false); // Estado de carregamento para webhooks
  const [firstQuestionAnswerValue, setFirstQuestionAnswerValue] = useState(null); // Armazena a resposta da Q1 para branching
  const [lgpdConsent, setLgpdConsent] = useState(false); // Estado para o consentimento LGPD
  const [formError, setFormError] = useState(''); // Estado para a mensagem de erro do formulário

  // Determina o tema ativo com base no gênero
  const activeTheme = userGender && themeColors[userGender] ? themeColors[userGender] : themeColors.outros;


  // Carrega o script do Cal.com e o inicializa
  useEffect(() => {
    // Verifica se o script já foi carregado para evitar duplicação
    if (!window.Cal) {
      (function (C, A, L) {
        let p = function (a, ar) { a.q.push(ar); };
        let d = C.document;
        C.Cal = C.Cal || function () {
          let cal = C.Cal;
          let ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api = function () { p(api, arguments); };
            const namespace = ar[1];
            api.q = api.q || [];
            if(typeof namespace === "string"){
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar);
            return;
          }
          p(cal, ar);
        };
      })(window, "https://app.cal.com/embed/embed.js", "init");
    }

    // Inicializa o Cal.com com a nova configuração
    window.Cal("init", "diagnostico", {origin:"https://app.cal.com"});
    window.Cal.ns.diagnostico("ui", {"theme":"light","cssVarsPerTheme":{"light":{"cal-brand":"#09a682"},"dark":{"cal-brand":"#fafafa"}},"hideEventTypeDetails":false,"layout":"month_view"});

    // Captura parâmetros da URL ao carregar o componente
    const params = new URLSearchParams(window.location.search);
    const paramsObj = {};
    for (let [key, value] of params.entries()) {
      paramsObj[key] = value;
    }
    setInitialUrlParams(paramsObj);
    setQuizSessionId(crypto.randomUUID()); // Gera um ID de sessão único
  }, []);

  const incomeRanges = [
    { value: '', label: 'Selecione sua faixa de renda' },
    { value: 'ate-2000', label: 'Até R$ 2.000' },
    { value: '2001-5000', label: 'R$ 2.001 a R$ 5.000' },
    { value: '5001-10000', label: 'R$ 5.001 a R$ 10.000' },
    { value: 'acima-10000', label: 'Acima de R$ 10.000' },
  ];

  const debtRanges = [
    { value: '', label: 'Selecione sua faixa de dívida' },
    { value: 'sem-dividas', label: 'Sem dívidas' },
    { value: 'ate-5000', label: 'Até R$ 5.000' },
    { value: '5001-20000', label: 'R$ 5.001 a R$ 20.000' },
    { value: 'acima-20000', label: 'Acima de R$ 20.000' },
  ];

  // Função para formatar o nome: primeira letra maiúscula, preposições em minúsculas
  const formatName = (name) => {
    if (!name) return '';
    // Esta função agora apenas capitaliza a primeira letra de cada palavra (mantém o nome completo)
    return name.toLowerCase().split(' ').map((word) => {
      if (word.length === 0) return '';
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
  };

  // Nova função para obter apenas o primeiro nome para exibição na pergunta
  const getFirstName = (fullName) => {
    if (!fullName) return '';
    const parts = fullName.split(' ');
    return parts[0].charAt(0).toUpperCase() + parts[0].slice(1).toLowerCase();
  };


  // Função para formatar o número de telefone (apenas dígitos, com '55' no início)
  const formatPhoneNumber = (phone) => {
    if (!phone) return '';
    // Remove todos os caracteres não numéricos
    let cleanedPhone = phone.replace(/\D/g, '');

    // Adiciona '55' se não estiver presente no início
    if (!cleanedPhone.startsWith('55')) {
      cleanedPhone = '55' + cleanedPhone;
    }
    return cleanedPhone;
  };

  const getFinancialProfile = () => {
    let title, description, color;

    if (score >= 10 && score <= 20) {
      title = "Perfil Financeiro: Iniciante - Alerta Vermelho! 🚨";
      description = `
        **Pontuação: ${score} de 40 pontos**

        Suas respostas indicam que você está vivendo uma fase desafiadora em suas finanças. É provável que você se sinta sobrecarregado(a), confuso(a) e talvez até envergonhado(a) por sua situação. Parece que, apesar de todo o seu esforço e trabalho, o dinheiro simplesmente 'escorre' entre seus dedos, e as dívidas podem estar se acumulando de forma preocupante.

        A sensação de que o dinheiro 'some' e a preocupação constante com contas em atraso são sinais claros de que um novo caminho se faz necessário. **Mas não se preocupe, você não está sozinho(a) e essa realidade pode ser transformada!**

        O medo do futuro e a 'bola de neve' das dívidas são sentimentos compreensíveis. O mais importante agora é reconhecer que buscar clareza é o primeiro passo para retomar o control. Você merece uma uma vida financeira digna e tranquila.

        **A sua vida financeira é como um labirinto sem um mapa claro.** Você sabe que precisa sair, mas não vê as saídas. Este quiz foi apenas um sinal de que as respostas existem e estão mais próximas do que você imagina.

        **Acredite: sair dessa situação é totalmente possível!** O que falta, muitas vezes, não é dinheiro, mas um mapa detalhado e um plano de ação personalizado.
      `;
      color = "text-black"; // Alterado para preto
    } else if (score >= 21 && score <= 30) {
      title = "Perfil Financeiro: Intermediário - Em Busca de Caminhos! 🗺️";
      description = `
        **Pontuação: ${score} de 40 pontos**

        Você já demonstra algum nível de consciência e esforço para organizar suas finanças, mas ainda sente que falta um 'algo a mais' para realmente ter controle e ver seu dinheiro crescer. Imprevistos financeiros podem desestabilizar seu planejamento, e talvez você ainda esteja usando o crédito de forma que gera preocupações.

        Apesar de se esforçar no trabalho, a sensação de que o dinheiro mal chega ou não sobra para seus sonhos é uma realidade. Você entende a importância de poupar e controlar, mas talvez não tenha as estratégias ou o mapa certo para transformar esse conhecimento em resultados tangíveis.

        Seus sentimentos de preocupação ocasional e a busca por mais segurança financeira são um indicativo de que você está pronto(a) para ir além. Você já deu passos importantes, mas o caminho para a verdadeira liberdade e realização financeira ainda requer direcionamento.

        **Sua vida financeira é como uma trilha: você já começou a caminhar, mas precisa de um guia para não se perder e chegar ao destino desejado.** Este quiz acendeu uma luz sobre pontos que podem ser otimizados em sua jornada.

        **Você está no caminho certo!** Agora, é hora de transformar essa busca por clareza em ação. Um plano personalizado pode ser o catalisador que você precisa para acelerar sua jornada.
      `;
      color = "text-black"; // Alterado para preto
    } else { // score >= 31 && score <= 40
      title = "Perfil Financeiro: Conhecedor - Potencial a Otimizar! ✨";
      description = `
        **Pontuação: ${score} de 40 pontos**

        Parabéns! Suas respostas refletem um alto nível de consciência e controle sobre suas finanças pessoais. Você demonstra organização, planejamento e uma boa capacidade de lidar com o dinheiro, provavelmente já construindo reservas e talvez até investindo. Você trabalha duro e consegue ver os frutos do seu esforço.

        Apesar de sua solidez, o mundo financeiro está em constante evolução. Há sempre novas estratégias, otimizações e caminhos para fazer seu dinheiro trabalhar ainda mais para você, ou para alcançar objetivos ainda maiores e mais ambiciosos.

        **Você já é um(a) grande realizador(a)!** Imagine o que podemos construir juntos ao otimizar o que você já faz bem. Descubra como levar suas finanças para o próximo nível e transformar seu potencial em resultados extraordinários.
      `;
      color = "text-black"; // Alterado para preto
    }

    return { title, description, color };
  };

  const generateDetailedReport = (answers, totalScore, name, financialProfileTitle, profileDescriptionText) => {
    let report = `Olá, ${name}!\n\n`;
    report += `Com base nas suas respostas no nosso quiz "10 Simples Passos para Descobrir Seu Perfil Financeiro", geramos um relatório detalhado que vai te ajudar a entender melhor a sua situação atual e os próximos passos para a clareza financeira.\n\n`;
    report += `--- \n\n`;
    report += `### Seu Perfil Financeiro: ${financialProfileTitle}\n\n`;
    report += `Sua pontuação total foi de **${totalScore} de 40 pontos**.\n\n`;
    report += `Você se encaixa no perfil: ${profileDescriptionText}\n\n`; // Use the detailed profile description already generated

    report += `### Suas Respostas Revelam:\n\n`;
    answers.forEach((answer, index) => {
      // Encontra a pergunta original para obter o insight text
      // Precisa lidar com o branching da Q4
      let originalQuestionData;
      if (answer.questionIndex === 3) { // Se for a Q4
        const q1AnswerValue = answers.find(ans => ans.questionIndex === 0)?.selectedValue; // Busca a resposta da Q1 no array de respostas
        if (q1AnswerValue <= 2) {
          originalQuestionData = questions.find(q => q.id === 'q4_dificuldade');
        } else {
          originalQuestionData = questions.find(q => q.id === 'q4_otimizacao');
        }
      } else {
        originalQuestionData = questions[answer.questionIndex];
      }
      
      const selectedOptionOriginal = originalQuestionData.options.find(opt => opt.text === answer.selectedOption);
      const insight = selectedOptionOriginal ? selectedOptionOriginal.insight : "Sem insight específico.";

      report += `**Questão ${index + 1}:** "${answer.question}"\n`;
      report += `**Sua Resposta:** "${answer.selectedOption}"\n`;
      report += `**O que isso significa:** ${insight}\n\n`;
    });

    report += `--- \n\n`;
    report += `Este relatório é um primeiro passo crucial para você entender sua vida financeira. Ele é a base para construirmos, juntos, um futuro mais tranquilo e próspero.\n\n`;
    report += `**PRONTO(A) PARA TRANSFORMAR SEUS DESAFIOS EM CONQUISTAS?**\n\n`;
    report += `Para agendar sua reunião online individual para um diagnóstico financeiro aprofundado e receber este relatório completo em seu e-mail/WhatsApp, fique atento(a) às nossas comunicações!\n`;
    report += `Nesta sessão exclusiva, você terá:\n`;
    report += `- Clareza total da sua real situação financeira.\n`;
    report += `- Um mapa detalhado da sua vida financeira.\n`;
    report += `- Caminhos claros e personalizados para seguir.\n\n`;
    report += `Atenciosamente,\n`;
    report += `Sua Equipe de Finanças.\n\n`;

    return report;
  };

  const handleStartQuiz = async () => {
    if (userName.trim() === '') {
      setFormError('Por favor, digite seu nome para começar!');
      return;
    }
    if (userGender === '') { // Validação para o gênero
      setFormError('Por favor, selecione seu gênero para começar!');
      return;
    }

    setFormError(''); // Limpa qualquer erro anterior
    setIsLoading(true);
    try {
      // URL da sua webhook de Produção do n8n
      const webhookUrl = 'https://webhook.kellegontijo.com/webhook/quizdf';

      // Não enviaremos o nome inicial separadamente aqui, mas ele será parte do payload final.
      // Apenas avançamos para o quiz.
      setQuizState('quiz');

    } catch (error) {
      console.error('Erro ao iniciar o quiz:', error);
      setFormError('Ocorreu um erro ao iniciar o quiz. Por favor, tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleAnswerClick = (value, insightText) => { // Adicionado insightText como parâmetro
    if (selectedOptionValue !== null) return; // Impede múltiplas seleções
    setSelectedOptionValue(value);
    setScore(prevScore => prevScore + value);
    setCurrentInsightText(insightText); // Define o texto do insight
    setShowInsight(true); // Mostra o insight

    // Armazena a resposta da pergunta atual
    setUserAnswers(prevAnswers => [
      ...prevAnswers,
      {
        questionIndex: currentQuestionIndex,
        question: questions[currentQuestionIndex].question,
        selectedOption: questions[currentQuestionIndex].options.find(opt => opt.value === value).text,
        selectedValue: value,
      },
    ]);
  };

  const handleNextQuestion = () => {
    setSelectedOptionValue(null); // Reseta a seleção para a próxima pergunta
    setCurrentInsightText(''); // Limpa o texto do insight
    setShowInsight(false); // Esconde o insight
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizState('processing'); // Vai para o estado de processamento antes do formulário
      setTimeout(() => {
        setQuizState('leadForm'); // Depois de um pequeno delay, mostra o formulário
      }, 1000); // 1 segundo de delay para simular processamento
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      // Remove a última resposta do array e ajusta o score
      setUserAnswers(prevAnswers => {
        const newAnswers = [...prevAnswers];
        const lastAnswer = newAnswers.pop();
        if (lastAnswer) {
          setScore(prevScore => prevScore - lastAnswer.selectedValue);
          // Se voltar da Q4, precisamos resetar firstQuestionAnswerValue para que o branching funcione novamente
          if (currentQuestionIndex === 3) { // Se estiver voltando da Q4 (índice 3)
            setFirstQuestionAnswerValue(null); // Reseta a resposta da Q1
          }
        }
        return newAnswers;
      });
      setSelectedOptionValue(null); // Reseta a seleção visual do botão
      setCurrentInsightText(''); // Limpa o insight
      setShowInsight(false); // Esconde o insight
      setCurrentQuestionIndex(currentQuestionIndex - 1); // Volta para a pergunta anterior
    }
  };


  const handleLeadCapture = async (e) => {
    e.preventDefault();

    // Validação dos campos do formulário
    if (!userEmail.trim()) {
      setFormError('Por favor, preencha o campo E-mail.');
      return;
    }
    if (!userWhatsapp.trim()) {
      setFormError('Por favor, preencha o campo WhatsApp.');
      return;
    }
    if (!userIncomeRange) {
      setFormError('Por favor, selecione sua faixa de renda.');
      return;
    }
    if (!userDebtRange) {
      setFormError('Por favor, selecione sua faixa de dívida.');
      return;
    }
    if (!lgpdConsent) {
      setFormError('Para continuar, você precisa aceitar a Política de Privacidade e Tratamento de Dados.');
      return;
    }

    setFormError(''); // Limpa qualquer erro anterior
    setIsLoading(true);
    try {
      // URL da sua webhook de Produção do n8n
      const webhookUrl = 'https://webhook.kellegontijo.com/webhook/quizdf';

      // Tratamento dos dados antes de enviar
      const formattedUserName = formatName(userName);
      const formattedUserEmail = userEmail.toLowerCase();
      const formattedUserWhatsapp = formatPhoneNumber(userWhatsapp);
      const selectedIncomeLabel = incomeRanges.find(range => range.value === userIncomeRange)?.label || userIncomeRange;
      const selectedDebtLabel = debtRanges.find(range => range.value === userDebtRange)?.label || userDebtRange;

      // Gera o relatório detalhado completo
      const detailedReport = generateDetailedReport(userAnswers, score, formattedUserName, getFinancialProfile().title, getFinancialProfile().description);

      const payload = {
        quizSessionId: quizSessionId,
        userName: formattedUserName,
        userGender: userGender, // Inclui o gênero no payload
        userEmail: formattedUserEmail,
        userWhatsapp: formattedUserWhatsapp,
        userIncomeRange: selectedIncomeLabel, // Envia o label tratado
        userDebtRange: selectedDebtLabel,     // Envia o label tratado
        totalScore: score,
        financialProfile: getFinancialProfile().title,
        profileDescription: getFinancialProfile().description, // Descrição geral do perfil
        detailedReportContent: detailedReport, // O NOVO CAMPO COM O RELATÓRIO DETALHADO
        quizAnswers: userAnswers,
        initialUrlParams: initialUrlParams, // Inclui os parâmetros da URL inicial (para redundância)
        lgpdConsent: lgpdConsent, // Inclui o status do consentimento LGPD
      };

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Erro HTTP! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Dados enviados com sucesso para o n8n:', result);

      alert(`Obrigado, ${formattedUserName}! Seus dados foram enviados com sucesso. Entraremos em contato em breve para agendar seu diagnóstico.`);
      setQuizState('results'); // Após capturar o lead, mostra os resultados

    } catch (error) {
      console.error('Erro ao enviar dados para o n8n:', error);
      setFormError('Ocorreu um erro ao enviar seus dados. Por favor, tente novamente.'); // Exibe erro no formulário
    } finally {
      setIsLoading(false);
    }
  };

  const getCurrentQuestionData = () => {
    // Se for a pergunta 4 (índice 3), decide qual versão usar
    if (currentQuestionIndex === 3) {
      if (firstQuestionAnswerValue <= 2) { // Dificuldade
        return questions.find(q => q.id === 'q4_dificuldade');
      } else { // Otimização
        return questions.find(q => q.id === 'q4_otimizacao');
      }
    }
    // Retorna a pergunta normal para as outras
    return questions[currentQuestionIndex];
  };

  const currentQuestionData = getCurrentQuestionData(); // Usa a função para obter a pergunta correta
  const profile = getFinancialProfile();

  // Função para calcular a cor da barra de progresso (HSL)
  const getProgressBarColor = (progressPercentage) => {
    // A barra de progresso será sempre da cor primária do tema ativo
    // Usamos a cor primária do tema para a barra de progresso
    return `var(--tw-bg-${activeTheme.progressBarBg.replace('-', '-')})`;
  };


  const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    // Fundo geral branco
    <div className="min-h-screen relative flex items-center justify-center p-4 sm:p-6 lg:p-8 font-inter bg-white"> {/* Fundo geral branco */}
      {/* Container da imagem de fundo - sem blur direto aqui, ele virá do backdrop-filter do box do quiz */}
      <div className="absolute inset-0 z-0 opacity-5" style={{ /* Opacidade geral muito baixa para ser quase uma textura */
          backgroundImage: `url('https://placehold.co/1920x1080/2C3E50/E0E0E0/png?text=Casal+Analisando+Contas')`, // Imagem contextual de placeholder
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
      }}>
          {/* Sobreposição dupla para o efeito tom sobre tom e contraste */}
          <div className="absolute inset-0 bg-gray-800 opacity-10"></div> {/* Cinza escuro com baixa opacidade */}
          <div className="absolute inset-0 bg-black opacity-5"></div> {/* Preto com opacidade muito baixa */}
      </div>

      {/* Conteúdo principal do quiz - elevado acima do fundo, com fundo branco e backdrop-filter */}
      <div className="relative z-10 bg-white rounded-xl shadow-lg p-6 sm:p-8 lg:p-10 max-w-2xl w-full text-center"
           style={{ backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }}>

        {quizState === 'welcome' && (
          <div className="text-center min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8" style={{
            backgroundImage: `url('https://placehold.co/1920x1080/FFFFFF/FFFFFF/png?text=')`, // Fundo branco sólido para a tela de boas-vindas
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}>
            <div className="relative z-10 bg-white rounded-xl p-6 sm:p-8 lg:p-10 max-w-2xl w-full text-center" // Removido shadow-lg daqui
                 style={{ backdropFilter: 'blur(5px)', WebkitBackdropFilter: 'blur(5px)' }}>
              <h2 className={`text-3xl sm:text-4xl font-bold uppercase mb-4 leading-tight text-black`}> {/* Texto preto */}
                BEM-VINDA(O)!
              </h2>
              <p className="text-lg sm:text-xl text-gray-700 font-semibold mb-8"> {/* Texto cinza */}
                Para começarmos, qual é o seu nome e gênero?
              </p>
              <form onSubmit={(e) => { e.preventDefault(); handleStartQuiz(); }} className="space-y-4 max-w-sm mx-auto">
                <input
                  type="text"
                  placeholder="Seu Nome"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)} // Permite nome completo com espaços
                  required
                  className="w-full p-3 rounded-lg border-2 border-blue-400 focus:border-blue-200 focus:outline-none text-gray-800 placeholder-gray-500"
                />
                <div className="flex justify-center space-x-4 mt-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="feminino"
                      checked={userGender === 'feminino'}
                      onChange={(e) => setUserGender(e.target.value)}
                      className="form-radio text-pink-600 h-5 w-5"
                    />
                    <span className="ml-2 text-gray-700">Feminino</span> {/* Texto cinza */}
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="masculino"
                      checked={userGender === 'masculino'}
                      onChange={(e) => setUserGender(e.target.value)}
                      className="form-radio text-blue-600 h-5 w-5"
                    />
                    <span className="ml-2 text-gray-700">Masculino</span> {/* Texto cinza */}
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="outros"
                      checked={userGender === 'outros'}
                      onChange={(e) => setUserGender(e.target.value)}
                      className="form-radio text-teal-600 h-5 w-5"
                    />
                    <span className="ml-2 text-gray-700">Outros</span> {/* Texto cinza */}
                  </label>
                </div>
                <button
                  type="submit"
                  className={`w-full font-bold py-3 px-6 rounded-full shadow-lg transform transition duration-300 hover:scale-105
                    ${userGender
                      ? `bg-${activeTheme.primary} hover:bg-${activeTheme.primaryHover} text-white`
                      : 'bg-black hover:bg-gray-800 text-white' // Inicial preto
                    }`}
                  disabled={isLoading}
                >
                  {isLoading ? 'CARREGANDO...' : 'COMEÇAR O QUIZ'}
                </button>
              </form>
            </div>
          </div>
        )}

        {quizState === 'quiz' && (
          <>
            {/* Barra de Progresso Visual com Porcentagem */}
            <div className="flex items-center justify-between mb-4">
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className={`h-2.5 rounded-full transition-all duration-500 ease-out bg-${activeTheme.progressBarBg}`} // Cor sólida do tema
                  style={{
                    width: `${progressPercentage}%`,
                  }}
                ></div>
              </div>
              <span className="ml-3 text-sm font-medium text-gray-700">{Math.round(progressPercentage)}%</span>
            </div>

            <h2 className={`text-3xl sm:text-4xl font-bold text-black uppercase mb-2 leading-tight`}>
              10 SIMPLES PASSOS PARA DESCOBRIR <span className={`text-${activeTheme.textHighlight} font-bold`}>SEU PERFIL FINANCEIRO</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 font-semibold mb-6 normal-case">
              Entenda os reais motivos escondidos que te fazem trabalhar tanto e mesmo assim não ver a cor do seu dinheiro...
            </p>
            <div className="mb-8">
              <p className="text-lg sm:text-xl text-blue-600 font-semibold mb-4">
                Questão {currentQuestionIndex + 1} de {questions.length}
              </p>
              <p className="text-xl sm:text-2xl text-gray-800 mb-6 font-medium">
                {currentQuestionData.icon} Olá, {getFirstName(userName)}! {currentQuestionData.question.replace('{userName}', userName)}
              </p>
              <div className="grid grid-cols-1 gap-4">
                {currentQuestionData.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      // Se for a primeira pergunta, armazena o valor da resposta para o branching
                      if (currentQuestionIndex === 0) {
                        setFirstQuestionAnswerValue(option.value);
                      }
                      handleAnswerClick(option.value, option.insight); // Passa o insightText
                    }}
                    className={`
                      w-full p-4 rounded-lg text-lg font-medium transition-all duration-300 ease-in-out border relative
                      ${selectedOptionValue === null
                        ? `bg-white hover:bg-${activeTheme.insightBg} text-gray-800 shadow-sm border-${activeTheme.buttonBorder}`
                        : option.value === selectedOptionValue
                          ? `bg-${activeTheme.primary} text-white shadow-md border-${activeTheme.primaryHover} transform scale-95` // Cor primária do tema para selecionado
                          : 'bg-gray-100 text-gray-500 border-gray-200 cursor-not-allowed'
                      }
                      ${selectedOptionValue !== null ? 'cursor-not-allowed' : ''}
                    `}
                    disabled={selectedOptionValue !== null}
                  >
                    {option.text}
                    {selectedOptionValue === option.value && ( // Pop-up de insight
                      <div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 p-2 bg-${activeTheme.insightBg} text-${activeTheme.insightText} text-sm rounded-md shadow-lg whitespace-nowrap z-20`}>
                        <span className="font-bold">Dica Extra: </span>{currentInsightText}
                        <div className={`absolute left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-${activeTheme.insightBg} bottom-[-4px]`}></div>
                      </div>
                    )}
                  </button>
                ))}
              </div>
              <div className="flex items-center mt-8 w-full space-x-4"> {/* Usado flex e space-x-4 para espaçamento */}
                {currentQuestionIndex > 0 && ( // Mostra o botão Voltar a partir da segunda pergunta
                  <button
                    onClick={handlePreviousQuestion}
                    className={`py-5 px-6 rounded-md text-xl font-bold text-white bg-black hover:bg-gray-800 transition-all duration-300 ease-in-out shadow-md uppercase w-40`} // Largura fixa e padding py-5
                    disabled={isLoading}
                  >
                    VOLTAR
                  </button>
                )}
                {/* O botão Próxima Questão agora sempre usa as cores do tema ativo */}
                <button
                  onClick={handleNextQuestion}
                  className={`py-5 rounded-md text-xl font-bold text-white uppercase transition-all duration-300 ease-in-out shadow-lg flex-grow
                    bg-${activeTheme.primary} hover:bg-${activeTheme.primaryHover}
                  `}
                  disabled={selectedOptionValue === null}
                >
                  {currentQuestionIndex === questions.length - 1 ? "VER MEU PERFIL" : "PRÓXIMA QUESTÃO"}
                </button>
              </div>
            </div>
          </>
        )}

        {quizState === 'processing' && (
          <div className="text-center py-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 uppercase mb-6 leading-tight">
              PROCESSANDO SEUS RESULTADOS...
            </h2>
            <p className="text-lg text-gray-700">
              Aguarde um momento enquanto preparamos seu relatório personalizado, {userName}.
            </p>
            {/* Você pode adicionar um spinner ou animação aqui */}
          </div>
        )}

        {quizState === 'leadForm' && (
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 uppercase mb-4 leading-tight">
              SEU MAPA PARA A CLAREZA FINANCEIRA COMEÇA AQUI!
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 font-semibold mb-6">
              Sua pontuação indica que você está na fase de **{profile.title.split(' - ')[0].replace('Perfil Financeiro: ', '')}**.
              Para receber seu relatório completo e agendar seu diagnóstico financeiro gratuito e personalizado, {userName}, preencha seus dados abaixo.
              As informações sobre sua renda e dívidas nos ajudam a preparar um diagnóstico ainda mais preciso para você!
            </p>
            <form onSubmit={handleLeadCapture} className="space-y-4 max-w-sm mx-auto">
              <input
                type="email"
                placeholder="Seu Melhor E-mail"
                value={userEmail}
                onChange={(e) => { setUserEmail(e.target.value.toLowerCase()); setFormError(''); }} // Limpa erro ao digitar
                required
                className={`w-full p-3 rounded-lg border-2 border-${activeTheme.inputBorder} focus:border-${activeTheme.inputFocusBorder} focus:outline-none text-gray-800 placeholder-gray-500`}
              />
              <input
                type="tel"
                placeholder="Seu WhatsApp (com DDD)"
                value={userWhatsapp}
                onChange={(e) => { setUserWhatsapp(formatPhoneNumber(e.target.value)); setFormError(''); }} // Limpa erro ao digitar
                required
                className={`w-full p-3 rounded-lg border-2 border-${activeTheme.inputBorder} focus:border-${activeTheme.inputFocusBorder} focus:outline-none text-gray-800 placeholder-gray-500`}
              />
              <select
                value={userIncomeRange}
                onChange={(e) => { setUserIncomeRange(e.target.value); setFormError(''); }} // Limpa erro ao selecionar
                required
                className={`w-full p-3 rounded-lg border-2 border-${activeTheme.inputBorder} focus:border-${activeTheme.inputFocusBorder} focus:outline-none text-gray-800`}
              >
                {incomeRanges.map(range => (
                  <option key={range.value} value={range.value}>{range.label}</option>
                ))}
              </select>
              <select
                value={userDebtRange}
                onChange={(e) => { setUserDebtRange(e.target.value); setFormError(''); }} // Limpa erro ao selecionar
                required
                className={`w-full p-3 rounded-lg border-2 border-${activeTheme.inputBorder} focus:border-${activeTheme.inputFocusBorder} focus:outline-none text-gray-800`}
              >
                {debtRanges.map(range => (
                  <option key={range.value} value={range.value}>{range.label}</option>
                ))}
              </select>
              {/* Checkbox LGPD */}
              <div className="flex items-start text-left text-gray-700 text-sm mt-4">
                <input
                  type="checkbox"
                  id="lgpdConsent"
                  checked={lgpdConsent}
                  onChange={(e) => { setLgpdConsent(e.target.checked); setFormError(''); }} // Limpa erro ao marcar
                  required
                  className="mr-2 mt-1 form-checkbox h-4 w-4 text-blue-600"
                />
                <label htmlFor="lgpdConsent">
                  Ao marcar esta caixa, você nos permite entrar em contato por e-mail e WhatsApp usando os dados fornecidos. Prometemos não compartilhar seus dados com terceiros e não enviar spam.
                </label>
              </div>
              {formError && ( // Exibe a mensagem de erro se houver
                <div className={`p-3 rounded-md text-sm font-medium mt-4 bg-${activeTheme.errorBg} text-${activeTheme.errorText}`}>
                  {formError}
                </div>
              )}
              <button
                type="submit"
                className={`w-full bg-${activeTheme.primary} hover:bg-${activeTheme.primaryHover} text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition duration-300 hover:scale-105`}
                disabled={isLoading}
              >
                {isLoading ? 'ENVIANDO...' : 'QUERO MEU DIAGNÓSTICO GRATUITO!'}
              </button>
            </form>
          </div>
        )}

        {quizState === 'results' && (
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 uppercase mb-6 leading-tight">
              SEU RELATÓRIO DE PERFIL FINANCEIRO COMPLETO
            </h2>
            <div className="p-6 bg-white rounded-lg border border-blue-700 shadow-inner mb-8 text-left">
              <h3 className={`text-2xl sm:text-3xl font-bold ${profile.color} mb-3`}>
                {profile.title}
              </h3>
              <p className="text-lg text-gray-800 leading-relaxed" dangerouslySetInnerHTML={{ __html: profile.description.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br/>') }} />
            </div>

            {/* Seção de Agendamento do Diagnóstico com botão Cal.com */}
            <div className="bg-white border border-blue-700 p-6 rounded-lg shadow-xl mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-4">
                PRONTO PARA TRANSFORMAR SUAS FINANÇAS, {userName}?
              </h3>
              <p className="text-lg text-gray-800 mb-6">
                Seu perfil financeiro já foi revelado. Agora, dê o próximo passo rumo à clareza e à liberdade!
                Agende sua <span className="font-bold">reunião online individual</span> para um diagnóstico financeiro aprofundado.
                Nesta sessão exclusiva, você terá:
              </p>
              <ul className="list-disc list-inside text-left text-gray-700 text-lg space-y-2 mb-6 max-w-md mx-auto">
                <li><span className="font-semibold">Clareza total</span> da sua sua real situação financeira.</li>
                <li>Um <span className="font-semibold">mapa detalhado</span> da sua vida financeira.</li>
                <li><span className="font-semibold">Caminhos claros e personalizados</span> para seguir.</li>
              </ul>
              {/* Botão que ativa o pop-up do Cal.com */}
              <button
                data-cal-link="kgfinancas/diagnostico"
                data-cal-namespace="diagnostico"
                data-cal-config='{"layout":"month_view","theme":"light","cssVarsPerTheme":{"light":{"cal-brand":"#09a682"},"dark":{"cal-brand":"#fafafa"}},"hideEventTypeDetails":false}'
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transform transition duration-300 hover:scale-105 inline-block text-xl uppercase"
              >
                AGENDAR MEU DIAGNÓSTICO GRATUITO!
              </button>
            </div>

            {/* A seção do Programa de Mentoria Premium foi removida aqui */}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
