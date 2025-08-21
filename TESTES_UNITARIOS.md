# TESTES UNITÁRIOS

## VISÃO GERAL

Este projeto inclui testes unitários para garantir a qualidade e o funcionamento correto da aplicação. Os testes são escritos usando:

- **Jest**: Framework de testes JavaScript
- **React Testing Library**: Para testes de componentes React
- **@testing-library/jest-dom**: Matchers adicionais para testes DOM

## ESTRUTURA DOS TESTES

```
src/
├── App.test.js          # Testes do componente principal
├── helpers.test.js      # Testes das funções auxiliares
├── setupTests.js        # Configuração dos testes
└── App.js              # Código principal (testado)
```

## SCRIPTS DISPONÍVEIS

### Executar todos os testes
```bash
npm test
```

### Executar testes em modo watch
```bash
npm test -- --watch
```

### Executar testes com cobertura
```bash
npm run test:coverage
```

## TESTES IMPLEMENTADOS

### 1. Componente Principal (App.test.js)
- Renderização da tela de boas-vindas
- Validação de campos obrigatórios
- Navegação entre telas
- Funcionamento do botão de início

### 2. Funções Auxiliares (helpers.test.js)
- `formatName`: Formatação de nomes e remoção de preposições
- `formatPhoneNumber`: Limpeza de caracteres não numéricos
- `getFinancialProfile`: Determinação do perfil financeiro baseado na pontuação
- `calculateSkillScores`: Cálculo de pontuações por habilidade

## COBERTURA DE TESTES

Os testes cobrem as seguintes áreas principais:

1. **Interface do Usuário**:
   - Renderização correta dos componentes
   - Interações do usuário
   - Validações de formulário

2. **Lógica de Negócio**:
   - Formatação de dados
   - Cálculos de pontuação
   - Determinação de perfis

3. **Fluxo da Aplicação**:
   - Navegação entre telas
   - Estado da aplicação
   - Tratamento de dados

## EXECUTANDO OS TESTES

### Antes de ir para produção:
```bash
# Instalar dependências de desenvolvimento
npm install

# Executar todos os testes
npm test

# Ou executar com cobertura para ver a cobertura
npm run test:coverage
```

### Resultados esperados:
- Todos os testes devem passar (0 falhas)
- Cobertura mínima recomendada: 80% para as funções principais

## ADICIONANDO NOVOS TESTES

Para adicionar novos testes:

1. Crie um novo arquivo com a extensão `.test.js`
2. Importe as funções/componentes a serem testados
3. Use `describe` e `test` para organizar os testes
4. Use `expect` para asserções
5. Execute os testes com `npm test`

## MELHORES PRÁTICAS

1. **Testes Isolados**: Cada teste deve ser independente
2. **Mock de Dependências**: Use mocks para APIs externas
3. **Cobertura Adequada**: Teste casos normais e edge cases
4. **Nomes Claros**: Use nomes descritivos para os testes
5. **Setup/Teardown**: Configure e limpe o ambiente de teste adequadamente