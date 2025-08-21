import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

// Mock do fetch para evitar chamadas reais à API durante os testes
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({}),
    text: () => Promise.resolve(''),
  })
);

// Mock do crypto.randomUUID
if (typeof global.crypto !== 'object') {
  global.crypto = {};
}
if (typeof global.crypto.randomUUID !== 'function') {
  global.crypto.randomUUID = () => 'test-uuid';
}

describe('App Component', () => {
  test('renders welcome screen initially', () => {
    render(<App />);
    expect(screen.getByText(/Quiz Seu Perfil Financeiro/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Seu Nome Completo/i)).toBeInTheDocument();
  });

  test('allows user to start quiz with valid input', () => {
    render(<App />);
    
    const nameInput = screen.getByPlaceholderText(/Seu Nome Completo/i);
    fireEvent.change(nameInput, { target: { value: 'João Silva' } });
    
    // Selecionar gênero
    const genderRadio = screen.getByLabelText(/Masculino/i);
    fireEvent.click(genderRadio);
    
    const startButton = screen.getByText(/COMEÇAR DIAGNÓSTICO/i);
    expect(startButton).toBeEnabled();
  });
});