// src/setupTests.js
// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Mock das questões do quiz para testes
global.questions = [
  {
    id: 'q1',
    question: "Quando você olha para sua conta bancária, qual frase descreve melhor o sentimento?",
    skill: 'Controle de Gastos',
    options: [
      { text: "Recebo o salário e em poucos dias já acabou tudo.", value: 2 },
      { text: "Estou sempre no vermelho, usando o limite do cheque especial.", value: 1 },
      { text: "Eu nem olho o extrato para não me assustar.", value: 3 },
      { text: "Pago o básico e o resto vai para o cartão de crédito.", value: 2 }
    ]
  },
  {
    id: 'q2',
    question: "Suas dívidas hoje são compostas principalmente por quê?",
    skill: 'Gestão de Dívidas',
    options: [
      { text: "Contas básicas atrasadas, como aluguel, água e luz.", value: 1 },
      { text: "Uma bola de neve com cartão de crédito e cheque especial.", value: 1 },
      { text: "Vários empréstimos que fiz para resolver outras contas.", value: 1 },
      { text: "Parcelamentos de compras que, somados, viraram um monstro.", value: 2 }
    ]
  },
  {
    id: 'q3',
    question: "Qual destes pensamentos sobre dinheiro é mais comum para você?",
    skill: 'Mentalidade Financeira',
    options: [
      { text: "'Eu mereço!', mesmo sabendo que não posso pagar.", value: 2 },
      { text: "'Depois eu vejo como pago', e a conta sempre chega.", value: 3 },
      { text: "'Não tem mais jeito', um sentimento de que perdeu o controle.", value: 1 },
      { text: "'Se eu tivesse mais dinheiro, tudo se resolveria.'", value: 2 }
    ]
  }
];