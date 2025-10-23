import React from 'react';
import { Wallet, Map, TrendingDown, Shield, Snowflake, CheckCircle, Award, BrainCircuit, Target, ArrowRight, ArrowLeft, Send, RefreshCw, Copy, Users } from 'lucide-react';

// ====================================================================================
// ÍCONES PERSONALIZADOS (SVG)
// ====================================================================================


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
    id: 'q8_slider',
    question: "Numa escala de 0 a 10, qual o nível da sua preocupação com dinheiro hoje?",
    skill: 'Mentalidade Financeira',
    icon: <Snowflake className="inline-block mr-2 text-cyan-500" size={24} />,
    display: 'grid',
    labels: { min: 'Pouca', max: 'Pânico Total' },
    options: [
      { text: '0', value: 3 }, { text: '1', value: 3 }, { text: '2', value: 3 },
      { text: '3', value: 3 }, { text: '4', value: 2 }, { text: '5', value: 2 },
      { text: '6', value: 2 }, { text: '7', value: 2 }, { text: '8', value: 1 },
      { text: '9', value: 1 }, { text: '10', value: 1 }
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
    primary: 'bg-[#189AB4] hover:bg-[#137a8f] text-white',
    textHighlight: 'text-[#189AB4]',
    progressBarBg: 'bg-[#189AB4]',
    buttonBorder: 'border-slate-300',
    buttonHover: 'hover:border-[#189AB4] hover:text-[#189AB4]',
    buttonSelected: 'bg-[#189AB4] text-white border-[#189AB4]',
    inputBorder: 'border-slate-300 focus:border-[#189AB4] focus:ring-[#189AB4]',
    radio: 'text-[#189AB4] focus:ring-[#189AB4]',
    circleBorder: 'border-[#189AB4]',
    sliderThumb: 'bg-[#189AB4]',
  },
  feminino: {
    primary: 'bg-[#A86A8A] hover:bg-[#8e5974] text-white',
    textHighlight: 'text-[#A86A8A]',
    progressBarBg: 'bg-[#A86A8A]',
    buttonBorder: 'border-slate-300',
    buttonHover: 'hover:border-[#A86A8A] hover:text-[#A86A8A]',
    buttonSelected: 'bg-[#A86A8A] text-white border-[#A86A8A]',
    inputBorder: 'border-slate-300 focus:border-[#A86A8A] focus:ring-[#A86A8A]',
    radio: 'text-[#A86A8A] focus:ring-[#A86A8A]',
    circleBorder: 'border-[#A86A8A]',
    sliderThumb: 'bg-[#A86A8A]',
  },
  outros: {
    primary: 'bg-slate-700 hover:bg-slate-800 text-white',
    textHighlight: 'text-slate-700',
    progressBarBg: 'bg-slate-700',
    buttonBorder: 'border-slate-300',
    buttonHover: 'hover:border-slate-600 hover:text-slate-700',
    buttonSelected: 'bg-slate-700 text-white border-slate-700',
    inputBorder: 'border-slate-300 focus:border-slate-600 focus:ring-slate-600',
    radio: 'text-slate-700 focus:ring-slate-600',
    circleBorder: 'border-slate-700',
    sliderThumb: 'bg-slate-700',
  },
};

const incomeRanges = [
    { value: '', label: 'Selecione sua faixa de renda' },
    { value: 'ate-2000', label: 'Até R$2.000' },
    { value: '2001-4000', label: 'Entre R$2.001 e R$4.000' },
    { value: '4001-6000', label: 'Entre R$4.001 e R$6.000' },
    { value: '6001-8000', label: 'Entre R$6.001 e R$8.000' },
    { value: '8001-10000', label: 'Entre R$8.001 e R$10.000' },
    { value: '10001-20000', label: 'Entre R$10.001 e R$20.000' },
    { value: 'acima-20000', label: 'Acima de R$20.000' },
];

const debtRanges = [
    { value: '', label: 'Selecione sua faixa de dívida' },
    { value: 'ate-4000', label: 'Até R$4.000' },
    { value: '4001-6000', label: 'Entre R$4.001 e R$6.000' },
    { value: '6001-8000', label: 'Entre R$6.001 e R$8.000' },
    { value: '8001-10000', label: 'Entre R$8.001 e R$10.000' },
    { value: '10001-20000', label: 'Entre R$10.001 e R$20.000' },
    { value: 'acima-20000', label: 'Acima de R$20.000' },
];

const skillInfoData = [
    { name: 'Controle de Gastos', description: 'Sua capacidade de saber para onde o dinheiro vai.' },
    { name: 'Gestão de Dívidas', description: 'Sua habilidade de lidar e eliminar dívidas existentes.' },
    { name: 'Mentalidade Financeira', description: 'Suas crenças e emoções em relação ao dinheiro.' },
    { name: 'Planejamento Futuro', description: 'Sua preparação para emergências e objetivos de longo prazo.' },
];

// ====================================================================================
// FUNÇÕES HELPERS
// ====================================================================================

const formatName = (name) => {
  if (!name) return '';
  
  // Palavras a serem ignoradas (preposições)
  const wordsToIgnore = ['de', 'da', 'do', 'das', 'dos', 'e'];
  
  return name.toLowerCase().split(' ').filter((word, index, array) => {
    // Sempre incluir a primeira palavra (nome próprio)
    if (index === 0) return true;
    
    // Remover palavras a serem ignoradas
    return !wordsToIgnore.includes(word);
  }).map((word) => {
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
  // Apenas remove caracteres não numéricos, sem adicionar automaticamente o código do Brasil
  return phone.replace(/\D/g, '');
};

const formatPhoneWithMask = (phone) => {
  if (!phone) return '';
  
  // Remove tudo que não é número
  let cleanedPhone = phone.replace(/\D/g, '');
  
  // Limita o número de dígitos (11 para celular com nono dígito, 10 para fixo)
  if (cleanedPhone.length > 11) {
    cleanedPhone = cleanedPhone.substring(0, 11);
  }
  
  // Aplica a máscara (XX) XXXXX-XXXX ou (XX) XXXX-XXXX
  if (cleanedPhone.length >= 10) {
    if (cleanedPhone.length === 10) {
      // Telefone fixo ou celular antigo sem nono dígito
      return `(${cleanedPhone.slice(0, 2)}) ${cleanedPhone.slice(2, 6)}-${cleanedPhone.slice(6, 10)}`;
    } else if (cleanedPhone.length === 11) {
      // Celular com nono dígito
      return `(${cleanedPhone.slice(0, 2)}) ${cleanedPhone.slice(2, 7)}-${cleanedPhone.slice(7, 11)}`;
    }
  } else if (cleanedPhone.length > 2) {
    // Formata parcialmente enquanto digita
    if (cleanedPhone.length <= 6) {
      return `(${cleanedPhone.slice(0, 2)}) ${cleanedPhone.slice(2)}`;
    } else if (cleanedPhone.length <= 10) {
      return `(${cleanedPhone.slice(0, 2)}) ${cleanedPhone.slice(2, 6)}-${cleanedPhone.slice(6)}`;
    }
  } else if (cleanedPhone.length > 0) {
    // Formata parcialmente o DDD
    return `(${cleanedPhone}`;
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

const getFirstAidTip = (weakestSkill) => {
    switch (weakestSkill) {
        case 'Gestão de Dívidas':
            return {
                title: "Primeiro Socorro: Gestão de Dívidas",
                tip: "Pegue um papel e liste TODAS as suas dívidas, da menor para a maior. Apenas o ato de visualizar o 'inimigo' já diminui a ansiedade e é o primeiro passo para vencê-lo.",
                icon: <TrendingDown size={24} className="text-slate-500" />
            };
        case 'Controle de Gastos':
            return {
                title: "Primeiro Socorro: Controle de Gastos",
                tip: "Durante os próximos 3 dias, anote CADA centavo que gastar. Use um app ou um caderno. O objetivo não é se culpar, mas sim ganhar clareza sobre para onde seu dinheiro está indo.",
                icon: <Wallet size={24} className="text-slate-500" />
            };
        case 'Mentalidade Financeira':
            return {
                title: "Primeiro Socorro: Mentalidade Financeira",
                tip: "Escolha UMA pequena vitória financeira para esta semana (ex: não pedir delivery por 2 dias). Conquistá-la vai começar a treinar sua mente para o sucesso e o controle.",
                icon: <BrainCircuit size={24} className="text-slate-500" />
            };
        case 'Planejamento Futuro':
            return {
                title: "Primeiro Socorro: Planejamento Futuro",
                tip: "Abra sua conta do banco AGORA e transfira R$ 1,00 para a poupança. O valor não importa. O ato de começar a construir sua reserva de emergência é o que transforma.",
                icon: <Shield size={24} className="text-slate-500" />
            };
        default:
            return null;
    }
};

const generateCompleteReport = (userName, userAnswers, score) => {
    const profile = getFinancialProfile(score);
    const skillScores = calculateSkillScores(userAnswers);
    const weakestSkill = Object.keys(skillScores).reduce((a, b) => skillScores[a] < skillScores[b] ? a : b);
    const thermometerAnswer = userAnswers.find(answer => answer.questionId === 'q5_thermometer');
    const emotion = thermometerAnswer ? thermometerAnswer.selectedOption : 'Não informado';

    let emotionalAnalysis = '';
    switch (emotion) {
        case 'Sobrevivência':
            emotionalAnalysis = "O sentimento de 'Sobrevivência' é exaustivo. Ele nos mantém em alerta constante, focados apenas em cobrir o básico. O primeiro passo para a mudança é criar um pequeno 'respiro' financeiro para que você possa começar a planejar, e não apenas reagir.";
            break;
        case 'Desespero':
            emotionalAnalysis = "O 'Desespero' nos paralisa. Ele vem da sensação de que o problema é grande demais e não há saída. Mas acredite, sempre há um caminho. O que falta é um mapa claro, um passo a passo simples para organizar o caos e te devolver a direção.";
            break;
        case 'Vergonha':
            emotionalAnalysis = "A 'Vergonha' é um sentimento que nos isola e nos impede de buscar ajuda. Saiba que você não está sozinho(a). Milhões de brasileiros enfrentam desafios financeiros. O ato de fazer este diagnóstico já é um passo corajoso para quebrar esse ciclo.";
            break;
        case 'Ansiedade':
            emotionalAnalysis = "A 'Ansiedade' financeira vem da falta de controle. É a preocupação constante com o futuro e com as contas que vão chegar. Um plano claro é o melhor remédio para isso, pois ele transforma a incerteza em previsibilidade.";
            break;
        default:
            break;
    }

    let report = `# Seu Diagnóstico Financeiro Personalizado\n\n`;
    report += `**Um mapa para sua transformação financeira, preparado para ${userName}**\n\n`;
    report += `---\n\n`;
    report += `### Página 1: Seu Perfil Principal\n\n`;
    report += `**Seu Perfil é: ${profile.title.split(':')[1].trim()}**\n\n`;
    report += `**O que isso significa no seu dia a dia?**\n`;
    if (profile.title.includes('Descontrolado')) {
        report += `* Você provavelmente sente que as dívidas formam uma bola de neve, usando um crédito para pagar outro.\n`;
        report += `* A sensação de caos e desespero pode ser constante.\n`;
        report += `* É difícil ver uma saída clara para a situação atual.\n`;
    } else if (profile.title.includes('Gastador')) {
        report += `* Você provavelmente sente que trabalha muito, mas nunca vê o dinheiro sobrar.\n`;
        report += `* A fatura do cartão de crédito é uma fonte constante de estresse e surpresas.\n`;
        report += `* Você costuma usar a frase "eu mereço" para justificar gastos que, no fundo, sabe que não deveria fazer.\n`;
    } else { // Desligado
        report += `* Você paga suas contas, mas não tem um controle claro sobre suas finanças.\n`;
        report += `* Imprevistos financeiros costumam te pegar de surpresa.\n`;
        report += `* Você sente que poderia fazer mais com seu dinheiro, mas não sabe por onde começar.\n`;
    }
    report += `\n---\n\n`;
    report += `### Página 2: Seu Termômetro Emocional\n\n`;
    report += `**Sua palavra foi: ${emotion.toUpperCase()}**\n\n`;
    report += `**O que essa emoção nos diz:** ${emotionalAnalysis}\n\n`;
    report += `---\n\n`;
    report += `### Página 3: Análise Detalhada das Suas Habilidades\n\n`;
    Object.keys(skillScores).forEach(skill => {
        const score = skillScores[skill];
        report += `* **${skill}: ${score}%**\n`;
        if (score <= 33) {
            report += `  * **Diagnóstico:** Sua pontuação indica que esta é uma área de atenção crítica. É aqui que está a principal raiz dos seus desafios financeiros.\n`;
        } else if (score <= 67) {
            report += `  * **Diagnóstico:** Você já tem alguma consciência nesta área, mas ainda há muito espaço para melhorias que trarão grandes resultados.\n`;
        } else {
            report += `  * **Diagnóstico:** Esta é uma área onde você demonstra mais força. Vamos usá-la como base para impulsionar as outras.\n`;
        }
    });
    report += `\n---\n\n`;
    report += `### Página 4: Seu Plano de Ação Imediato\n\n`;
    const firstAid = getFirstAidTip(weakestSkill);
    if (firstAid) {
        report += `**Sua Maior Oportunidade é em: ${weakestSkill}**\n\n`;
        report += `**${firstAid.title}:** ${firstAid.tip}\n`;
    }
    report += `\n---\n\n`;
    report += `### Página 5: Seus Próximos Passos Para a Liberdade\n\n`;
    report += `**O que você descobriu até aqui:**\n`;
    report += `* Você agora sabe seu **Perfil Comportamental**.\n`;
    report += `* Você entende qual **Emoção** guia suas decisões.\n`;
    report += `* Você tem clareza sobre sua **Maior Fraqueza** e seu **Ponto Forte**.\n`;
    report += `* Você já tem uma **Missão Imediata** para começar a virar o jogo.\n\n`;
    report += `**Este relatório é o Raio-X. O diagnóstico gratuito é o início do tratamento.**\n\n`;
    report += `*"Peregrinei muito buscando alguém que pudesse me orientar e me resgatar do fundo do poço... ali estava uma pessoa real, que trilhou o caminho e hoje nos ensina... se você ainda está em dúvida, invista em você, no seu conhecimento... eu já iniciei o meu caminho!!!"* ~ Andréia Laureano\n`;

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
  const startButtonClass = userGender ? `${activeThemeClasses.primary}` : 'bg-slate-800 hover:bg-slate-900 text-white';

  return (
    <div className="p-4">
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-800">
          Quiz Seu Perfil Financeiro
        </h2>
        <p className="text-lg text-slate-500 mt-2 mb-8">
          O primeiro passo de como fazer seu dinheiro sobrar na palma da sua mão.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6 max-w-sm mx-auto">
          <input
            type="text"
            placeholder="Seu Nome Completo"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
            className={`w-full p-3 rounded-lg border-2 ${activeThemeClasses.inputBorder} focus:ring-1 transition-colors duration-200`}
          />
          <div className="flex justify-center space-x-4">
            <label className="inline-flex items-center cursor-pointer">
              <input type="radio" name="gender" value="feminino" checked={userGender === 'feminino'} onChange={(e) => setUserGender(e.target.value)} className={`form-radio h-5 w-5 ${activeThemeClasses.radio}`} />
              <span className="ml-2 text-slate-700">Feminino</span>
            </label>
            <label className="inline-flex items-center cursor-pointer">
              <input type="radio" name="gender" value="masculino" checked={userGender === 'masculino'} onChange={(e) => setUserGender(e.target.value)} className={`form-radio h-5 w-5 ${activeThemeClasses.radio}`} />
              <span className="ml-2 text-slate-700">Masculino</span>
            </label>
            <label className="inline-flex items-center cursor-pointer">
              <input type="radio" name="gender" value="outros" checked={userGender === 'outros'} onChange={(e) => setUserGender(e.target.value)} className={`form-radio h-5 w-5 ${activeThemeClasses.radio}`} />
              <span className="ml-2 text-slate-700">Outro</span>
            </label>
          </div>
          {formError && (
              <div className={`p-3 rounded-md text-sm font-medium bg-red-100 text-red-700`}>
                  {formError}
              </div>
          )}
          <button type="submit" className={`w-full font-bold py-3 px-6 rounded-lg shadow-sm transition-colors duration-200 inline-flex items-center justify-center ${startButtonClass}`} disabled={isLoading || !userGender}>
            {isLoading ? 'CARREGANDO...' : 'COMEÇAR DIAGNÓSTICO'}
            {!isLoading && <ArrowRight className="ml-2" size={20} />}
          </button>
        </form>
      </div>
    </div>
  );
}

function MidpointRadarScreen({ userName, userAnswers, onContinue, activeThemeClasses }) {
    const skillInfo = [
        { name: 'Controle de Gastos', icon: <Wallet size={20} />, description: 'Sua capacidade de saber para onde o dinheiro vai.' },
        { name: 'Gestão de Dívidas', icon: <TrendingDown size={20} />, description: 'Sua habilidade de lidar e eliminar dívidas existentes.' },
        { name: 'Mentalidade Financeira', icon: <BrainCircuit size={20} />, description: 'Suas crenças e emoções em relação ao dinheiro.' },
        { name: 'Planejamento Futuro', icon: <Shield size={20} />, description: 'Sua preparação para emergências e objetivos de longo prazo.' },
    ];

    return (
        <div className="text-center py-10">
            <h2 className="text-3xl font-bold text-slate-800 mb-2">
                Seu Perfil em Construção
            </h2>
            <p className="text-lg text-slate-500 mb-10">
                O diagnóstico avalia 4 pilares essenciais da sua vida financeira.
            </p>
            
            <div className="text-left max-w-lg mx-auto mt-12 space-y-6">
                {skillInfo.map(skill => (
                    <div key={skill.name} className="flex items-center">
                        <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center mr-4 bg-opacity-10 ${activeThemeClasses.textHighlight.replace('text-', 'bg-')}`}>
                           <span className={activeThemeClasses.textHighlight}>{skill.icon}</span>
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-700 text-left">{skill.name}</h4>
                            <p className="text-slate-500 text-sm text-left">{skill.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <button
                onClick={onContinue}
                className={`text-white font-bold py-3 px-8 rounded-lg shadow-sm transition-colors duration-200 text-lg inline-flex items-center mt-12 ${activeThemeClasses.primary}`}
            >
                Continuar para a 2ª parte <ArrowRight className="ml-2" size={20} />
            </button>
        </div>
    );
}

function ProcessingScreen({ activeThemeClasses }) {
    const [messageIndex, setMessageIndex] = React.useState(0);
    const messages = [
        "Analisando suas respostas...",
        "Calculando seu perfil de endividamento...",
        "Montando seu gráfico de habilidades...",
        `Quase pronto...`
    ];

    React.useEffect(() => {
        const interval = setInterval(() => {
            setMessageIndex(prevIndex => (prevIndex + 1));
        }, 1200);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="text-center py-20 flex flex-col items-center justify-center min-h-[400px]">
            <svg className="animate-spin h-10 w-10 mb-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className={`opacity-75 ${activeThemeClasses.textHighlight}`} fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
                Processando...
            </h2>
            <p className="text-lg text-slate-500 transition-opacity duration-500 h-6">
                {messages[messageIndex % messages.length]}
            </p>
        </div>
    );
}


function QuizScreen({ currentQuestionIndex, userAnswers, userName, handleAnswerClick, handleNextQuestion, handlePreviousQuestion, selectedOptionText, activeThemeClasses }) {
    const questionOrder = ['q1', 'q2', 'q3', 'q4_dificuldade', 'q5_thermometer', 'q6', 'q7', 'q8_slider', 'q9', 'q10'];
    const totalQuestions = questionOrder.length;
    const progressPercentage = ((currentQuestionIndex + 1) / totalQuestions) * 100;

    const currentQuestionData = questions.find(q => q.id === questionOrder[currentQuestionIndex]);

    return (
        <>
            <div className="flex items-center w-full mb-8">
                <div className="w-full bg-slate-200 rounded-full h-1.5">
                    <div className={`h-1.5 rounded-full transition-all duration-500 ease-out ${activeThemeClasses.progressBarBg}`} style={{ width: `${progressPercentage}%` }}></div>
                </div>
                <span className="ml-4 text-sm font-semibold text-slate-500 w-12 text-right">{Math.round(progressPercentage)}%</span>
            </div>

            <div className="mb-8 text-left">
                <p className={`text-sm font-bold mb-2 ${activeThemeClasses.textHighlight}`}>
                    PASSO {currentQuestionIndex + 1} DE {totalQuestions}
                </p>
                <p className="text-2xl sm:text-3xl font-medium text-slate-800">
                    {currentQuestionData.question}
                </p>
                <div className="mt-8">
                    {currentQuestionData.display === 'grid' ? (
                        <>
                            <div className="flex justify-between text-sm text-slate-500 mb-2 px-2">
                                <span>{currentQuestionData.labels.min}</span>
                                <span>{currentQuestionData.labels.max}</span>
                            </div>
                            <div className="grid grid-cols-11 gap-1.5">
                                {currentQuestionData.options.map((option) => {
                                    const isSelected = option.text === selectedOptionText;
                                    const isDisabled = selectedOptionText !== null;
                                    
                                    let buttonClass = `bg-white text-slate-700 border-2 ${activeThemeClasses.buttonBorder} ${activeThemeClasses.buttonHover}`;
                                    if (isDisabled) {
                                        buttonClass = isSelected 
                                            ? `${activeThemeClasses.buttonSelected}` 
                                            : 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed';
                                    }

                                    return (
                                        <button
                                            key={option.text}
                                            onClick={() => handleAnswerClick(option, currentQuestionData.id)}
                                            className={`w-full aspect-square rounded-full text-sm font-bold transition-colors duration-200 flex items-center justify-center ${buttonClass}`}
                                            disabled={isDisabled}
                                        >
                                            {option.text}
                                        </button>
                                    );
                                })}
                            </div>
                        </>
                    ) : (
                        <div className="grid grid-cols-1 gap-4">
                            {currentQuestionData.options.map((option) => {
                                const isSelected = option.text === selectedOptionText;
                                const isDisabled = selectedOptionText !== null;
                                
                                let buttonClass = `bg-white text-slate-700 border-2 ${activeThemeClasses.buttonBorder} ${activeThemeClasses.buttonHover}`;
                                if (isDisabled) {
                                    buttonClass = isSelected 
                                        ? `${activeThemeClasses.buttonSelected}` 
                                        : 'bg-slate-100 text-slate-500 border-slate-100 cursor-not-allowed';
                                }

                                return (
                                    <button
                                        key={option.text}
                                        onClick={() => handleAnswerClick(option, currentQuestionData.id)}
                                        className={`w-full text-left p-4 rounded-lg text-base font-medium transition-colors duration-200 ${buttonClass}`}
                                        disabled={isDisabled}
                                    >
                                        {option.text}
                                    </button>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>

            <div className="flex items-center mt-10 w-full space-x-4">
                {currentQuestionIndex > 0 && (
                    <button onClick={handlePreviousQuestion} className="py-3 px-6 rounded-lg font-bold text-slate-600 bg-slate-200 hover:bg-slate-300 transition-colors duration-200 inline-flex items-center justify-center">
                        <ArrowLeft className="mr-2" size={20} />
                        Voltar
                    </button>
                )}
                <button
                    onClick={handleNextQuestion}
                    className={`py-3 rounded-lg font-bold transition-colors duration-200 shadow-sm flex-grow inline-flex items-center justify-center ${activeThemeClasses.primary}`}
                    disabled={selectedOptionText === null}
                >
                    {currentQuestionIndex === totalQuestions - 1 ? "Ver Meu Perfil" : "Próximo Passo"}
                    <ArrowRight className="ml-2" size={20} />
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
        if (!userWhatsapp.trim() || userWhatsapp.length < 10) {
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
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
                Seu Mapa Para Sair das Dívidas Começa Aqui!
            </h2>
            <p className="text-lg text-slate-500 mb-8">
                Seu perfil principal é de <strong className={activeThemeClasses.textHighlight}>{profileTitle.split(':')[1].split(' ')[1]}</strong>.
                Para receber seu relatório completo e agendar seu diagnóstico gratuito, {getFirstName(userName)}, preencha seus dados abaixo.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4 max-w-sm mx-auto">
                <input type="email" placeholder="Seu Melhor E-mail" value={userEmail} onChange={(e) => setUserEmail(e.target.value.toLowerCase())} required className={`w-full p-3 rounded-lg border-2 ${activeThemeClasses.inputBorder} focus:ring-1 transition-colors duration-200`} />
                <input 
                  type="tel" 
                  placeholder="Seu WhatsApp (com DDD)" 
                  value={formatPhoneWithMask(userWhatsapp)} 
                  onChange={(e) => {
                    // Remove a máscara para armazenar apenas os números
                    const rawValue = e.target.value.replace(/\D/g, '');
                    setUserWhatsapp(rawValue);
                  }} 
                  required 
                  className={`w-full p-3 rounded-lg border-2 ${activeThemeClasses.inputBorder} focus:ring-1 transition-colors duration-200`} 
                />
                <select value={userIncomeRange} onChange={(e) => setUserIncomeRange(e.target.value)} required className={`w-full p-3 rounded-lg border-2 bg-white ${activeThemeClasses.inputBorder} focus:ring-1 transition-colors duration-200`}>
                    {incomeRanges.map(range => <option key={range.value} value={range.value}>{range.label}</option>)}
                </select>
                <select value={userDebtRange} onChange={(e) => setUserDebtRange(e.target.value)} required className={`w-full p-3 rounded-lg border-2 bg-white ${activeThemeClasses.inputBorder} focus:ring-1 transition-colors duration-200`}>
                    {debtRanges.map(range => <option key={range.value} value={range.value}>{range.label}</option>)}
                </select>
                <div className="flex items-start text-left text-slate-600 text-sm pt-2">
                    <input type="checkbox" id="lgpdConsent" checked={lgpdConsent} onChange={(e) => setLgpdConsent(e.target.checked)} required className={`mr-2 mt-1 form-checkbox h-4 w-4 rounded ${activeThemeClasses.radio}`} />
                    <label htmlFor="lgpdConsent">
                        Ao marcar, você nos permite entrar em contato por e-mail e WhatsApp. Seus dados estão seguros.
                    </label>
                </div>
                {formError && (
                    <div className={`p-3 rounded-md text-sm font-medium bg-red-100 text-red-700`}>
                        {formError}
                    </div>
                )}
                <button type="submit" className={`w-full font-bold py-3 px-6 rounded-lg shadow-sm transition-colors duration-200 inline-flex items-center justify-center ${activeThemeClasses.primary}`} disabled={isLoading}>
                    {isLoading ? (
                        <div className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            PROCESSANDO...
                        </div>
                    ) : (
                        <>
                            {isLoading ? 'ENVIANDO...' : 'QUERO MEU DIAGNÓSTICO GRATUITO!'}
                            {!isLoading && <Send className="ml-2" size={20} />}
                        </>
                    )}
                </button>
            </form>
        </div>
    );
}
function ResultsScreen({ userName, profile, formSubmitted, userAnswers, activeThemeClasses }) {
    const [showSuccessMessage, setShowSuccessMessage] = React.useState(formSubmitted);
    const [copySuccess, setCopySuccess] = React.useState('');
    const skillScores = calculateSkillScores(userAnswers);
    const weakestSkill = Object.keys(skillScores).reduce((a, b) => skillScores[a] < skillScores[b] ? a : b);
    const firstAidTip = getFirstAidTip(weakestSkill);

    const shareUrl = window.location.href;
    const shareText = encodeURIComponent(`Acabei de fazer um diagnóstico financeiro gratuito e descobri o que me impede de sair das dívidas! Eles liberaram algumas vagas para esse diagnóstico que era pago. Garanta a sua antes que acabe! O link é esse: ${shareUrl}`);
    const textToCopy = `Acabei de fazer um diagnóstico financeiro gratuito e descobri o que me impede de sair das dívidas! Eles liberaram algumas vagas para esse diagnóstico que era pago. Garanta a sua antes que acabe! O link é esse: ${shareUrl}`;

    const handleShare = (platform) => {
        let url = '';
        switch (platform) {
            case 'whatsapp':
                url = `https://api.whatsapp.com/send?text=${shareText}`;
                break;
            case 'whatsapp-group':
                url = `https://l.kellegontijo.com/entrarnogrupovip`;
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
        <div className="text-center">
            {showSuccessMessage && ( 
                <div className="bg-green-100 border-l-4 border-green-500 text-green-800 p-4 mb-8 text-left rounded-r-lg" role="alert">
                    <div className="flex">
                        <div className="py-1"><CheckCircle className="h-6 w-6 text-green-500 mr-4" /></div>
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
            <div className="bg-slate-100 p-6 rounded-xl mb-8 text-left">
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4">Seu Diagnóstico Rápido, {getFirstName(userName)}!</h3>
                <div className="space-y-4 divide-y divide-slate-200">
                    <div className="pt-4 first:pt-0">
                        <p className={`font-bold text-lg ${activeThemeClasses.textHighlight}`}>Seu Perfil</p>
                        <p className="text-slate-700 font-semibold">{profile.title.split(':')[1].trim()}</p>
                        <p className="text-sm text-slate-500 mt-1">Isso mostra o principal comportamento que alimenta suas dívidas.</p>
                    </div>
                    <div className="pt-4">
                        <p className="font-bold text-lg text-slate-600">Sua Maior Oportunidade</p>
                        <p className="text-slate-700 font-semibold">{weakestSkill}</p>
                        <p className="text-sm text-slate-500 mt-1">Essa é a área que, com um pouco de foco, trará os maiores resultados para você.</p>
                    </div>
                    {firstAidTip && (
                        <div className="pt-4">
                            <p className="font-bold text-lg text-slate-600 flex items-center">{firstAidTip.icon} <span className="ml-2">{firstAidTip.title}</span></p>
                            <p className="text-slate-700 mt-2">{firstAidTip.tip}</p>
                        </div>
                    )}
                </div>
            </div>

            <div className="mb-8">
               <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4">Sua vaga nas Aulas Semanais no ZOOM está 90% Garantida! Veja depoimentos de pessoas que já transformaram suas vidas financeiras e descubra como garantir sua vaga 100% entrando no Grupo VIP!</h3>
            </div>

            <div className="flex flex-col items-center mb-8 space-y-6">
                <img src="/img/depoimento-eliani.jpg" alt="Depoimento de Eliani" className="w-full max-w-md rounded-xl shadow-lg border-2 border-white transition-transform duration-300 hover:scale-110" />
                <img src="/img/depoimento-keren-rodrigues.png" alt="Depoimento de Keren Rodrigues" className="w-full max-w-md rounded-xl shadow-lg border-2 border-white transition-transform duration-300 hover:scale-110" />
                <img src="/img/depoimento-rose-garcia.jpg" alt="Depoimento de Rose Garcia" className="w-full max-w-md rounded-xl shadow-lg border-2 border-white transition-transform duration-300 hover:scale-110" />
            </div>
            
            <div className="bg-slate-800 text-white p-8 rounded-lg">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-left">Mentoria em Grupo Gratuita no Zoom!</h3>
                <p className="text-slate-300 text-left mb-6">Participe das nossas aulas ao vivo com a Kelle e transforme sua vida financeira. É a sua chance de tirar dúvidas em tempo real, como em uma mentoria individual!</p>
                <ul className="space-y-3 text-slate-300 text-left mb-6">
                    <li className="flex items-start"><CheckCircle className="w-5 h-5 mr-2 mt-1 text-green-400 flex-shrink-0" /><span>Aprenda a sair das dívidas e a investir, mesmo com pouco dinheiro.</span></li>
                    <li className="flex items-start"><CheckCircle className="w-5 h-5 mr-2 mt-1 text-green-400 flex-shrink-0" /><span>Receba dicas práticas e um passo a passo claro para organizar suas finanças.</span></li>
                    <li className="flex items-start"><CheckCircle className="w-5 h-5 mr-2 mt-1 text-green-400 flex-shrink-0" /><span>Interaja diretamente com a Kelle e outros participantes em um ambiente de apoio.</span></li>
                </ul>
                <div className="w-full">
                    <a
                        href="https://l.kellegontijo.com/grupo-financas-kelle"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg shadow-sm transition-colors duration-200 inline-flex items-center justify-center text-lg"
                    >
                        <WhatsAppIcon className="mr-2" size={20} />
                        Entre no Grupo VIP Agora e Seja Lembrado das Aula no ZOOM
                    </a>
                </div>
            </div>
            {/* Botões de compartilhamento para mobile */}
            <div className="mt-10">
                <p className="text-sm font-semibold text-slate-600 mb-3">COMPARTILHE ESSA OPORTUNIDADE:</p>
                <div className="flex justify-center space-x-4">
                    <button onClick={() => handleShare('whatsapp')} className="p-3 bg-slate-100 text-slate-600 rounded-full hover:bg-slate-200 transition-colors"><WhatsAppIcon size={20} /></button>
                    <button onClick={() => handleShare('whatsapp-group')} className="p-3 bg-slate-100 text-green-600 rounded-full hover:bg-slate-200 transition-colors"><Users size={20} /></button>
                    <button onClick={handleCopy} className="p-3 bg-slate-100 text-slate-600 rounded-full hover:bg-slate-200 transition-colors relative">
                        <Copy size={20} />
                         {copySuccess && <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-800 text-white text-xs rounded">{copySuccess}</span>}
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

        const questionOrder = ['q1', 'q2', 'q3', 'q4_dificuldade', 'q5_thermometer', 'q6', 'q7', 'q8_slider', 'q9', 'q10'];
        const totalQuestions = questionOrder.length;

        if (currentQuestionIndex < totalQuestions - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setQuizState('processing');
            setTimeout(() => setQuizState('leadForm'), 3000);
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
            const webhookUrl = 'https://webhook.kellegontijo.com/webhook/bcb85004-61e9-4f7b-8464-1c12a5aa26dc/quizdf/cadastro-quiz-financeiro';

            const formattedUserName = formatName(userName);
            console.log('formattedUserName:', formattedUserName);
            
            const profileData = getFinancialProfile(score);
            console.log('profileData:', profileData);
            
            const completeReport = generateCompleteReport(formattedUserName, userAnswers, score);
            console.log('completeReport length:', completeReport.length);
            
            const skillScores = calculateSkillScores(userAnswers);
            console.log('skillScores:', skillScores);
            
            const pontuacaoHabilidadesDetalhada = Object.keys(skillScores).map(skillName => {
                const skillDetails = skillInfoData.find(s => s.name === skillName);
                return {
                    habilidade: skillName,
                    pontuacao: skillScores[skillName],
                    descricao: skillDetails ? skillDetails.description : 'Descrição não disponível'
                };
            });
            console.log('pontuacaoHabilidadesDetalhada:', pontuacaoHabilidadesDetalhada);

            // Payload otimizado para envio rápido
            const payload = {
                idSessaoQuiz: quizSessionId || 'sem-id',
                nome: formattedUserName,
                genero: userGender,
                email: userEmail.toLowerCase(),
                whatsapp: formatPhoneNumber(userWhatsapp),
                faixaDeRenda: incomeRanges.find(r => r.value === userIncomeRange)?.label || '',
                faixaDeDivida: debtRanges.find(r => r.value === userDebtRange)?.label || '',
                pontuacaoTotal: score > 0 ? score : 10,
                perfilFinanceiro: profileData.title,
                // Enviando apenas um resumo para otimizar o envio
                relatorioResumo: `Relatório completo será gerado no backend. Perfil: ${profileData.title}`,
                respostasQuiz: userAnswers,
                pontuacaoHabilidades: pontuacaoHabilidadesDetalhada,
                parametrosUrlInicial: initialUrlParams,
                consentimentoLgpd: lgpdConsent,
            };

            // Log para depuração
            console.log('Enviando payload otimizado:', payload);
            const payloadString = JSON.stringify(payload);
            console.log('Tamanho do payload otimizado (caracteres):', payloadString.length);

            // Configuração da requisição com timeout
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 segundos de timeout

            const response = await fetch(webhookUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: payloadString,
                signal: controller.signal
            });

            clearTimeout(timeoutId);

            console.log('Status da resposta:', response.status);
            console.log('Status text da resposta:', response.statusText);

            // Verificar se a resposta é OK
            if (!response.ok) {
                // Tentar ler o corpo da resposta para obter mais detalhes do erro
                const errorText = await response.text().catch(() => 'Não foi possível ler o corpo da resposta de erro');
                console.error('Corpo da resposta de erro:', errorText);
                throw new Error(`Erro HTTP! status: ${response.status}, mensagem: ${response.statusText}. Detalhes: ${errorText}`);
            }
            
            setFormSubmitted(true);
            setQuizState('results');
            localStorage.removeItem('quizProgress');

        } catch (error) {
            console.error('Erro ao enviar dados:', error);
            // Tratamento específico para erro de fetch
            if (error.name === 'TypeError' && error.message.includes('fetch')) {
                alert('Ocorreu um erro de conexão ao enviar seus dados. Por favor, verifique sua conexão com a internet e tente novamente.');
            } else if (error.name === 'AbortError') {
                alert('O envio dos dados está demorando muito. Por favor, tente novamente.');
            } else {
                alert('Ocorreu um erro ao enviar seus dados. Por favor, tente novamente. Detalhes: ' + error.message);
            }
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
                return <MidpointRadarScreen 
                    userName={userName}
                    userAnswers={userAnswers}
                    onContinue={handleContinueFromMidpoint}
                    activeThemeClasses={activeThemeClasses}
                />;
            case 'processing':
                return <ProcessingScreen activeThemeClasses={activeThemeClasses} />;
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
                    activeThemeClasses={activeThemeClasses}
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
        <div className={`min-h-screen flex items-center justify-center p-4 font-sans ${quizState === 'welcome' ? 'bg-slate-100' : 'bg-slate-100'}`} 
             style={quizState === 'welcome' ? { 
                backgroundImage: `url('/img/background-quiz.png')`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                filter: 'brightness(0.7)'  // Escurece a imagem de fundo
             } : {}}>
             <style>{`
                @keyframes progress-animation {
                    from { stroke-dashoffset: 282.7; }
                    to { stroke-dashoffset: 141.35; }
                }
                .progress-circle {
                    animation: progress-animation 1s ease-out forwards;
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
                input[type=range].slider-thumb::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    appearance: none;
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    cursor: pointer;
                    background-color: currentColor;
                }
                input[type=range].slider-thumb::-moz-range-thumb {
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    cursor: pointer;
                    background-color: currentColor;
                    border: 0;
                }
            `}</style>
            <div className={`relative z-10 ${quizState === 'welcome' ? 'bg-white bg-opacity-70' : 'bg-white'} rounded-2xl shadow-xl p-8 sm:p-12 max-w-4xl w-full`}>
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
