# TESTES UNITÁRIOS

## Configuração dos Testes

O projeto utiliza Jest e React Testing Library para testes unitários. As principais dependências já estão configuradas:

- `@testing-library/jest-dom`: Matchers customizados para Jest
- `@testing-library/react`: Utilitários para testar componentes React
- `@testing-library/user-event`: Simulação de eventos do usuário

## Estrutura dos Testes

### 1. Testes do Componente Principal (App.test.js)
- Testa a renderização inicial da tela de boas-vindas
- Verifica se o botão de início é habilitado quando nome e gênero são fornecidos

## Scripts Disponíveis

```bash
# Executar todos os testes
npm test

# Executar testes uma única vez
npm test -- --watchAll=false

# Executar testes com cobertura
npm run test:coverage

# Executar testes relacionados aos arquivos alterados
npm test -- --watch
```

## Cobertura de Testes

Os testes cobrem:

1. **Componente Principal**:
   - Renderização correta das telas
   - Validação de formulários
   - Navegação entre etapas do quiz

## Executando os Testes Antes do Deploy

Antes de fazer deploy para produção, execute:

```bash
# Instalar dependências (se necessário)
npm install

# Executar testes
npm test -- --watchAll=false
```

Verifique se todos os testes passam antes de proceder com o deploy.

## Adicionando Novos Testes

Para adicionar novos testes:

1. Crie arquivos com extensão `.test.js`
2. Coloque-os na pasta `src/` ou em subpastas apropriadas
3. Siga o padrão dos testes existentes
4. Execute `npm test` para verificar se os novos testes estão funcionando

## Status dos Testes

✅ **Testes básicos estão funcionando corretamente**
- Renderização do componente principal
- Validação de campos obrigatórios
- Navegação inicial

Para adicionar testes mais abrangentes no futuro, considere:
- Testar o fluxo completo do quiz
- Testar a funcionalidade de envio de dados
- Testar os componentes individuais
- Testar as funções auxiliares (exportando-as do App.js)