import React from 'react';
import { DollarSign, Clock, Wallet, Map, TrendingDown, Shield, Lightbulb, Snowflake, CheckCircle, Award, BrainCircuit, Target, ArrowRight, ArrowLeft, Send, Calendar, Share2, RefreshCw, Copy } from 'lucide-react';

// ====================================================================================
// ÍCONES PERSONALIZADOS (SVG)
// ====================================================================================

const FacebookIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const WhatsAppIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    </svg>
);


// ====================================================================================
// DADOS E CONFIGURAÇÕES
// ====================================================================================

const questions = [
  {
    id: 'q1',
    question: "Quando você olha para sua conta bancária, qual frase descreve melhor o sentimento?",
    skill: 'Controle de Gastos',
    icon: <Wallet className="inline-block mr-2 text-orange-500" size={24} />,
    options: [
      { text: "Recebo o salário e em poucos dias já acabou tudo.", value: 2, insight: "Isso indica um ciclo de 'corrida de ratos'. O dinheiro entra e sai sem um plano, gerando angústia." },
      { text: "Estou sempre no vermelho, usando o limite do cheque especial.", value: 1, insight: "Viver no negativo virou o 'normal'. Precisamos quebrar esse ciclo urgentemente." },
      { text: "Eu nem olho o extrato para não me assustar.", value: 3, insight: "A falta de clareza é um sintoma de quem está 'desligado'. Trazer luz aos números é o primeiro passo." },
      { text: "Pago o básico e o resto vai para o cartão de crédito.", value: 2, insight: "O cartão virou uma extensão do salário, uma armadilha perigosa que vamos desarmar." }
    ]
  },
  {
    id: 'q2',
    question: "Suas dívidas hoje são compostas principalmente por quê?",
    skill: 'Gestão de Dívidas',
    icon: <TrendingDown className="inline-block mr-2 text-red-500" size={24} />,
    options: [
      { text: "Contas básicas atrasadas, como aluguel, água e luz.", value: 1, insight: "A base da sua segurança está ameaçada. A prioridade máxima é proteger suas necessidades essenciais." },
      { text: "Uma bola de neve com cartão de crédito e cheque especial.", value: 1, insight: "Essas são as piores dívidas pelos juros abusivos. Precisamos de uma estratégia de ataque imediata." },
      { text: "Vários empréstimos que fiz para resolver outras contas.", value: 1, insight: "Cobrir um buraco abrindo outro. Este é o sintoma clássico do descontrole. Vamos criar um plano de resgate." },
      { text: "Parcelamentos de compras que, somados, viraram um monstro.", value: 2, insight: "As 'parcelinhas' parecem inofensivas, mas juntas sufocam. Precisamos organizar e entender o tamanho real do problema." }
    ]
  },
  {
    id: 'q3',
    question: "Qual destes pensamentos sobre dinheiro é mais comum para você?",
    skill: 'Mentalidade Financeira',
    icon: <BrainCircuit className="inline-block mr-2 text-yellow-500" size={24} />,
    options: [
      { text: "'Eu mereço!', mesmo sabendo que não posso pagar.", value: 2, insight: "O gasto emocional é uma forma de recompensa imediata que cobra um preço alto. Vamos encontrar formas mais saudáveis de se recompensar." },
      { text: "'Depois eu vejo como pago', e a conta sempre chega.", value: 3, insight: "Procrastinar a dor financeira só a torna maior. Vamos te ajudar a encarar os números de frente, mas com um plano." },
      { text: "'Não tem mais jeito', um sentimento de que perdeu o controle.", value: 1, insight: "A sensação de desespero paralisa. Mas acredite, sempre há um jeito. O que falta é o mapa certo." },
      { text: "'Se eu tivesse mais dinheiro, tudo se resolveria.'", value: 2, insight: "Muitas vezes, o problema não é o quanto se ganha, mas como se gasta. Vamos focar na organização primeiro." }
    ]
  },
  {
    id: 'q4_dificuldade',
    question: "Se você tivesse uma 'varinha mágica' para resolver um problema financeiro HOJE, qual seria?",
    skill: 'Planejamento Futuro',
    icon: <Target className="inline-block mr-2 text-red-500" size={24} />,
    options: [
      { text: "Limpar meu nome e quitar todas as dívidas.", value: 1, insight: "Essa paz não tem preço e é totalmente alcançável. O diagnóstico será seu plano de ação para a liberdade." },
      { text: "Ter R$ 1.000 guardado para uma emergência.", value: 3, insight: "A reserva é seu 'colchão de paz'. No diagnóstico, vamos desenhar o plano para construí-la, mesmo com dívidas." },
      { text: "Saber exatamente para onde meu dinheiro está indo.", value: 2, insight: "Clareza é poder. O diagnóstico vai te dar o 'mapa do seu dinheiro' de forma simples e visual." },
      { text: "Conseguir pagar as contas do mês sem usar o limite do banco.", value: 1, insight: "Essa é a base da tranquilidade. O diagnóstico vai te ajudar a construir essa base sólida." }
    ]
  },
  {
    id: 'q5_thermometer',
    question: "Se você tivesse que resumir sua vida financeira em uma palavra hoje, qual seria?",
    skill: 'Mentalidade Financeira',
    icon: <Award className="inline-block mr-2 text-purple-500" size={24} />,
    options: [
      { text: "Sobrevivência", value: 0, insight: "Sentir que está apenas 'sobrevivendo' é exaustivo. Nosso objetivo é te levar para a fase de 'viver'." },
      { text: "Desespero", value: 0, insight: "O desespero paralisa. O diagnóstico foi desenhado para ser o seu 'farol', trazendo clareza e direção." },
      { text: "Vergonha", value: 0, insight: "A vergonha isola e impede de pedir ajuda. Saiba que você não está sozinho(a) e que há solução." },
      { text: "Ansiedade", value: 0, insight: "A ansiedade vem da falta de controle. Vamos construir juntos um plano que te devolva a paz." }
    ]
  },
  {
    id: 'q6',
    question: "Qual situação de compra te descreve melhor?",
    skill: 'Controle de Gastos',
    icon: <Wallet className="inline-block mr-2 text-orange-500" size={24} />,
    options: [
      { text: "Vejo uma promoção e parcelo, mesmo sem precisar do produto.", value: 2, insight: "O apelo da 'oferta imperdível' te domina. Vamos criar barreiras contra o consumo por impulso." },
      { text: "Não tenho ideia de quanto gasto com apps de comida ou transporte.", value: 3, insight: "Esses 'pequenos' gastos diários são um ralo invisível. Vamos colocar uma lupa sobre eles." },
      { text: "Quando saio com amigos, gasto sem pensar para acompanhar.", value: 2, insight: "A pressão social é uma grande inimiga das finanças. Vamos alinhar seus gastos à sua realidade, não à dos outros." },
      { text: "Uso o cartão como se não houvesse amanhã.", value: 1, insight: "O cartão de crédito se tornou uma fonte de dinheiro que não é sua. Precisamos reverter essa percepção urgentemente." }
    ]
  },
  {
    id: 'q7',
    question: "Uma emergência médica de R$ 500 acontece. Qual sua reação mais provável?",
    skill: 'Planejamento Futuro',
    icon: <Shield className="inline-block mr-2 text-indigo-500" size={24} />,
    options: [
      { text: "Entro em pânico, pois não tenho de onde tirar.", value: 1, insight: "A falta de um plano para imprevistos nos deixa paralisados. Vamos criar essa rede de segurança para você." },
      { text: "Peço emprestado para um amigo ou familiar.", value: 2, insight: "Recorrer a terceiros é uma solução temporária que pode gerar outros problemas. Vamos criar sua própria reserva." },
      { text: "Passo no cartão de crédito e rezo para conseguir pagar.", value: 1, insight: "Resolver uma emergência criando uma nova dívida com juros é um ciclo perigoso. Vamos quebrá-lo." },
      { text: "Deixo de pagar outra conta para cobrir a emergência.", value: 1, insight: "O 'cobertor curto'. Cobrir um santo e descobrir outro. Precisamos de um plano para que isso não aconteça mais." }
    ]
  },
  {
    id: 'q8',
    question: "Qual a sensação mais forte sobre seu futuro financeiro?",
    skill: 'Mentalidade Financeira',
    icon: <Snowflake className="inline-block mr-2 text-cyan-500" size={24} />,
    options: [
      { text: "Insegurança e medo do que pode acontecer.", value: 1, insight: "O medo vem da falta de clareza. O diagnóstico foi criado para transformar seu medo em confiança através de um plano." },
      { text: "Desespero, sinto que minha situação não tem saída.", value: 1, insight: "Existe uma saída. O diagnóstico é o mapa que vai te mostrar o caminho, passo a passo." },
      { text: "Confusão, não sei nem por onde começar a arrumar.", value: 3, insight: "Sentir-se perdido é normal. O diagnóstico vai te dar o primeiro passo, o mais importante de todos." },
      { text: "Estagnação, sinto que trabalho só para pagar dívidas.", value: 2, insight: "A sensação de estagnação é frustrante. Vamos criar um plano para que você veja seu progresso, mês a mês." }
    ]
  },
  {
    id: 'q9',
    question: "Como você lida com as faturas e boletos que chegam?",
    skill: 'Gestão de Dívidas',
    icon: <TrendingDown className="inline-block mr-2 text-red-500" size={24} />,
    options: [
      { text: "Pago o mínimo do cartão para 'ganhar tempo'.", value: 1, insight: "Pagar o mínimo é a pior decisão financeira. É alimentar um monstro com juros. Vamos traçar um plano para quitar o total." },
      { text: "Escolho quais contas pagar e quais deixar para depois.", value: 2, insight: "A tática do 'malabarista de boletos' é arriscada e cara. Vamos organizar suas contas por prioridade." },
      { text: "Já renegociei dívidas, mas não consegui pagar e a situação piorou.", value: 1, insight: "Uma renegociação mal feita pode ser pior que a dívida original. Vamos analisar a melhor estratégia para o seu caso." },
      { text: "Eu simplesmente ignoro as cobranças, não sei o que fazer.", value: 3, insight: "Ignorar o problema não o faz desaparecer. Vamos te dar as ferramentas para lidar com as cobranças de forma estratégica." }
    ]
  },
  {
    id: 'q10',
    question: "Você acredita que um 'mapa' claro e um plano personalizado fariam a diferença?",
    skill: 'Planejamento Futuro',
    icon: <Map className="inline-block mr-2 text-green-500" size={24} />,
    options: [
      { text: "Com certeza! Me sinto completamente perdido(a).", value: 1, insight: "Reconhecer isso é o primeiro passo para a mudança. Você está no lugar certo para encontrar seu mapa." },
      { text: "Talvez, mas acho que minha situação é complicada demais.", value: 2, insight: "Toda situação, por mais complexa, tem um primeiro passo. O diagnóstico vai te mostrar qual é o seu." },
      { text: "Já tentei de tudo e nada funciona, estou sem esperança.", value: 1, insight: "A frustração é compreensível. Talvez o que faltou não foi esforço, mas a estratégia certa para o seu caso." },
      { text: "Se for simples e direto ao ponto, eu topo tentar.", value: 3, insight: "Simplicidade é a chave. Nosso plano é desenhado para ser prático e fácil de seguir, sem 'financês'." }
    ]
  }
];

const themeClasses = {
  masculino: {
    primary: 'bg-blue-600 hover:bg-blue-700',
    textHighlight: 'text-blue-800',
    progressBarBg: 'bg-blue-600',
    buttonBorder: 'border-blue-700',
    buttonHover: 'hover:bg-blue-100',
    buttonSelected: 'bg-blue-600 text-white border-blue-700',
    inputBorder: 'border-blue-400 focus:border-blue-200',
    insightBg: 'bg-blue-100',
    insightText: 'text-blue-800',
    insightBorder: 'border-t-blue-100',
    errorBg: 'bg-red-100',
    errorText: 'text-red-800',
  },
  feminino: {
    primary: 'bg-purple-700 hover:bg-purple-800',
    textHighlight: 'text-purple-900',
    progressBarBg: 'bg-purple-700',
    buttonBorder: 'border-purple-700',
    buttonHover: 'hover:bg-purple-100',
    buttonSelected: 'bg-purple-700 text-white border-purple-800',
    inputBorder: 'border-purple-400 focus:border-purple-200',
    insightBg: 'bg-purple-100',
    insightText: 'text-purple-800',
    insightBorder: 'border-t-purple-100',
    errorBg: 'bg-red-100',
    errorText: 'text-red-800',
  },
  outros: {
    primary: 'bg-teal-600 hover:bg-teal-700',
    textHighlight: 'text-cyan-800',
    progressBarBg: 'bg-teal-600',
    buttonBorder: 'border-teal-700',
    buttonHover: 'hover:bg-teal-100',
    buttonSelected: 'bg-teal-600 text-white border-teal-700',
    inputBorder: 'border-teal-400 focus:border-teal-200',
    insightBg: 'bg-teal-100',
    insightText: 'text-teal-800',
    insightBorder: 'border-t-teal-100',
    errorBg: 'bg-red-100',
    errorText: 'text-red-800',
  },
};

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

// ====================================================================================
// FUNÇÕES HELPERS
// ====================================================================================

const formatName = (name) => {
  if (!name) return '';
  return name.toLowerCase().split(' ').map((word) => {
    if (word.length === 0) return '';
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(' ');
};

const getFirstName = (fullName) => {
  if (!fullName) return '';
  const parts = fullName.trim().split(' ');
  return parts[0].charAt(0).toUpperCase() + parts[0].slice(1).toLowerCase();
};

const formatPhoneNumber = (phone) => {
  if (!phone) return '';
  let cleanedPhone = phone.replace(/\D/g, '');
  if (cleanedPhone.length > 2 && !cleanedPhone.startsWith('55')) {
    cleanedPhone = '55' + cleanedPhone;
  }
  return cleanedPhone;
};

const getFinancialProfile = (score) => {
  let title, description;
  const finalScore = score > 0 ? score : 10; 

  if (finalScore <= 16) {
    title = "Perfil Financeiro: Descontrolado(a) 🆘";
    description = `
        **Pontuação: ${finalScore} de 30 pontos**
        Suas respostas indicam um momento de grande urgência. É provável que você sinta que as dívidas formam uma bola de neve, usando um crédito para pagar outro e sem ver uma saída. A sensação de caos e desespero é constante.
        **O mais importante agora é saber que existe um caminho.** O primeiro passo é criar um plano de resgate para estancar o problema e te dar um fôlego para respirar.
      `;
  } else if (finalScore <= 23) {
    title = "Perfil Financeiro: Gastador(a) 💸";
    description = `
        **Pontuação: ${finalScore} de 30 pontos**
        Você trabalha muito, mas o dinheiro parece não ser suficiente para seus desejos. Suas dívidas provavelmente vêm de um padrão de vida que seu orçamento não comporta, com compras por impulso e o uso do cartão de crédito como complemento de renda.
        **Você tem o poder de virar o jogo!** O foco será alinhar seus gastos aos seus verdadeiros objetivos, para que o dinheiro trabalhe para seus sonhos, e não contra eles.
      `;
  } else { 
    title = "Perfil Financeiro: Desligado(a) 🧭";
    description = `
        **Pontuação: ${finalScore} de 30 pontos**
        Você paga suas contas, mas vive em um nevoeiro financeiro. As dívidas podem ter surgido por falta de planejamento ou por não dar a devida atenção às finanças. A sensação é de estar perdido(a), sem um mapa claro para o futuro.
        **Clareza é o seu superpoder!** Vamos acender as luzes e criar um GPS financeiro simples para que você assuma o controle total do seu dinheiro e do seu futuro.
      `;
  }
  return { title, description };
};


const calculateSkillScores = (answers) => {
    const skills = {
        'Controle de Gastos': { total: 0, count: 0 },
        'Gestão de Dívidas': { total: 0, count: 0 },
        'Mentalidade Financeira': { total: 0, count: 0 },
        'Planejamento Futuro': { total: 0, count: 0 },
    };

    answers.forEach(answer => {
        const question = questions.find(q => q.id === answer.questionId);
        if (question && question.skill && answer.selectedValue > 0) {
            skills[question.skill].total += answer.selectedValue;
            skills[question.skill].count += 1;
        }
    });

    const finalScores = {};
    for (const skill in skills) {
        if (skills[skill].count > 0) {
            const average = (skills[skill].total / (skills[skill].count * 3)) * 100; // Max value is now 3
            finalScores[skill] = Math.max(10, Math.round(average));
        } else {
            finalScores[skill] = 10;
        }
    }
    return finalScores;
};

const generateActionPlanReport = (userName, userAnswers, score) => {
    const skillScores = calculateSkillScores(userAnswers);
    const profile = getFinancialProfile(score);
    const lowestSkill = Object.keys(skillScores).reduce((a, b) => skillScores[a] < skillScores[b] ? a : b);

    let report = `## Plano de Ação Inicial para ${userName}\n\n`;
    report += `Olá, ${userName}! Com base nas suas respostas, preparamos um plano de ação inicial e personalizado para você. Este é o primeiro passo para a sua transformação financeira.\n\n`;
    report += `**Seu Perfil Atual:** ${profile.title}\n\n`;
    report += `---\n\n`;

    report += `### 🎯 **Foco Principal: ${lowestSkill}**\n\n`;

    switch (lowestSkill) {
        case 'Controle de Gastos':
            report += "**Diagnóstico:** Suas respostas sugerem que a maior oportunidade de melhoria está em entender para onde seu dinheiro está indo. É a sensação do 'ralo financeiro', que causa a impressão de que, por mais que você trabalhe, o dinheiro some.\n\n";
            report += "**Plano de Ação Imediato:**\n";
            report += "1. **Missão de 3 Dias:** Durante os próximos 3 dias, anote *absolutamente todo* gasto que você fizer, do cafézinho à conta de luz. Use um caderno ou o bloco de notas do celular. O objetivo não é julgar, é apenas criar consciência.\n";
            report += "2. **Identifique o Vilão:** Ao final dos 3 dias, olhe para a lista e identifique UMA despesa que mais te surpreendeu. Foi um delivery? Uma compra por impulso? Apenas identifique.\n\n";
            report += `**No nosso diagnóstico, vamos:** Transformar essa simples lista em um 'Mapa Financeiro' visual e identificar os 3 maiores 'ralos' que estão impedindo seu progresso.\n`;
            break;
        case 'Gestão de Dívidas':
            report += "**Diagnóstico:** As dívidas, especialmente as de juros altos como cartão de crédito, parecem ser o maior peso no seu orçamento e na sua mente. Elas criam um ciclo vicioso que impede o crescimento.\n\n";
            report += "**Plano de Ação Imediato:**\n";
            report += "1. **Liste Suas Dívidas:** Pegue uma folha de papel e liste todas as suas dívidas. Para cada uma, anote: para quem você deve, o valor total e, se souber, a taxa de juros.\n";
            report += "2. **Pare de Cavar o Buraco:** Guarde o cartão de crédito na gaveta por uma semana. Tente usar apenas o dinheiro que você tem em conta (débito ou Pix). O objetivo é parar de aumentar a dívida.\n\n";
            report += `**No nosso diagnóstico, vamos:** Organizar essa lista e criar uma estratégia inteligente e realista para quitar suas dívidas, começando pelas mais caras, para que você economize dinheiro com juros.\n`;
            break;
        case 'Mentalidade Financeira':
            report += "**Diagnóstico:** A preocupação constante com dinheiro (estresse financeiro) parece estar afetando sua qualidade de vida e sua capacidade de tomar boas decisões. A forma como pensamos sobre o dinheiro impacta diretamente nossos resultados.\n\n";
            report += "**Plano de Ação Imediato:**\n";
            report += "1. **Defina UMA Meta Pequena:** Pense em UM pequeno objetivo financeiro para a próxima semana. Ex: 'Não vou usar o iFood por 5 dias' ou 'Vou guardar R$ 20'. Algo que seja 100% alcançável.\n";
            report += "2. **Comemore a Vitória:** Quando você alcançar essa pequena meta, comemore! Diga a si mesmo(a) 'Eu consegui'. O objetivo é começar a criar uma relação de sucesso e controle com o dinheiro.\n\n";
            report += `**No nosso diagnóstico, vamos:** Aprofundar nas crenças que te limitam e criar um plano para fortalecer sua mentalidade, transformando ansiedade em confiança.\n`;
            break;
        case 'Planejamento Futuro':
            report += "**Diagnóstico:** A falta de um plano claro para o futuro e de uma reserva de emergência te deixa vulnerável a imprevistos e distante dos seus maiores sonhos. Você parece estar operando no 'modo reação'.\n\n";
            report += "**Plano de Ação Imediato:**\n";
            report += "1. **Sonhe um Pouco:** Escreva em um papel 3 sonhos que você gostaria de realizar (uma viagem, um curso, a casa própria). Não pense em como pagar, apenas no que você quer.\n";
            report += "2. **Comece sua Reserva (com R$ 1):** Abra o aplicativo do seu banco e guarde R$ 1 em uma 'caixinha' ou poupança. O valor não importa. O ato de começar é o mais poderoso.\n\n";
            report += `**No nosso diagnóstico, vamos:** Transformar seus sonhos em metas com passo a passo e desenhar um plano realista para você construir sua reserva de emergência e começar a investir no seu futuro.\n`;
            break;
    }

    report += `\n---\n\n`;
    report += `Lembre-se, ${userName}, este é apenas o começo. O diagnóstico aprofundado é onde vamos detalhar cada um desses pontos e criar um plano financeiro que se encaixe perfeitamente na sua vida.\n\nAté breve!`;

    return report;
};

const generateEmotionalReport = (userName, userAnswers) => {
    const thermometerAnswer = userAnswers.find(answer => answer.questionId === 'q5_thermometer');
    if (!thermometerAnswer) {
        return "O usuário não respondeu à pergunta do termômetro emocional.";
    }

    const emotion = thermometerAnswer.selectedOption;
    let report = `## Relatório do Termômetro Emocional de ${userName}\n\n`;
    report += `**Palavra escolhida:** ${emotion}\n\n`;
    report += `### Análise e Pontos de Abordagem para o Diagnóstico:\n\n`;

    switch (emotion) {
        case 'Sobrevivência':
            report += "**Estado Emocional:** O cliente está em modo de alerta constante. A relação com o dinheiro é baseada no medo da falta e na pressão para cobrir o básico. Provavelmente sente exaustão e falta de perspectiva.\n\n";
            report += "**Estratégia de Comunicação:** Usar uma linguagem acolhedora e segura. Focar em 'trazer alívio' e 'criar um respiro'. O objetivo inicial é mostrar que existe um caminho para sair da pressão, antes mesmo de falar em prosperidade.\n\n";
            report += "**Ações para o Diagnóstico:**\n";
            report += "1. Validar o sentimento de exaustão.\n";
            report += "2. Focar em quick wins: identificar um pequeno corte de gasto que gere alívio imediato.\n";
            report += "3. Apresentar o conceito de 'reserva de emergência' como um 'colchão de paz'.\n";
            break;
        case 'Desespero':
            report += "**Estado Emocional:** O cliente se sente perdido e sobrecarregado. Não sabe por onde começar e provavelmente já tentou métodos que não funcionaram, gerando frustração.\n\n";
            report += "**Estratégia de Comunicação:** Focar em 'clareza', 'simplicidade' e 'passo a passo'. A promessa principal é a de organizar o caos e entregar um mapa simples de seguir.\n\n";
            report += "**Ações para o Diagnóstico:**\n";
            report += "1. Usar a metáfora do 'GPS Financeiro'.\n";
            report += "2. Fazer um diagnóstico visual da situação atual (o mapa do dinheiro).\n";
            report += "3. Definir apenas UM próximo passo claro e simples ao final da sessão.\n";
            break;
        case 'Esperança':
            report += "**Estado Emocional:** O cliente tem uma atitude positiva, mas falta método. Ele acredita que pode melhorar, mas não sabe como. É um perfil com alta energia potencial para a mudança.\n\n";
            report += "**Estratégia de Comunicação:** Usar uma linguagem motivacional e de parceria. Focar em 'potencializar', 'acelerar' e 'transformar esperança em realidade'.\n\n";
            report += "**Ações para o Diagnóstico:**\n";
            report += "1. Elogiar a mentalidade positiva.\n";
            report += "2. Conectar os sonhos e objetivos dele a um plano numérico.\n";
            report += "3. Apresentar ferramentas práticas (planilhas, apps) que ele possa usar para transformar a esperança em ação.\n";
            break;
        case 'Ansiedade':
        case 'Vergonha':
            report += "**Estado Emocional:** O cliente sente o peso constante da dívida, o que gera ansiedade e medo do julgamento. A vergonha pode impedi-lo de procurar ajuda ou falar sobre o assunto.\n\n";
            report += "**Estratégia de Comunicação:** Criar um ambiente seguro e sem julgamentos. Normalizar a situação, mostrando que muitos passam por isso. Focar em 'retomar o controle' para aliviar a ansiedade.\n\n";
            report += "**Ações para o Diagnóstico:**\n";
            report += "1. Validar seus sentimentos e reforçar que ele não está sozinho.\n";
            report += "2. Mostrar que o plano é uma ferramenta para reduzir a ansiedade.\n";
            report += "3. Começar com passos pequenos e concretos para gerar sensação de progresso e controle.\n";
            break;
    }
    
    return report;
};


// ====================================================================================
// COMPONENTES DA UI
// ====================================================================================

function WelcomeScreen({ userName, setUserName, userGender, setUserGender, handleStartQuiz, isLoading }) {
  const [formError, setFormError] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName.trim() === '') {
      setFormError('Por favor, digite seu nome para começar!');
      return;
    }
    if (userGender === '') {
      setFormError('Por favor, selecione seu gênero para começar!');
      return;
    }
    setFormError('');
    handleStartQuiz();
  };
  
  const activeThemeClasses = themeClasses[userGender] || themeClasses.outros;
  const startButtonClass = userGender ? `${activeThemeClasses.primary} text-white` : 'bg-black hover:bg-gray-800 text-white';

  return (
    <div className="p-4 rounded-lg bg-white">
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-bold uppercase mb-4 leading-tight text-gray-800">
          Diagnóstico Financeiro
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 font-semibold mb-8">
          Descubra o perfil que te impede de sair das dívidas.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4 max-w-sm mx-auto">
          <input
            type="text"
            placeholder="Seu Nome Completo"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
            className="w-full p-3 rounded-lg border-2 border-gray-300 focus:border-blue-400 focus:outline-none text-gray-800 placeholder-gray-500"
          />
          <div className="flex justify-center space-x-4 mt-4">
            <label className="inline-flex items-center cursor-pointer">
              <input type="radio" name="gender" value="feminino" checked={userGender === 'feminino'} onChange={(e) => setUserGender(e.target.value)} className="form-radio text-pink-600 h-5 w-5" />
              <span className="ml-2 text-gray-700">Feminino</span>
            </label>
            <label className="inline-flex items-center cursor-pointer">
              <input type="radio" name="gender" value="masculino" checked={userGender === 'masculino'} onChange={(e) => setUserGender(e.target.value)} className="form-radio text-blue-600 h-5 w-5" />
              <span className="ml-2 text-gray-700">Masculino</span>
            </label>
            <label className="inline-flex items-center cursor-pointer">
              <input type="radio" name="gender" value="outros" checked={userGender === 'outros'} onChange={(e) => setUserGender(e.target.value)} className="form-radio text-teal-600 h-5 w-5" />
              <span className="ml-2 text-gray-700">Outro</span>
            </label>
          </div>
          {formError && (
              <div className={`p-3 rounded-md text-sm font-medium mt-4 bg-red-100 text-red-800`}>
                  {formError}
              </div>
          )}
          <button type="submit" className={`w-full font-bold py-3 px-6 rounded-full shadow-lg transform transition duration-300 hover:scale-105 inline-flex items-center justify-center ${startButtonClass}`} disabled={isLoading}>
            {isLoading ? 'CARREGANDO...' : 'COMEÇAR DIAGNÓSTICO'}
            {!isLoading && <ArrowRight className="ml-2" />}
          </button>
        </form>
      </div>
    </div>
  );
}

function MidpointSummaryScreen({ userName, userAnswers, onContinue }) {
    const getMidpointInsight = () => {
        const skillScores = calculateSkillScores(userAnswers);
        const lowestSkill = Object.keys(skillScores).reduce((a, b) => skillScores[a] < skillScores[b] ? a : b);

        switch (lowestSkill) {
            case 'Gestão de Dívidas':
                return "Já notamos que as dívidas podem ser um ponto de atenção. Estamos no caminho certo para criar um plano para elas!";
            case 'Controle de Gastos':
                return "Parece que entender para onde o dinheiro vai é um desafio. Estamos mapeando isso para te dar mais clareza!";
            case 'Mentalidade Financeira':
                return "Suas emoções e pensamentos sobre dinheiro são super importantes. Estamos analisando como fortalecê-los!";
            case 'Planejamento Futuro':
                return "Construir um futuro tranquilo é o objetivo. Já estamos identificando os melhores próximos passos para você!";
            default:
                return "Estamos montando um mapa detalhado da sua vida financeira.";
        }
    };

    return (
        <div className="text-center py-10 animate-fade-in">
            <div className="relative w-24 h-24 mx-auto mb-6">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#e5e7eb" strokeWidth="8" />
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#2563eb" strokeWidth="8" strokeDasharray="283" strokeDashoffset="141.5" transform="rotate(-90 50 50)" />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-blue-600">50%</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
                Você chegou na metade, {getFirstName(userName)}!
            </h2>
            <div className="bg-blue-50 text-blue-800 rounded-lg p-4 max-w-md mx-auto mb-8">
                <p className="font-semibold text-left">
                    <Lightbulb className="inline-block mr-2" size={20} />
                    <strong>Primeira Análise:</strong>
                </p>
                <p className="text-left mt-1">{getMidpointInsight()}</p>
            </div>
            <p className="text-lg text-gray-600 mb-8">
                Continue respondendo para afinarmos seu diagnóstico. Falta pouco!
            </p>
            <RadarChart scores={calculateSkillScores(userAnswers)} isPreview={true} />
            <button
                onClick={onContinue}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition duration-300 hover:scale-105 text-lg inline-flex items-center"
            >
                Continuar para a 2ª parte <ArrowRight className="ml-2" />
            </button>
        </div>
    );
}

function ProcessingScreen({ userName }) {
    const [messageIndex, setMessageIndex] = React.useState(0);
    const messages = [
        "Analisando suas respostas...",
        "Calculando seu perfil de endividamento...",
        "Montando seu gráfico de habilidades...",
        `Quase pronto, ${getFirstName(userName)}!`
    ];

    React.useEffect(() => {
        const interval = setInterval(() => {
            setMessageIndex(prevIndex => (prevIndex + 1));
        }, 1200);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="text-center py-20 flex flex-col items-center justify-center min-h-[300px]">
            <div className="flex justify-center items-end h-24 space-x-2 mb-8">
                <div className="w-6 bg-blue-500 animate-pulse-bar" style={{ animationDelay: '0s' }}></div>
                <div className="w-6 bg-blue-500 animate-pulse-bar" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-6 bg-blue-500 animate-pulse-bar" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-6 bg-blue-500 animate-pulse-bar" style={{ animationDelay: '0.3s' }}></div>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
                Processando...
            </h2>
            <p className="text-lg text-gray-600 transition-opacity duration-500 h-6">
                {messages[messageIndex % messages.length]}
            </p>
        </div>
    );
}


function QuizScreen({ currentQuestionIndex, userAnswers, userName, handleAnswerClick, handleNextQuestion, handlePreviousQuestion, selectedOptionText, activeThemeClasses }) {
    const questionOrder = ['q1', 'q2', 'q3', 'q4_dificuldade', 'q5_thermometer', 'q6', 'q7', 'q8', 'q9', 'q10'];
    const totalQuestions = questionOrder.length;
    const progressPercentage = ((currentQuestionIndex + 1) / totalQuestions) * 100;

    const currentQuestionData = questions.find(q => q.id === questionOrder[currentQuestionIndex]);

    return (
        <>
            <div className="flex items-center justify-between mb-4">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className={`h-2.5 rounded-full transition-all duration-500 ease-out ${activeThemeClasses.progressBarBg}`} style={{ width: `${progressPercentage}%` }}></div>
                </div>
                <span className="ml-3 text-sm font-medium text-gray-700">{Math.round(progressPercentage)}%</span>
            </div>

            <h2 className={`text-3xl sm:text-4xl font-bold text-black uppercase mb-2 leading-tight`}>
                Diagnóstico de Dívidas
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 font-semibold mb-6 normal-case">
                Entenda os reais motivos que te levaram às dívidas e como sair delas.
            </p>

            <div className="mb-8">
                <p className="text-lg sm:text-xl text-blue-600 font-semibold mb-4">
                    Passo {currentQuestionIndex + 1} de {totalQuestions}
                </p>
                <p className="text-xl sm:text-2xl text-gray-800 mb-6 font-medium">
                    {currentQuestionData.icon} Olá, {getFirstName(userName)}! {currentQuestionData.question.replace('{userName}', getFirstName(userName))}
                </p>
                <div className="grid grid-cols-1 gap-4">
                    {currentQuestionData.options.map((option, index) => {
                        const isSelected = option.text === selectedOptionText;
                        const isDisabled = selectedOptionText !== null;
                        
                        let buttonClass = `bg-white text-gray-800 shadow-sm border ${activeThemeClasses.buttonBorder} ${activeThemeClasses.buttonHover}`;
                        if (isDisabled) {
                            buttonClass = isSelected 
                                ? `${activeThemeClasses.buttonSelected} shadow-md transform scale-95` 
                                : 'bg-gray-100 text-gray-500 border-gray-200 cursor-not-allowed';
                        }

                        return (
                            <button
                                key={option.text}
                                onClick={() => handleAnswerClick(option, currentQuestionData.id)}
                                className={`w-full p-4 rounded-lg text-lg font-medium transition-all duration-300 ease-in-out relative ${buttonClass}`}
                                disabled={isDisabled}
                            >
                                {option.text}
                            </button>
                        );
                    })}
                </div>
            </div>

            <div className="flex items-center mt-8 w-full space-x-4">
                {currentQuestionIndex > 0 && (
                    <button onClick={handlePreviousQuestion} className="py-5 px-6 rounded-md text-xl font-bold text-white bg-black hover:bg-gray-800 transition-all duration-300 ease-in-out shadow-md uppercase w-40 inline-flex items-center justify-center">
                        <ArrowLeft className="mr-2" />
                        VOLTAR
                    </button>
                )}
                <button
                    onClick={handleNextQuestion}
                    className={`py-5 rounded-md text-xl font-bold text-white uppercase transition-all duration-300 ease-in-out shadow-lg flex-grow inline-flex items-center justify-center ${activeThemeClasses.primary}`}
                    disabled={selectedOptionText === null}
                >
                    {currentQuestionIndex === totalQuestions - 1 ? "VER MEU PERFIL" : "PRÓXIMO PASSO"}
                    <ArrowRight className="ml-2" />
                </button>
            </div>
        </>
    );
}

function LeadForm({
    userName,
    profileTitle,
    handleLeadCapture,
    isLoading,
    userEmail, setUserEmail,
    userWhatsapp, setUserWhatsapp,
    userIncomeRange, setUserIncomeRange,
    userDebtRange, setUserDebtRange,
    lgpdConsent, setLgpdConsent,
    activeThemeClasses,
}) {
    const [formError, setFormError] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!userEmail.trim() || !/\S+@\S+\.\S+/.test(userEmail)) {
            setFormError('Por favor, preencha um e-mail válido.');
            return;
        }
        if (!userWhatsapp.trim() || userWhatsapp.length < 12) {
            setFormError('Por favor, preencha um WhatsApp válido com DDD.');
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
            setFormError('Para continuar, você precisa aceitar a Política de Privacidade.');
            return;
        }
        setFormError('');
        handleLeadCapture();
    };

    return (
        <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 uppercase mb-4 leading-tight">
                SEU MAPA PARA SAIR DAS DÍVIDAS COMEÇA AQUI!
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 font-semibold mb-6">
                Seu perfil principal é de <strong>{profileTitle.split(':')[1].split(' ')[1]}</strong>.
                Para receber seu relatório completo e agendar seu diagnóstico gratuito, {getFirstName(userName)}, preencha seus dados abaixo.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4 max-w-sm mx-auto">
                <input type="email" placeholder="Seu Melhor E-mail" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} required className={`w-full p-3 rounded-lg border-2 ${activeThemeClasses.inputBorder} focus:outline-none text-gray-800 placeholder-gray-500`} />
                <input type="tel" placeholder="Seu WhatsApp (com DDD)" value={userWhatsapp} onChange={(e) => setUserWhatsapp(formatPhoneNumber(e.target.value))} required className={`w-full p-3 rounded-lg border-2 ${activeThemeClasses.inputBorder} focus:outline-none text-gray-800 placeholder-gray-500`} />
                <select value={userIncomeRange} onChange={(e) => setUserIncomeRange(e.target.value)} required className={`w-full p-3 rounded-lg border-2 ${activeThemeClasses.inputBorder} focus:outline-none text-gray-800`}>
                    {incomeRanges.map(range => <option key={range.value} value={range.value}>{range.label}</option>)}
                </select>
                <select value={userDebtRange} onChange={(e) => setUserDebtRange(e.target.value)} required className={`w-full p-3 rounded-lg border-2 ${activeThemeClasses.inputBorder} focus:outline-none text-gray-800`}>
                    {debtRanges.map(range => <option key={range.value} value={range.value}>{range.label}</option>)}
                </select>
                <div className="flex items-start text-left text-gray-700 text-sm mt-4">
                    <input type="checkbox" id="lgpdConsent" checked={lgpdConsent} onChange={(e) => setLgpdConsent(e.target.checked)} required className="mr-2 mt-1 form-checkbox h-4 w-4 text-blue-600" />
                    <label htmlFor="lgpdConsent">
                        Ao marcar esta caixa, você nos permite entrar em contato por e-mail e WhatsApp. Prometemos não compartilhar seus dados com terceiros.
                    </label>
                </div>
                {formError && (
                    <div className={`p-3 rounded-md text-sm font-medium mt-4 ${activeThemeClasses.errorBg} ${activeThemeClasses.errorText}`}>
                        {formError}
                    </div>
                )}
                <button type="submit" className={`w-full ${activeThemeClasses.primary} text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition duration-300 hover:scale-105 inline-flex items-center justify-center`} disabled={isLoading}>
                    {isLoading ? 'ENVIANDO...' : 'QUERO MEU DIAGNÓSTICO GRATUITO!'}
                    {!isLoading && <Send className="ml-2" />}
                </button>
            </form>
        </div>
    );
}

function RadarChart({ scores, isPreview = false }) {
    const skills = Object.keys(scores);
    const strongestSkill = skills.reduce((a, b) => scores[a] > scores[b] ? a : b);
    const weakestSkill = skills.reduce((a, b) => scores[a] < scores[b] ? a : b);

    const points = skills.map((skill, i) => {
        const angle = (i / skills.length) * 2 * Math.PI - Math.PI / 2;
        let value = scores[skill] / 100;
        if (isPreview && i >= 2) value = 0.1;
        const x = 50 + Math.cos(angle) * value * 45;
        const y = 50 + Math.sin(angle) * value * 45;
        return `${x},${y}`;
    }).join(' ');

    return (
        <div className="my-8">
            <h4 className="text-xl font-bold text-gray-800 mb-2">{isPreview ? "Prévia do seu Termômetro" : "Seu Termômetro Financeiro"}</h4>
            
            {isPreview && (
                <div className="max-w-md mx-auto text-center text-gray-600 mb-4 bg-gray-50 p-3 rounded-lg">
                    <p>Com base nas suas primeiras respostas, já começamos a desenhar seu mapa. Continue para o resultado completo!</p>
                </div>
            )}

            {!isPreview && (
                <div className="max-w-md mx-auto text-center text-gray-600 mb-4 bg-gray-50 p-3 rounded-lg">
                    <p>Este gráfico mostra seus pontos fortes e as áreas que mais precisam de atenção. Quanto mais preenchida a área, mais forte você está nela.</p>
                    <p className="mt-2">Seu ponto mais forte é em <strong>{strongestSkill}</strong>. A área com maior oportunidade de melhoria é em <strong>{weakestSkill}</strong>.</p>
                </div>
            )}
            <div className="relative w-full max-w-sm mx-auto aspect-square">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                    {[0.25, 0.5, 0.75, 1].map(val => (
                        <polygon key={val}
                            points={skills.map((_, i) => {
                                const angle = (i / skills.length) * 2 * Math.PI - Math.PI / 2;
                                const x = 50 + Math.cos(angle) * val * 45;
                                const y = 50 + Math.sin(angle) * val * 45;
                                return `${x},${y}`;
                            }).join(' ')}
                            fill="none" stroke="#e5e7eb" strokeWidth="0.5" />
                    ))}
                    {skills.map((_, i) => {
                        const angle = (i / skills.length) * 2 * Math.PI - Math.PI / 2;
                        const x = 50 + Math.cos(angle) * 45;
                        const y = 50 + Math.sin(angle) * 45;
                        return <line key={i} x1="50" y1="50" x2={x} y2={y} stroke="#e5e7eb" strokeWidth="0.5" />
                    })}
                    <polygon points={points} fill={isPreview ? "rgba(150, 150, 150, 0.5)" : "rgba(37, 99, 235, 0.5)"} stroke={isPreview ? "#9ca3af" : "#2563eb"} strokeWidth="1" />
                </svg>
                {skills.map((skill, i) => {
                    const angle = (i / skills.length) * 2 * Math.PI - Math.PI / 2;
                    const x = 50 + Math.cos(angle) * 52;
                    const y = 50 + Math.sin(angle) * 52;
                    const style = {
                        top: `${y}%`,
                        left: `${x}%`,
                        transform: 'translate(-50%, -50%)',
                        textAlign: x > 51 ? 'left' : x < 49 ? 'right' : 'center'
                    };
                    return <div key={skill} className="absolute text-xs font-semibold text-gray-600" style={style}>{skill.replace(/ /g, '\n')}</div>;
                })}
            </div>
        </div>
    );
}

function ResultsScreen({ userName, profile, formSubmitted, userAnswers }) {
    const [showSuccessMessage, setShowSuccessMessage] = React.useState(formSubmitted);
    const [copySuccess, setCopySuccess] = React.useState('');
    const skillScores = calculateSkillScores(userAnswers);
    const strongestSkill = Object.keys(skillScores).reduce((a, b) => skillScores[a] > skillScores[b] ? a : b);
    const weakestSkill = Object.keys(skillScores).reduce((a, b) => skillScores[a] < skillScores[b] ? a : b);

    const shareUrl = window.location.href;
    const shareText = encodeURIComponent(`Acabei de fazer um diagnóstico financeiro gratuito e descobri o que me impede de sair das dívidas! Eles liberaram algumas vagas para esse diagnóstico que era pago. Garanta a sua antes que acabe! O link é esse: ${shareUrl}`);
    const textToCopy = `Acabei de fazer um diagnóstico financeiro gratuito e descobri o que me impede de sair das dívidas! Eles liberaram algumas vagas para esse diagnóstico que era pago. Garanta a sua antes que acabe! O link é esse: ${shareUrl}`;

    const handleShare = (platform) => {
        let url = '';
        switch (platform) {
            case 'whatsapp':
                url = `https://api.whatsapp.com/send?text=${shareText}`;
                break;
            case 'facebook':
                url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
                break;
            default:
                return;
        }
        window.open(url, '_blank');
    };

    const handleCopy = () => {
        const textArea = document.createElement("textarea");
        textArea.value = textToCopy;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            document.execCommand('copy');
            setCopySuccess('Copiado!');
            setTimeout(() => setCopySuccess(''), 2000);
        } catch (err) {
            console.error('Falha ao copiar texto: ', err);
        }
        document.body.removeChild(textArea);
    };

    return (
        <div className="text-center relative">
            {/* Botões de Compartilhamento Flutuantes */}
            <div className="hidden md:block fixed left-4 top-1/2 -translate-y-1/2 z-20">
                <div className="flex flex-col space-y-2 bg-white p-2 rounded-lg shadow-lg border">
                    <button onClick={() => handleShare('whatsapp')} className="p-2 text-green-500 hover:bg-green-100 rounded-full transition-colors"><WhatsAppIcon /></button>
                    <button onClick={() => handleShare('facebook')} className="p-2 text-blue-600 hover:bg-blue-100 rounded-full transition-colors"><FacebookIcon /></button>
                    <button onClick={handleCopy} className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors relative">
                        <Copy size={24} />
                        {copySuccess && <span className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-xs rounded">{copySuccess}</span>}
                    </button>
                </div>
            </div>

            {showSuccessMessage && ( 
                <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6 text-left" role="alert">
                    <div className="flex">
                        <div className="py-1"><CheckCircle className="fill-current h-6 w-6 text-green-500 mr-4" /></div>
                        <div>
                            <p className="font-bold">Dados enviados com sucesso!</p>
                            <p className="text-sm">Seu relatório completo será enviado para seu e-mail e WhatsApp em breve.</p>
                        </div>
                         <button onClick={() => setShowSuccessMessage(false)} className="ml-auto -mx-1.5 -my-1.5 bg-green-100 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex h-8 w-8">
                            <span className="sr-only">Fechar</span>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                    </div>
                </div>
            )}
            <div className="bg-gray-50 p-6 rounded-xl shadow-inner mb-8 text-left">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">Seu Diagnóstico Rápido, {getFirstName(userName)}!</h3>
                <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg border">
                        <p className="font-bold text-lg text-blue-600">Seu Perfil</p>
                        <p className="text-gray-700">{profile.title.split(':')[1].trim()}</p>
                        <p className="text-sm text-gray-500 mt-1">Isso mostra o principal comportamento que alimenta suas dívidas.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border">
                        <p className="font-bold text-lg text-green-600">Seu Ponto de Partida</p>
                        <p className="text-gray-700">{strongestSkill}</p>
                        <p className="text-sm text-gray-500 mt-1">Essa é a área onde você demonstra mais consciência. Vamos usá-la como alavanca.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border">
                        <p className="font-bold text-lg text-orange-600">Sua Maior Oportunidade</p>
                        <p className="text-gray-700">{weakestSkill}</p>
                        <p className="text-sm text-gray-500 mt-1">Essa é a área que, com um pouco de foco, trará os maiores resultados para você.</p>
                    </div>
                </div>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-xl mb-8">
               <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Assista o vídeo abaixo e descubra o caminho para ter seu dinheiro sobrando em 8 semanas ou menos:</h3>
               <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                  <iframe 
                      src="https://www.youtube.com/embed/6GueqpXKTcE" 
                      title="YouTube video player" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                      className="w-full h-full"
                  ></iframe>
               </div>
            </div>
            
            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-xl">
                <h3 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-2">Pronto para o Próximo Passo?</h3>
                 <p className="text-lg text-gray-600 mb-6">No diagnóstico, vamos usar seu ponto de partida em <strong>{strongestSkill}</strong> para transformar sua maior oportunidade em <strong>{weakestSkill}</strong> em uma nova força. Vamos começar?</p>
                <div className="w-full">
                    <button
                        data-cal-link="kgfinancas/diagnostico"
                        className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transform transition duration-300 hover:scale-105 inline-flex items-center justify-center text-xl uppercase"
                    >
                        <Calendar className="mr-2" />
                        AGENDAR MEU DIAGNÓSTICO
                    </button>
                </div>
            </div>
            {/* Botões de compartilhamento para mobile */}
            <div className="md:hidden mt-8">
                <p className="text-sm font-semibold text-gray-600 mb-2">COMPARTILHE ESSA OPORTUNIDADE:</p>
                <div className="flex justify-center space-x-4">
                    <button onClick={() => handleShare('whatsapp')} className="p-3 bg-green-100 text-green-600 rounded-full shadow-sm"><WhatsAppIcon /></button>
                    <button onClick={() => handleShare('facebook')} className="p-3 bg-blue-100 text-blue-600 rounded-full shadow-sm"><FacebookIcon /></button>
                    <button onClick={handleCopy} className="p-3 bg-gray-100 text-gray-600 rounded-full shadow-sm relative">
                        <Copy size={24} />
                         {copySuccess && <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded">{copySuccess}</span>}
                    </button>
                </div>
            </div>
        </div>
    );
}

// ====================================================================================
// COMPONENTE PRINCIPAL (APP)
// ====================================================================================

function App() {
    const [quizState, setQuizState] = React.useState('welcome');
    const [isLoading, setIsLoading] = React.useState(false);
    const [formSubmitted, setFormSubmitted] = React.useState(false);
    const [userName, setUserName] = React.useState('');
    const [userGender, setUserGender] = React.useState('');
    const [userEmail, setUserEmail] = React.useState('');
    const [userWhatsapp, setUserWhatsapp] = React.useState('');
    const [userIncomeRange, setUserIncomeRange] = React.useState('');
    const [userDebtRange, setUserDebtRange] = React.useState('');
    const [lgpdConsent, setLgpdConsent] = React.useState(false);
    const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
    const [userAnswers, setUserAnswers] = React.useState([]);
    const [score, setScore] = React.useState(0);
    const [selectedOptionText, setSelectedOptionText] = React.useState(null);
    const [quizSessionId, setQuizSessionId] = React.useState(null);
    const [initialUrlParams, setInitialUrlParams] = React.useState({});
    const [showRestoreModal, setShowRestoreModal] = React.useState(false);

    const activeThemeClasses = themeClasses[userGender] || themeClasses.outros;

    const saveStateToLocalStorage = React.useCallback((state) => {
        try {
            const stateToSave = {
                ...state,
                isLoading: false,
                formSubmitted: false,
                showRestoreModal: false,
            };
            localStorage.setItem('quizProgress', JSON.stringify(stateToSave));
        } catch (error) {
            console.error("Could not save quiz progress", error);
        }
    }, []);
    
    React.useEffect(() => {
        if(quizState !== 'welcome') {
            saveStateToLocalStorage({ quizState, userName, userGender, currentQuestionIndex, userAnswers, score });
        }
    }, [quizState, userName, userGender, currentQuestionIndex, userAnswers, score, saveStateToLocalStorage]);
    
    React.useEffect(() => {
        // INSTRUÇÃO PARA IMAGEM NO COMPARTILHAMENTO (Facebook/WhatsApp):
        // Para que uma imagem apareça ao compartilhar o link, adicione as seguintes
        // tags <meta> dentro da tag <head> do seu arquivo index.html principal.
        // Substitua 'URL_DA_SUA_IMAGEM.jpg' pela URL real da imagem que você quer mostrar.
        /*
        <meta property="og:title" content="Diagnóstico Financeiro Gratuito" />
        <meta property="og:description" content="Descubra o perfil que te impede de sair das dívidas e receba um plano de ação." />
        <meta property="og:image" content="URL_DA_SUA_IMAGEM.jpg" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:type" content="website" />
        */

        try {
            const savedState = localStorage.getItem('quizProgress');
            if (savedState) {
                const parsedState = JSON.parse(savedState);
                if (parsedState.quizState !== 'welcome' && parsedState.quizState !== 'results') {
                    setShowRestoreModal(true);
                }
            }
        } catch (error) {
            console.error("Could not load quiz progress", error);
        }

        if (!window.Cal) {
            (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if (typeof namespace === "string") { cal.ns[namespace] = cal.ns[namespace] || api; p(cal.ns[namespace], ar); p(cal, ["initNamespace", namespace]); } else p(cal, ar); return; } p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
        }
        window.Cal("init", { origin: "https://app.cal.com" });

        const params = new URLSearchParams(window.location.search);
        const paramsObj = {};
        for (let [key, value] of params.entries()) {
            paramsObj[key] = value;
        }
        setInitialUrlParams(paramsObj);
        setQuizSessionId(crypto.randomUUID());
    }, []);

    const restoreQuiz = () => {
        const savedState = JSON.parse(localStorage.getItem('quizProgress'));
        setQuizState(savedState.quizState);
        setUserName(savedState.userName);
        setUserGender(savedState.userGender);
        setCurrentQuestionIndex(savedState.currentQuestionIndex);
        setUserAnswers(savedState.userAnswers);
        setScore(savedState.score);
        setShowRestoreModal(false);
    };

    const startNewQuiz = () => {
        localStorage.removeItem('quizProgress');
        setQuizState('welcome');
        setUserName('');
        setUserGender('');
        setUserEmail('');
        setUserWhatsapp('');
        setUserIncomeRange('');
        setUserDebtRange('');
        setLgpdConsent(false);
        setCurrentQuestionIndex(0);
        setUserAnswers([]);
        setScore(0);
        setSelectedOptionText(null);
        setShowRestoreModal(false);
    };

    const handleStartQuiz = () => setQuizState('quiz');

    const handleAnswerClick = (option, questionId) => {
        if (selectedOptionText !== null) return;
        
        if (option.value > 0) {
            setScore(prevScore => prevScore + option.value);
        }
        
        setSelectedOptionText(option.text);

        const questionData = questions.find(q => q.id === questionId);
        
        setUserAnswers(prev => [...prev, {
            questionId: questionId,
            questionIndex: currentQuestionIndex,
            question: questionData.question.replace('{userName}', getFirstName(userName)),
            selectedOption: option.text,
            selectedValue: option.value,
        }]);
    };

    const handleNextQuestion = () => {
        setSelectedOptionText(null);

        const midpointIndex = 4;
        if (currentQuestionIndex === midpointIndex) {
            setQuizState('midpointSummary');
            return;
        }

        const questionOrder = ['q1', 'q2', 'q3', 'q4_dificuldade', 'q5_thermometer', 'q6', 'q7', 'q8', 'q9', 'q10'];
        const totalQuestions = questionOrder.length;

        if (currentQuestionIndex < totalQuestions - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setQuizState('processing');
            setTimeout(() => setQuizState('leadForm'), 4800);
        }
    };
    
    const handleContinueFromMidpoint = () => {
        setQuizState('quiz');
        setCurrentQuestionIndex(currentQuestionIndex + 1);
    };

    const handlePreviousQuestion = () => {
        if (quizState === 'midpointSummary') {
            setQuizState('quiz');
            setCurrentQuestionIndex(currentQuestionIndex); 
            return;
        }

        if (currentQuestionIndex > 0) {
            const lastAnswer = userAnswers[userAnswers.length - 1];
            if (lastAnswer) {
                if (lastAnswer.selectedValue > 0) {
                    setScore(score - lastAnswer.selectedValue);
                }
                setUserAnswers(prev => prev.slice(0, -1));
            }
            setSelectedOptionText(null);
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const handleLeadCapture = async () => {
        setIsLoading(true);
        try {
            const webhookUrl = 'https://webhook.kellegontijo.com/webhook/quizdf';

            const formattedUserName = formatName(userName);
            const profileData = getFinancialProfile(score);
            const actionPlan = generateActionPlanReport(formattedUserName, userAnswers, score);
            const emotional = generateEmotionalReport(formattedUserName, userAnswers);

            const payload = {
                quizSessionId,
                userName: formattedUserName,
                userGender,
                userEmail: userEmail.toLowerCase(),
                userWhatsapp: formatPhoneNumber(userWhatsapp),
                userIncomeRange: incomeRanges.find(r => r.value === userIncomeRange)?.label || '',
                userDebtRange: debtRanges.find(r => r.value === userDebtRange)?.label || '',
                totalScore: score > 0 ? score : 10,
                financialProfile: profileData.title,
                reports: {
                    profile: profileData.description,
                    actionPlan: actionPlan,
                    emotional: emotional,
                },
                quizAnswers: userAnswers,
                skillScores: calculateSkillScores(userAnswers),
                initialUrlParams,
                lgpdConsent,
            };

            const response = await fetch(webhookUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (!response.ok) throw new Error(`Erro HTTP! status: ${response.status}`);
            
            setFormSubmitted(true);
            setQuizState('results');
            localStorage.removeItem('quizProgress');

        } catch (error) {
            console.error('Erro ao enviar dados para o n8n:', error);
            alert('Ocorreu um erro ao enviar seus dados. Por favor, tente novamente.');
        } finally {
            setIsLoading(false);
        }
    };

    const renderContent = () => {
        switch (quizState) {
            case 'quiz':
                return <QuizScreen 
                    currentQuestionIndex={currentQuestionIndex}
                    userAnswers={userAnswers}
                    userName={userName}
                    handleAnswerClick={handleAnswerClick}
                    handleNextQuestion={handleNextQuestion}
                    handlePreviousQuestion={handlePreviousQuestion}
                    selectedOptionText={selectedOptionText}
                    activeThemeClasses={activeThemeClasses}
                   />;
            case 'midpointSummary':
                return <MidpointSummaryScreen 
                    userName={userName}
                    userAnswers={userAnswers}
                    onContinue={handleContinueFromMidpoint}
                />;
            case 'processing':
                return <ProcessingScreen userName={userName} />;
            case 'leadForm':
                return <LeadForm 
                    userName={userName}
                    profileTitle={getFinancialProfile(score).title}
                    handleLeadCapture={handleLeadCapture}
                    isLoading={isLoading}
                    userEmail={userEmail} setUserEmail={setUserEmail}
                    userWhatsapp={userWhatsapp} setUserWhatsapp={setUserWhatsapp}
                    userIncomeRange={userIncomeRange} setUserIncomeRange={setUserIncomeRange}
                    userDebtRange={userDebtRange} setUserDebtRange={setUserDebtRange}
                    lgpdConsent={lgpdConsent} setLgpdConsent={setLgpdConsent}
                    activeThemeClasses={activeThemeClasses}
                />;
            case 'results':
                return <ResultsScreen 
                    userName={userName}
                    profile={getFinancialProfile(score)}
                    formSubmitted={formSubmitted}
                    userAnswers={userAnswers}
                />;
            case 'welcome':
            default:
                return <WelcomeScreen 
                    userName={userName}
                    setUserName={setUserName}
                    userGender={userGender}
                    setUserGender={setUserGender}
                    handleStartQuiz={handleStartQuiz}
                    isLoading={isLoading}
                />;
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 font-sans">
             <style>{`
                @keyframes pulse-bar {
                    0%, 100% { height: 1rem; }
                    50% { height: 6rem; }
                }
                .animate-pulse-bar {
                    animation: pulse-bar 1.2s infinite ease-in-out;
                }
                .aspect-w-16 {
                    position: relative;
                    width: 100%;
                    padding-bottom: 56.25%;
                }
                .aspect-w-16 > iframe {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    top: 0;
                    left: 0;
                }
            `}</style>
            <div className="relative z-10 bg-white rounded-xl shadow-2xl p-6 sm:p-8 lg:p-10 max-w-2xl w-full text-center">
                {showRestoreModal && (
                    <div className="absolute inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50 rounded-xl">
                        <div className="bg-white p-8 rounded-lg shadow-2xl text-center max-w-sm">
                            <RefreshCw className="mx-auto h-12 w-12 text-blue-500 mb-4"/>
                            <h3 className="text-2xl font-bold mb-4">Vimos que você não terminou!</h3>
                            <p className="text-gray-600 mb-6">Deseja continuar de onde parou ou começar um novo quiz?</p>
                            <div className="flex space-x-4">
                                <button onClick={startNewQuiz} className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-lg">Começar de Novo</button>
                                <button onClick={restoreQuiz} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">Continuar</button>
                            </div>
                        </div>
                    </div>
                )}
                {renderContent()}
            </div>
        </div>
    );
}

export default App;
