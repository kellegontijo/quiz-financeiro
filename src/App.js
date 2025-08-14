import React, { useState, useEffect } from 'react';
import { DollarSign, Clock, Wallet, Map, HeartCrack, TrendingDown, Shield, Lightbulb, Snowflake, CheckCircle } from 'lucide-react';

// ====================================================================================
// DADOS E CONFIGURAÇÕES (Poderiam estar em arquivos separados)
// ====================================================================================

const questions = [
  {
    id: 'q1',
    question: "Você trabalha duro, se esforça todos os dias, mas sente que o dinheiro simplesmente 'some' antes do fim do mês? Qual opção mais se aproxima da sua realidade?",
    icon: <Clock className="inline-block mr-2 text-blue-500" size={24} />,
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
    icon: <TrendingDown className="inline-block mr-2 text-red-500" size={24} />,
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
    icon: <Lightbulb className="inline-block mr-2 text-yellow-500" size={24} />,
    options: [
      { text: "Sim, é difícil me concentrar e parece que as preocupações me seguem para todo lado.", value: 1, insight: "É um ciclo vicioso: preocupação financeira afeta bem-estar e produtividade. Romper esse ciclo começa com organização." },
      { text: "Às vezes sinto um peso, mas consigo focar no que preciso fazer.", value: 2, insight: "Esse 'peso' pode ser um sinal de estresse financeiro. Abordar as finanças pode liberar sua mente." },
      { text: "Não, eu separo bem as coisas e consigo me desligar das preocupações financeiras.", value: 3, insight: "Que ótimo! Gerenciar emoções financeiras é um trunfo. Continue cultivando essa mentalidade." },
      { text: "Eu nem penso muito nisso, só lido com o que aparece.", value: 4, insight: "Lidar com o que aparece pode levar a surpresas. Um pouco de planejamento traz paz de espírito." }
    ]
  },
  {
    id: 'q4_dificuldade',
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
    id: 'q4_otimizacao',
    question: "Com seu nível de organização, {userName}, qual seria seu próximo grande passo financeiro para otimizar seus recursos?",
    icon: <DollarSign className="inline-block mr-2 text-green-500" size={24} />,
    options: [
      { text: "Fazer meu dinheiro render mais e começar a investir para o futuro.", value: 1, insight: "Fazer o dinheiro trabalhar para você é um grande passo! Construa patrimônio e realize sonhos maiores." },
      { text: "Planejar grandes compras ou objetivos (casa, carro, viagem) de forma mais eficiente.", value: 2, insight: "O planejamento estratégico é a chave para realizar grandes sonhos sem comprometer sua saúde financeira." },
      { text: "Otimizar investimentos e buscar maior rentabilidade.", value: 3, insight: "Sua base é sólida! Agora, focar em otimização e maior rentabilidade fará seu patrimônio crescer de forma exponencial." },
      { text: "Diversificar minhas fontes de renda ou buscar novas oportunidades de crescimento.", value: 4, insight: "Excelente! Buscar novas fontes de renda acelera sua jornada para a liberdade financeira e a realização de objetivos ambiciosos." }
    ]
  },
    // Mantendo as outras questões (q5 a q10) como no original
  {
    id: 'q5',
    question: "Você já sentiu vergonha ou culpa por suas dificuldades financeiras, a ponto de evitar falar sobre o assunto ou buscar ajuda?",
    icon: <HeartCrack className="inline-block mr-2 text-purple-500" size={24} />,
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
    icon: <Wallet className="inline-block mr-2 text-orange-500" size={24} />,
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
    icon: <Shield className="inline-block mr-2 text-indigo-500" size={24} />,
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
    icon: <Snowflake className="inline-block mr-2 text-cyan-500" size={24} />,
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
    icon: <TrendingDown className="inline-block mr-2 text-red-500" size={24} />,
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
    icon: <Map className="inline-block mr-2 text-green-500" size={24} />,
    options: [
      { text: "Com certeza! Me sinto perdido e preciso de um guia para mudar minha situação.", value: 1, insight: "Essa é a base para a transformação! Um mapa claro e um plano personalizado te dão direção e confiança." },
      { text: "Talvez, mas acho que é muito complicado ou caro para mim.", value: 2, insight: "Pode parecer complicado, mas com a orientação certa, é mais acessível do que você imagina. O investimento na sua clareza financeira se paga." },
      { text: "Não sei, acho que já sei o que preciso, só preciso de disciplina.", value: 3, insight: "A disciplina é importante, mas sem um mapa e as ferramentas certas, ela pode se esgotar. Um bom plano potencializa sua disciplina." },
      { text: "Não preciso, já tenho tudo organizado e meus objetivos claros.", value: 4, insight: "Fantástico! Você já tem um diferencial. Talvez nosso diagnóstico possa oferecer insights ainda mais profundos para otimizar seus resultados." }
    ]
  }
];

// Definição dos temas de cores para Tailwind CSS
// As classes completas são usadas para garantir que o compilador do Tailwind as detecte.
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
// FUNÇÕES HELPERS (Poderiam estar em um arquivo helpers.js)
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
  } else { // score >= 31 && score <= 40
    title = "Perfil Financeiro: Conhecedor - Potencial a Otimizar! ✨";
    description = `
        **Pontuação: ${score} de 40 pontos**

        Parabéns! Suas respostas refletem um alto nível de consciência e controle sobre suas finanças pessoais. Você demonstra organização, planejamento e uma boa capacidade de lidar com o dinheiro, provavelmente já construindo reservas e talvez até investindo. Você trabalha duro e consegue ver os frutos do seu esforço.

        Apesar de sua solidez, o mundo financeiro está em constante evolução. Há sempre novas estratégias, otimizações e caminhos para fazer seu dinheiro trabalhar ainda mais para você, ou para alcançar objetivos ainda maiores e mais ambiciosos.

        **Você já é um(a) grande realizador(a)!** Imagine o que podemos construir juntos ao otimizar o que você já faz bem. Descubra como levar suas finanças para o próximo nível e transformar seu potencial em resultados extraordinários.
      `;
  }
  return { title, description, color: "text-black" }; // Cor é sempre preta agora
};

// ====================================================================================
// COMPONENTES DA UI
// ====================================================================================

// --- Tela de Boas-vindas ---
function WelcomeScreen({ userName, setUserName, userGender, setUserGender, handleStartQuiz, isLoading, activeThemeClasses }) {
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
  
  const startButtonClass = userGender ? `${activeThemeClasses.primary} text-white` : 'bg-black hover:bg-gray-800 text-white';

  return (
    <div className="text-center">
      <h2 className="text-3xl sm:text-4xl font-bold uppercase mb-4 leading-tight text-gray-800">
        Bem-vinda(o)!
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
        <button type="submit" className={`w-full font-bold py-3 px-6 rounded-full shadow-lg transform transition duration-300 hover:scale-105 ${startButtonClass}`} disabled={isLoading}>
          {isLoading ? 'CARREGANDO...' : 'COMEÇAR O QUIZ'}
        </button>
      </form>
    </div>
  );
}

// --- Tela do Quiz ---
function QuizScreen({
    currentQuestionIndex,
    userAnswers,
    userName,
    handleAnswerClick,
    handleNextQuestion,
    handlePreviousQuestion,
    selectedOptionValue,
    currentInsightText,
    activeThemeClasses
}) {
    const totalQuestions = questions.filter(q => !q.id.includes('q4_')).length + 1; // 8 normais + 1 de branching + 1 final
    const progressPercentage = ((currentQuestionIndex + 1) / totalQuestions) * 100;

    // Lógica para obter a pergunta correta (incluindo o branching da Q4)
    const getCurrentQuestionData = () => {
        const questionMap = questions.reduce((acc, q) => ({...acc, [q.id]: q }), {});
        
        if (currentQuestionIndex === 3) {
            const q1Answer = userAnswers.find(a => a.questionId === 'q1');
            const q1Value = q1Answer ? q1Answer.selectedValue : 1;
            return q1Value <= 2 ? questionMap['q4_dificuldade'] : questionMap['q4_otimizacao'];
        }
        // Mapeia o índice para o ID da pergunta, pulando as de branching
        const questionOrder = ['q1', 'q2', 'q3', 'q4_placeholder', 'q5', 'q6', 'q7', 'q8', 'q9', 'q10'];
        const currentQuestionId = questionOrder[currentQuestionIndex];

        return questionMap[currentQuestionId];
    };

    const currentQuestionData = getCurrentQuestionData();

    return (
        <>
            {/* Barra de Progresso */}
            <div className="flex items-center justify-between mb-4">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className={`h-2.5 rounded-full transition-all duration-500 ease-out ${activeThemeClasses.progressBarBg}`} style={{ width: `${progressPercentage}%` }}></div>
                </div>
                <span className="ml-3 text-sm font-medium text-gray-700">{Math.round(progressPercentage)}%</span>
            </div>

            {/* Cabeçalho */}
            <h2 className={`text-3xl sm:text-4xl font-bold text-black uppercase mb-2 leading-tight`}>
                10 Passos para Descobrir <span className={`${activeThemeClasses.textHighlight} font-bold`}>Seu Perfil Financeiro</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 font-semibold mb-6 normal-case">
                Entenda os reais motivos que te fazem trabalhar tanto e mesmo assim não ver a cor do seu dinheiro...
            </p>

            {/* Corpo da Pergunta */}
            <div className="mb-8">
                <p className="text-lg sm:text-xl text-blue-600 font-semibold mb-4">
                    Questão {currentQuestionIndex + 1} de {totalQuestions}
                </p>
                <p className="text-xl sm:text-2xl text-gray-800 mb-6 font-medium">
                    {currentQuestionData.icon} Olá, {getFirstName(userName)}! {currentQuestionData.question.replace('{userName}', getFirstName(userName))}
                </p>
                <div className="grid grid-cols-1 gap-4">
                    {currentQuestionData.options.map((option, index) => {
                        const isSelected = option.value === selectedOptionValue;
                        const isDisabled = selectedOptionValue !== null;
                        
                        let buttonClass = `bg-white text-gray-800 shadow-sm border ${activeThemeClasses.buttonBorder} ${activeThemeClasses.buttonHover}`;
                        if (isDisabled) {
                            buttonClass = isSelected 
                                ? `${activeThemeClasses.buttonSelected} shadow-md transform scale-95` 
                                : 'bg-gray-100 text-gray-500 border-gray-200 cursor-not-allowed';
                        }

                        return (
                            <button
                                key={index}
                                onClick={() => handleAnswerClick(option.value, option.insight, currentQuestionData.id)}
                                className={`w-full p-4 rounded-lg text-lg font-medium transition-all duration-300 ease-in-out relative ${buttonClass}`}
                                disabled={isDisabled}
                            >
                                {option.text}
                                {isSelected && (
                                    <div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 p-2 ${activeThemeClasses.insightBg} ${activeThemeClasses.insightText} text-sm rounded-md shadow-lg whitespace-nowrap z-20`}>
                                        <span className="font-bold">Dica Extra: </span>{currentInsightText}
                                        <div className={`absolute left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent ${activeThemeClasses.insightBorder} bottom-[-4px]`}></div>
                                    </div>
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Botões de Navegação */}
            <div className="flex items-center mt-8 w-full space-x-4">
                {currentQuestionIndex > 0 && (
                    <button onClick={handlePreviousQuestion} className="py-5 px-6 rounded-md text-xl font-bold text-white bg-black hover:bg-gray-800 transition-all duration-300 ease-in-out shadow-md uppercase w-40">
                        VOLTAR
                    </button>
                )}
                <button
                    onClick={handleNextQuestion}
                    className={`py-5 rounded-md text-xl font-bold text-white uppercase transition-all duration-300 ease-in-out shadow-lg flex-grow ${activeThemeClasses.primary}`}
                    disabled={selectedOptionValue === null}
                >
                    {currentQuestionIndex === totalQuestions - 1 ? "VER MEU PERFIL" : "PRÓXIMA QUESTÃO"}
                </button>
            </div>
        </>
    );
}

// --- Tela do Formulário de Lead ---
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
        if (!userWhatsapp.trim() || userWhatsapp.length < 12) { // 55 + DDD + 8/9 digitos
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
                <button type="submit" className={`w-full ${activeThemeClasses.primary} text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition duration-300 hover:scale-105`} disabled={isLoading}>
                    {isLoading ? 'ENVIANDO...' : 'QUERO MEU DIAGNÓSTICO GRATUITO!'}
                </button>
            </form>
        </div>
    );
}

// --- Tela de Resultados ---
function ResultsScreen({ userName, profile, formSubmitted }) {
    const [showSuccessMessage, setShowSuccessMessage] = useState(formSubmitted);

    return (
        <div className="text-center">
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
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 uppercase mb-6 leading-tight">
                Seu Relatório de Perfil Financeiro
            </h2>
            <div className="p-6 bg-white rounded-lg border border-blue-700 shadow-inner mb-8 text-left">
                <h3 className={`text-2xl sm:text-3xl font-bold ${profile.color} mb-3`}>{profile.title}</h3>
                <div className="text-lg text-gray-800 leading-relaxed space-y-4" dangerouslySetInnerHTML={{ __html: profile.description.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br/>') }} />
            </div>
            <div className="bg-white border border-blue-700 p-6 rounded-lg shadow-xl mb-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-4">
                    Pronto para transformar suas finanças, {getFirstName(userName)}?
                </h3>
                <p className="text-lg text-gray-800 mb-6">
                    Agende sua <span className="font-bold">reunião online individual</span> para um diagnóstico aprofundado. Nesta sessão exclusiva, você terá:
                </p>
                <ul className="list-disc list-inside text-left text-gray-700 text-lg space-y-2 mb-6 max-w-md mx-auto">
                    <li><span className="font-semibold">Clareza total</span> da sua real situação financeira.</li>
                    <li>Um <span className="font-semibold">mapa detalhado</span> da sua vida financeira.</li>
                    <li><span className="font-semibold">Caminhos claros e personalizados</span> para seguir.</li>
                </ul>
                <button
                    data-cal-link="kgfinancas/diagnostico"
                    data-cal-namespace="diagnostico"
                    data-cal-config='{"layout":"month_view","theme":"light"}'
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transform transition duration-300 hover:scale-105 inline-block text-xl uppercase"
                >
                    AGENDAR MEU DIAGNÓSTICO GRATUITO!
                </button>
            </div>
        </div>
    );
}


// ====================================================================================
// COMPONENTE PRINCIPAL (APP)
// ====================================================================================

function App() {
    // Estados principais
    const [quizState, setQuizState] = useState('welcome'); // 'welcome', 'quiz', 'processing', 'leadForm', 'results'
    const [isLoading, setIsLoading] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);

    // Estados do usuário
    const [userName, setUserName] = useState('');
    const [userGender, setUserGender] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userWhatsapp, setUserWhatsapp] = useState('');
    const [userIncomeRange, setUserIncomeRange] = useState('');
    const [userDebtRange, setUserDebtRange] = useState('');
    const [lgpdConsent, setLgpdConsent] = useState(false);

    // Estados do Quiz
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [score, setScore] = useState(0);
    const [selectedOptionValue, setSelectedOptionValue] = useState(null);
    const [currentInsightText, setCurrentInsightText] = useState('');
    
    // Estados de sessão e URL
    const [quizSessionId, setQuizSessionId] = useState(null);
    const [initialUrlParams, setInitialUrlParams] = useState({});

    // Deriva o tema ativo com base no gênero
    const activeThemeClasses = themeClasses[userGender] || themeClasses.outros;

    // Efeito para inicializar Cal.com e capturar parâmetros da URL
    useEffect(() => {
        if (!window.Cal) {
            (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if (typeof namespace === "string") { cal.ns[namespace] = cal.ns[namespace] || api; p(cal.ns[namespace], ar); p(cal, ["initNamespace", namespace]); } else p(cal, ar); return; } p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
        }
        window.Cal("init", "diagnostico", { origin: "https://app.cal.com" });
        window.Cal.ns.diagnostico("ui", { "theme": "light", "hideEventTypeDetails": false, "layout": "month_view" });

        const params = new URLSearchParams(window.location.search);
        const paramsObj = {};
        for (let [key, value] of params.entries()) {
            paramsObj[key] = value;
        }
        setInitialUrlParams(paramsObj);
        setQuizSessionId(crypto.randomUUID());
    }, []);

    // Handlers
    const handleStartQuiz = () => {
        setQuizState('quiz');
    };

    const handleAnswerClick = (value, insightText, questionId) => {
        if (selectedOptionValue !== null) return;
        
        const newScore = score + value;
        setScore(newScore);
        setSelectedOptionValue(value);
        setCurrentInsightText(insightText);

        const questionData = questions.find(q => q.id === questionId) || questions.find(q => q.id === 'q4_dificuldade') || questions.find(q => q.id === 'q4_otimizacao');
        
        setUserAnswers(prev => [...prev, {
            questionId: questionId,
            questionIndex: currentQuestionIndex,
            question: questionData.question.replace('{userName}', getFirstName(userName)),
            selectedOption: questionData.options.find(opt => opt.value === value).text,
            selectedValue: value,
        }]);
    };

    const handleNextQuestion = () => {
        setSelectedOptionValue(null);
        setCurrentInsightText('');
        
        const totalQuestions = questions.filter(q => !q.id.includes('q4_')).length + 1;
        if (currentQuestionIndex < totalQuestions - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setQuizState('processing');
            setTimeout(() => setQuizState('leadForm'), 1500);
        }
    };

    const handlePreviousQuestion = () => {
        if (currentQuestionIndex > 0) {
            const lastAnswer = userAnswers[userAnswers.length - 1];
            if (lastAnswer) {
                setScore(score - lastAnswer.selectedValue);
                setUserAnswers(prev => prev.slice(0, -1));
            }
            setSelectedOptionValue(null);
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

            const payload = {
                quizSessionId,
                userName: formattedUserName,
                userGender,
                userEmail: userEmail.toLowerCase(),
                userWhatsapp: formatPhoneNumber(userWhatsapp),
                userIncomeRange: incomeRanges.find(r => r.value === userIncomeRange)?.label || '',
                userDebtRange: debtRanges.find(r => r.value === userDebtRange)?.label || '',
                totalScore: score,
                financialProfile: profileData.title,
                profileDescription: profileData.description,
                quizAnswers: userAnswers,
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

        } catch (error) {
            console.error('Erro ao enviar dados para o n8n:', error);
            alert('Ocorreu um erro ao enviar seus dados. Por favor, tente novamente.'); // Fallback de erro
        } finally {
            setIsLoading(false);
        }
    };

    // Renderização condicional do conteúdo
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
                    selectedOptionValue={selectedOptionValue}
                    currentInsightText={currentInsightText}
                    activeThemeClasses={activeThemeClasses}
                 />;
            case 'processing':
                return <div className="text-center py-20">
                           <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 uppercase mb-6">Processando...</h2>
                           <p className="text-lg text-gray-700">Aguarde enquanto preparamos seu relatório, {getFirstName(userName)}.</p>
                       </div>;
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
                    activeThemeClasses={activeThemeClasses}
                />;
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 font-sans">
            <div className="relative z-10 bg-white rounded-xl shadow-2xl p-6 sm:p-8 lg:p-10 max-w-2xl w-full text-center">
                {renderContent()}
            </div>
        </div>
    );
}

export default App;
