import React, { useState, useEffect, useCallback } from 'react';
import { DollarSign, Clock, Wallet, Map, HeartCrack, TrendingDown, Shield, Lightbulb, Snowflake, CheckCircle, Award, BrainCircuit, Target, ArrowRight, ArrowLeft, Send, Calendar, Share2, RefreshCw, PlayCircle, Copy } from 'lucide-react';

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
    question: "Você trabalha duro, mas sente que o dinheiro 'some' antes do fim do mês? Qual opção mais se aproxima da sua realidade?",
    skill: 'Controle de Gastos',
    icon: <Clock className="inline-block mr-2 text-blue-500" size={24} />,
    options: [
      { text: "Meu dinheiro evapora sem em nem mesmo perceber.", value: 1, insight: "É o 'ralo financeiro'. No diagnóstico, vamos te dar um mapa para encontrar e tampar esses ralos." },
      { text: "Estou em completo caos. Desespero financeiro total.", value: 2, insight: "Isso mostra uma base frágil. No diagnóstico, vamos construir um 'escudo' para esses imprevistos." },
      { text: "Tento me organizar, mas o dinheiro nunca sobra.", value: 3, insight: "Você já tem o controle! No diagnóstico, vamos criar um 'acelerador' para seus sonhos." },
      { text: "Não tenho reserva de emergência.", value: 4, insight: "Excelente! No diagnóstico, podemos explorar como fazer seu dinheiro trabalhar ainda mais para você." }
    ]
  },
  {
    id: 'q2',
    question: "Quando você pensa em 'dívidas', qual tipo mais te tira o sono?",
    skill: 'Gestão de Dívidas',
    icon: <TrendingDown className="inline-block mr-2 text-red-500" size={24} />,
    options: [
      { text: "Contas básicas em atraso (água, luz, aluguel).", value: 1, insight: "Priorizar o essencial é o foco. No diagnóstico, criaremos um plano de ação para te dar fôlego." },
      { text: "Cartão de crédito e cheque especial.", value: 2, insight: "Essas são as dívidas mais agressivas. No diagnóstico, vamos traçar uma estratégia para neutralizá-las." },
      { text: "Empréstimos.", value: 3, insight: "Sentir o salário 'preso' é frustrante. No diagnóstico, vamos analisar como reduzir esse peso." },
      { text: "Não tenho dívidas que me preocupem.", value: 4, insight: "Ótimo! Manter-se livre de dívidas é uma vitória. O diagnóstico te ajudará a blindar essa conquista." }
    ]
  },
  {
    id: 'q3',
    question: "Sua pensamento fia 'sempre ligado' nas contas mesmo quando tenta relaxar?",
    skill: 'Mentalidade Financeira',
    icon: <BrainCircuit className="inline-block mr-2 text-yellow-500" size={24} />,
    options: [
      { text: "Sim, as preocupações me seguem para todo lado.", value: 1, insight: "Isso é estresse financeiro. O diagnóstico te dará a clareza para desligar esse 'alerta' mental." },
      { text: "Às vezes sinto um peso, mas consigo focar.", value: 2, insight: "Esse 'peso' consome sua energia. O diagnóstico vai te ajudar a transformar esse peso em poder de ação." },
      { text: "Não, consigo me desligar bem das preocupações.", value: 3, insight: "Isso é uma habilidade poderosa! No diagnóstico, vamos usar essa força para acelerar seus planos." },
      { text: "Eu nem penso muito nisso, só lido com o que aparece.", value: 4, insight: "Lidar só com o que aparece pode gerar sustos. O diagnóstico te dará um 'GPS' para o futuro." }
    ]
  },
  {
    id: 'q4_dificuldade',
    question: "Se você pudesse resolver um problema financeiro HOJE, qual seria sua prioridade nº 1?",
    skill: 'Planejamento Futuro',
    icon: <Target className="inline-block mr-2 text-red-500" size={24} />,
    options: [
      { text: "Quitar minhas dívidas e ter 'nome limpo'.", value: 1, insight: "Essa liberdade é totalmente alcançável. O diagnóstico será seu plano de ação para a liberdade." },
      { text: "Ter uma reserva de emergência para imprevistos.", value: 2, insight: "A reserva é seu 'colchão de paz'. No diagnóstico, vamos desenhar o plano para construí-la." },
      { text: "Entender para onde vai meu dinheiro.", value: 3, insight: "Clareza é poder. O diagnóstico vai te dar o 'mapa do seu dinheiro' de forma simples." },
      { text: "Pagar as contas básicas em dia sem sufoco.", value: 4, insight: "Essa é a base da tranquilidade. O diagnóstico vai te ajudar a construir essa base sólida." }
    ]
  },
  {
    id: 'q4_otimizacao',
    question: "Com sua organização, qual seria seu próximo grande passo financeiro?",
    skill: 'Planejamento Futuro',
    icon: <Target className="inline-block mr-2 text-green-500" size={24} />,
    options: [
      { text: "Fazer meu dinheiro render mais e investir.", value: 1, insight: "Ótimo objetivo! O diagnóstico pode te mostrar os caminhos de investimento mais alinhados com você." },
      { text: "Planejar grandes compras (casa, carro, viagem).", value: 2, insight: "Sonhos grandes pedem um bom plano. O diagnóstico será o projeto do seu sonho." },
      { text: "Otimizar investimentos e buscar maior rentabilidade.", value: 3, insight: "Você já está no jogo! O diagnóstico pode refinar sua estratégia para um 'xeque-mate'." },
      { text: "Diversificar minhas fontes de renda.", value: 4, insight: "Excelente visão! O diagnóstico pode te ajudar a identificar e planejar novas fontes de renda." }
    ]
  },
  {
    id: 'q5_thermometer',
    question: "Se você tivesse que resumir sua vida financeira em uma palavra hoje, qual seria?",
    skill: 'Mentalidade Financeira',
    icon: <Award className="inline-block mr-2 text-purple-500" size={24} />,
    options: [
      { text: "Sobrevivência", value: 0, insight: "Obrigado por compartilhar. Sentir que está apenas 'sobrevivendo' é exaustivo. Nosso objetivo no diagnóstico é te levar para a fase de 'viver'." },
      { text: "Desespero", value: 0, insight: "A confusão paralisa. O diagnóstico foi desenhado para ser o seu 'farol', trazendo clareza e direção." },
      { text: "Esperança", value: 0, insight: "Esperança é o melhor combustível! No diagnóstico, vamos transformar essa esperança em um plano de ação concreto." },
      { text: "Ansiedade", value: 0, insight: "Controle é uma base excelente. No diagnóstico, vamos usar esse controle para construir seus objetivos maiores." }
    ]
  },
  {
    id: 'q6',
    question: "Você se vê gastando por impulso, talvez depois de um dia estressante?",
    skill: 'Controle de Gastos',
    icon: <Wallet className="inline-block mr-2 text-orange-500" size={24} />,
    options: [
      { text: "Sim, minhas emoções me levam a gastos desnecessários.", value: 1, insight: "É o 'efeito recompensa'. No diagnóstico, vamos criar estratégias para você se recompensar sem sabotar suas finanças." },
      { text: "Às vezes acontece, mas tento me controlar.", value: 2, insight: "Você já tem consciência, isso é meio caminho andado! O diagnóstico te dará ferramentas para fortalecer esse controle." },
      { text: "Raramente, penso bem antes de gastar.", value: 3, insight: "Parabéns por essa disciplina! O diagnóstico pode te ajudar a usar essa habilidade para otimizar ainda mais." },
      { text: "Não, sou muito racional com dinheiro.", value: 4, insight: "Sua racionalidade é um superpoder. No diagnóstico, vamos potencializar isso para alcançar grandes metas." }
    ]
  },
  {
    id: 'q7',
    question: "Se precisasse de R$ 1.000 para uma emergência hoje, você teria sem se endividar?",
    skill: 'Planejamento Futuro',
    icon: <Shield className="inline-block mr-2 text-indigo-500" size={24} />,
    options: [
      { text: "Não, teria que pegar emprestado ou usar o cartão.", value: 1, insight: "Essa vulnerabilidade gera ansiedade. O diagnóstico te dará o passo a passo para construir sua reserva de paz." },
      { text: "Talvez, teria que verificar e apertar um pouco.", value: 2, insight: "Estar no 'fio da navalha' é arriscado. O diagnóstico vai te ajudar a criar uma folga segura." },
      { text: "Não tenho limite no cartão e nem como pegar emprestado mais.", value: 3, insight: "Excelente! Você já tem seu escudo. O diagnóstico vai te ajudar a fortalecê-lo e ir para o próximo nível." },
      { text: "Sim, tenho reserva de emergência.", value: 4, insight: "Você está muito bem protegido. O diagnóstico pode focar em como rentabilizar essas reservas." }
    ]
  },
  {
    id: 'q8',
    question: "Qual a sensação mais forte sobre seu futuro financeiro?",
    skill: 'Mentalidade Financeira',
    icon: <Snowflake className="inline-block mr-2 text-cyan-500" size={24} />,
    options: [
      { text: "Insegurança.", value: 1, insight: "O medo vem da falta de clareza. O diagnóstico foi criado para transformar seu medo em confiança através de um plano." },
      { text: "Desespero. Sem saber o que fazer.", value: 2, insight: "Você tem o motor (esperança), só falta o mapa. O diagnóstico é exatamente este mapa que você precisa." },
      { text: "Medo.", value: 3, insight: "Parabéns por construir sua tranquilidade! O diagnóstico pode te mostrar como manter e ampliar essa paz no longo prazo." },
      { text: "Liberdade financeira.", value: 4, insight: "Não pensar no futuro é como navegar sem bússola. O diagnóstico te dará essa bússola de forma simples." }
    ]
  },
  {
    id: 'q9',
    question: "Suas dívidas parecem uma 'bola de neve' que só cresce?",
    skill: 'Gestão de Dívidas',
    icon: <TrendingDown className="inline-block mr-2 text-red-500" size={24} />,
    options: [
      { text: "Sim, parece que pago, mas nunca vejo o fim.", value: 1, insight: "Essa é a armadilha da 'bola de neve'. O diagnóstico vai te dar a estratégia para quebrar esse ciclo vicioso." },
      { text: "Às vezes, mas consigo controlar.", value: 2, insight: "Você já está lutando contra a bola de neve. O diagnóstico te dará as ferramentas para 'derretê-la' de vez." },
      { text: "Não, minhas dívidas são controladas.", value: 3, insight: "Excelente controle! O diagnóstico pode te ajudar a quitar essas dívidas de forma ainda mais rápida." },
      { text: "Eu não tenho dívidas.", value: 4, insight: "Parabéns, essa é uma grande conquista! O diagnóstico vai te ajudar a se manter assim e prosperar." }
    ]
  },
  {
    id: 'q10',
    question: "Você acredita que um 'mapa' claro e um plano personalizado fariam a diferença?",
    skill: 'Planejamento Futuro',
    icon: <Map className="inline-block mr-2 text-green-500" size={24} />,
    options: [
      { text: "Com certeza! Me sinto perdido(a).", value: 1, insight: "Reconhecer isso é o primeiro passo para a mudança. Você está no lugar certo para encontrar seu mapa." },
      { text: "Talvez, mas acho que é complicado ou caro.", value: 2, insight: "Muitos pensam isso, mas o diagnóstico é gratuito e vai te mostrar que a simplicidade é a chave." },
      { text: "Acho que já sei o que fazer, só falta disciplina.", value: 3, insight: "Disciplina sem um bom plano é como remar sem direção. O diagnóstico vai potencializar sua disciplina." },
      { text: "Não preciso, já tenho tudo organizado.", value: 4, insight: "Fantástico! Um olhar de fora pode revelar oportunidades que você ainda não viu. O diagnóstico pode ser esse olhar." }
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
  const parts = fullName.split(' ');
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

  if (finalScore >= 10 && finalScore <= 20) {
    title = "Perfil Financeiro: Iniciante - Alerta Vermelho! 🚨";
    description = `
        **Pontuação: ${finalScore} de 36 pontos**
        Suas respostas indicam uma fase desafiadora. É provável que se sinta sobrecarregado(a), com o dinheiro 'escorrendo' pelos dedos e dívidas se acumulando.
        **Mas não se preocupe, essa realidade pode ser transformada!** O medo do futuro é compreensível. O mais importante é buscar clareza.
        **Acredite: sair dessa situação é totalmente possível!** O que falta, muitas vezes, não é dinheiro, mas um mapa detalhado e um plano de ação personalizado.
      `;
  } else if (finalScore >= 21 && finalScore <= 30) {
    title = "Perfil Financeiro: Intermediário - Em Busca de Caminhos! 🗺️";
    description = `
        **Pontuação: ${finalScore} de 36 pontos**
        Você já demonstra consciência e esforço para organizar suas finanças, mas sente que falta um 'algo a mais'. Imprevistos podem desestabilizar seu planejamento.
        Você está pronto(a) para ir além. Já deu passos importantes, mas o caminho para a verdadeira liberdade financeira ainda requer direcionamento.
        **Você está no caminho certo!** Agora, é hora de transformar essa busca por clareza em ação.
      `;
  } else { 
    title = "Perfil Financeiro: Conhecedor - Potencial a Otimizar! ✨";
    description = `
        **Pontuação: ${finalScore} de 36 pontos**
        Parabéns! Suas respostas refletem um alto nível de consciência e controle. Você demonstra organização, planejamento e uma boa capacidade de lidar com o dinheiro.
        Apesar de sua solidez, há sempre novas estratégias e otimizações para fazer seu dinheiro trabalhar ainda mais para você.
        **Você já é um(a) grande realizador(a)!** Imagine o que podemos construir juntos ao otimizar o que você já faz bem.
      `;
  }
  return { title, description, color: "text-black" };
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
            const average = (skills[skill].total / (skills[skill].count * 4)) * 100;
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
        case 'Confusão':
            report += "**Estado Emocional:** O cliente se sente perdido e sobrecarregado de informações (ou da falta delas). Não sabe por onde começar e provavelmente já tentou métodos que não funcionaram, gerando frustração.\n\n";
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
        case 'Controle':
            report += "**Estado Emocional:** O cliente já se sente no comando da sua vida financeira. Ele não está buscando uma 'salvação', mas sim 'otimização' e 'crescimento'.\n\n";
            report += "**Estratégia de Comunicação:** Usar uma linguagem mais técnica e estratégica. Focar em 'otimização de resultados', 'próximo nível' e 'investimentos inteligentes'.\n\n";
            report += "**Ações para o Diagnóstico:**\n";
            report += "1. Reconhecer e validar o bom trabalho que ele já faz.\n";
            report += "2. Analisar os pontos fortes e sugerir melhorias incrementais.\n";
            report += "3. Focar em estratégias de investimento, diversificação de renda ou planejamento de longo prazo (aposentadoria, sucessão).\n";
            break;
    }
    
    return report;
};


// ====================================================================================
// COMPONENTES DA UI
// ====================================================================================

function WelcomeScreen({ userName, setUserName, userGender, setUserGender, handleStartQuiz, isLoading }) {
  const [formError, setFormError] = useState('');

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
          Bem-vinda(o) ao Quiz!
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 font-semibold mb-8">
          Para começarmos, qual é o seu nome e gênero?
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
            {isLoading ? 'CARREGANDO...' : 'COMEÇAR AGORA'}
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
                    <strong>Primeira Dica:</strong>
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
    const [messageIndex, setMessageIndex] = useState(0);
    const messages = [
        "Analisando suas respostas...",
        "Calculando seu perfil financeiro...",
        "Montando seu gráfico de habilidades...",
        `Quase pronto, ${getFirstName(userName)}!`
    ];

    useEffect(() => {
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


function QuizScreen({ currentQuestionIndex, userAnswers, userName, handleAnswerClick, handleNextQuestion, handlePreviousQuestion, selectedOptionText, currentInsightText, activeThemeClasses }) {
    const questionOrder = ['q1', 'q2', 'q3', 'q4_placeholder', 'q5_thermometer', 'q6', 'q7', 'q8', 'q9', 'q10'];
    const totalQuestions = questionOrder.length;
    const progressPercentage = ((currentQuestionIndex + 1) / totalQuestions) * 100;

    const getCurrentQuestionData = () => {
        const questionMap = questions.reduce((acc, q) => ({...acc, [q.id]: q }), {});
        const currentQuestionId = questionOrder[currentQuestionIndex];

        if (currentQuestionId === 'q4_placeholder') {
            const q1Answer = userAnswers.find(a => a.questionId === 'q1');
            const q1Value = q1Answer ? q1Answer.selectedValue : 1;
            return q1Value <= 2 ? questionMap['q4_dificuldade'] : questionMap['q4_otimizacao'];
        }
        
        return questionMap[currentQuestionId];
    };

    const currentQuestionData = getCurrentQuestionData();

    return (
        <>
            <div className="flex items-center justify-between mb-4">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className={`h-2.5 rounded-full transition-all duration-500 ease-out ${activeThemeClasses.progressBarBg}`} style={{ width: `${progressPercentage}%` }}></div>
                </div>
                <span className="ml-3 text-sm font-medium text-gray-700">{Math.round(progressPercentage)}%</span>
            </div>

            <h2 className={`text-3xl sm:text-4xl font-bold text-black uppercase mb-2 leading-tight`}>
                10 Passos para Descobrir <span className={`${activeThemeClasses.textHighlight} font-bold`}>Seu Perfil Financeiro</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 font-semibold mb-6 normal-case">
                Entenda os reais motivos que te fazem trabalhar tanto e mesmo assim não ver a cor do seu dinheiro...
            </p>

            <div className="mb-8">
                <p className="text-lg sm:text-xl text-blue-600 font-semibold mb-4">
                    Questão {currentQuestionIndex + 1} de {totalQuestions}
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
                                {isSelected && (
                                    <div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 p-3 ${activeThemeClasses.insightBg} ${activeThemeClasses.insightText} text-sm rounded-md shadow-lg w-max max-w-xs z-20`}>
                                        <span className="font-bold">Dica: </span>{currentInsightText}
                                        <div className={`absolute left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent ${activeThemeClasses.insightBorder} bottom-[-4px]`}></div>
                                    </div>
                                )}
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
                    {currentQuestionIndex === totalQuestions - 1 ? "VER MEU PERFIL" : "PRÓXIMA QUESTÃO"}
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
    const [formError, setFormError] = useState('');

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
                SEU MAPA PARA A CLAREZA FINANCEIRA COMEÇA AQUI!
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 font-semibold mb-6">
                Sua pontuação indica que você está na fase de <strong>{profileTitle.split(' - ')[0].replace('Perfil Financeiro: ', '')}</strong>.
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
    const [showSuccessMessage, setShowSuccessMessage] = useState(formSubmitted);
    const [copySuccess, setCopySuccess] = useState('');
    const skillScores = calculateSkillScores(userAnswers);
    const strongestSkill = Object.keys(skillScores).reduce((a, b) => skillScores[a] > skillScores[b] ? a : b);
    const weakestSkill = Object.keys(skillScores).reduce((a, b) => skillScores[a] < skillScores[b] ? a : b);

    const shareUrl = window.location.href;
    const shareText = encodeURIComponent(`Descobri meu perfil financeiro e ele é *${profile.title.split(':')[1].split('-')[0].trim()}*! 💡 Faça o teste você também e descubra o seu: ${shareUrl}`);

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
        const textToCopy = `Descobri meu perfil financeiro e ele é ${profile.title.split(':')[1].split('-')[0].trim()}! 💡 Faça o teste você também e descubra o seu: ${shareUrl}`;
        
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
                        <p className="text-gray-700">{profile.title.split(':')[1].split(' - ')[0].trim()}</p>
                        <p className="text-sm text-gray-500 mt-1">Isso mostra o estágio atual da sua jornada financeira.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border">
                        <p className="font-bold text-lg text-green-600">Seu Ponto Forte</p>
                        <p className="text-gray-700">{strongestSkill}</p>
                        <p className="text-sm text-gray-500 mt-1">Essa é a sua maior habilidade! Vamos usá-la como alavanca para o seu crescimento.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border">
                        <p className="font-bold text-lg text-orange-600">Sua Maior Oportunidade</p>
                        <p className="text-gray-700">{weakestSkill}</p>
                        <p className="text-sm text-gray-500 mt-1">Essa é a área que, com um pouco de foco, trará os maiores resultados para você.</p>
                    </div>
                </div>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-xl mb-8">
                 <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Veja como a clareza financeira pode te ajudar a sair das dívidas</h3>
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
                 <p className="text-lg text-gray-600 mb-6">No diagnóstico, vamos usar seu <strong>{strongestSkill}</strong> para transformar sua <strong>{weakestSkill}</strong> em uma nova força. Vamos começar?</p>
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
                <p className="text-sm font-semibold text-gray-600 mb-2">COMPARTILHE SEU RESULTADO:</p>
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
    const [quizState, setQuizState] = useState('welcome');
    const [isLoading, setIsLoading] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [userName, setUserName] = useState('');
    const [userGender, setUserGender] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userWhatsapp, setUserWhatsapp] = useState('');
    const [userIncomeRange, setUserIncomeRange] = useState('');
    const [userDebtRange, setUserDebtRange] = useState('');
    const [lgpdConsent, setLgpdConsent] = useState(false);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [score, setScore] = useState(0);
    const [selectedOptionText, setSelectedOptionText] = useState(null);
    const [currentInsightText, setCurrentInsightText] = useState('');
    const [quizSessionId, setQuizSessionId] = useState(null);
    const [initialUrlParams, setInitialUrlParams] = useState({});
    const [showRestoreModal, setShowRestoreModal] = useState(false);

    const activeThemeClasses = themeClasses[userGender] || themeClasses.outros;

    const saveStateToLocalStorage = useCallback((state) => {
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
    
    useEffect(() => {
        if(quizState !== 'welcome') {
            saveStateToLocalStorage({ quizState, userName, userGender, currentQuestionIndex, userAnswers, score });
        }
    }, [quizState, userName, userGender, currentQuestionIndex, userAnswers, score, saveStateToLocalStorage]);
    
    useEffect(() => {
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
        setCurrentInsightText('');
        setShowRestoreModal(false);
    };

    const handleStartQuiz = () => setQuizState('quiz');

    const handleAnswerClick = (option, questionId) => {
        if (selectedOptionText !== null) return;
        
        if (option.value > 0) {
            setScore(prevScore => prevScore + option.value);
        }
        
        setSelectedOptionText(option.text);
        setCurrentInsightText(option.insight.replace('{userName}', getFirstName(userName)));

        const questionData = questions.find(q => q.id === questionId) || questions.find(q => q.id.startsWith('q4_'));
        
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
        setCurrentInsightText('');

        const midpointIndex = 4;
        if (currentQuestionIndex === midpointIndex) {
            setQuizState('midpointSummary');
            return;
        }

        const questionOrder = ['q1', 'q2', 'q3', 'q4_placeholder', 'q5_thermometer', 'q6', 'q7', 'q8', 'q9', 'q10'];
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
            setCurrentInsightText('');
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
                    currentInsightText={currentInsightText}
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
