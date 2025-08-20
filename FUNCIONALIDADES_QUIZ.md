# Documentação de Funcionalidades - App Quiz Financeiro

## Visão Geral
O Quiz Financeiro é um aplicativo React interativo projetado para ajudar os usuários a identificarem seu perfil financeiro e obterem insights sobre seus hábitos financeiros. O aplicativo guia o usuário por uma série de perguntas e fornece um diagnóstico personalizado com base nas respostas.

## Tecnologias Utilizadas
- React.js
- Tailwind CSS (via CDN)
- Lucide React (ícones)
- Google Fonts (Inter)

## Funcionalidades Principais

### 1. Tela de Boas-Vindas
- Campo para inserção do nome completo do usuário
- Seleção de gênero (masculino, feminino, outros)
- Validação de campos obrigatórios
- Tematização personalizada com base no gênero selecionado

### 2. Questionário Interativo
- 10 perguntas cuidadosamente elaboradas sobre hábitos financeiros
- Diferentes tipos de perguntas:
  - Perguntas de múltipla escolha
  - Pergunta com slider (escala de 0 a 10)
- Barra de progresso visual
- Navegação entre perguntas (avançar/voltar)
- Ponto de verificação na metade do questionário (midpoint summary)

### 3. Sistema de Pontuação e Perfis
- Sistema de pontuação baseado nas respostas do usuário
- 3 perfis financeiros distintos:
  - Descontrolado(a) 🆘 (pontuação ≤ 16)
  - Gastador(a) 💸 (pontuação ≤ 23)
  - Desligado(a) 🧭 (pontuação > 23)
- Análise de habilidades em 4 áreas:
  - Controle de Gastos
  - Gestão de Dívidas
  - Mentalidade Financeira
  - Planejamento Futuro

### 4. Processamento e Análise
- Tela de carregamento com animação
- Cálculo automático do perfil financeiro
- Geração de gráfico radar com pontuações das habilidades
- Identificação da habilidade mais fraca e mais forte

### 5. Formulário de Captura de Leads
- Coleta de informações de contato:
  - E-mail
  - WhatsApp
  - Faixa de renda
  - Faixa de dívida
- Consentimento LGPD
- Validação de todos os campos obrigatórios
- Envio de dados para webhook externo

### 6. Resultados e Recomendações
- Exibição do perfil financeiro do usuário
- Mostrar habilidade mais fraca e recomendação de "primeiro socorro"
- Exibição de vídeo explicativo
- Depoimento de usuário
- Link para agendamento de diagnóstico gratuito
- Opções de compartilhamento (WhatsApp, grupo WhatsApp, cópia de texto)

### 7. Funcionalidades Adicionais
- Persistência de estado com localStorage (salvar/continuar quiz)
- Modal de restauração de sessão
- Tematização personalizada por gênero
- Design responsivo para dispositivos móveis
- Integração com Cal.com para agendamentos

## Fluxo do Usuário
1. Tela de boas-vindas → Coleta de nome e gênero
2. Questionário (passo a passo) → 10 perguntas sobre finanças
3. Ponto intermediário → Explicação das habilidades avaliadas
4. Continuação do questionário
5. Processamento → Análise das respostas
6. Formulário de lead → Coleta de dados de contato
7. Resultados → Diagnóstico personalizado e recomendações
8. Chamada para ação → Agendamento de diagnóstico gratuito

## Recursos Específicos

### Sistema de Cores por Gênero
- Masculino: Azul (#189AB4)
- Feminino: Rosa (#A86A8A)
- Outros: Cinza escuro (#718096)

### Gráfico Radar de Habilidades
Visualização gráfica das pontuações em:
- Controle de Gastos
- Gestão de Dívidas
- Mentalidade Financeira
- Planejamento Futuro

### Tipos de Perguntas
1. Múltipla escolha com 4 opções
2. Slider de nível de preocupação (0-10)

### Recomendações Personalizadas
Com base na habilidade mais fraca identificada:
- Primeiro socorro para Gestão de Dívidas
- Primeiro socorro para Controle de Gastos
- Primeiro socorro para Mentalidade Financeira
- Primeiro socorro para Planejamento Futuro

## Integrações Externas
- Webhook para envio de dados de leads
- Cal.com para agendamento de consultas
- YouTube para incorporação de vídeo explicativo

## Recursos de UX
- Barra de progresso em tempo real
- Botões de navegação intuitivos
- Feedback visual para seleções
- Animações e transições suaves
- Design responsivo para mobile
- Mensagens de validação de formulário
- Modal de confirmação para restauração de sessão

## Tratamento de Dados de Nome

A aplicação agora inclui uma função especializada para tratamento de nomes que:

1. Converte todas as palavras para o formato com inicial maiúscula
2. Remove preposições comuns como "de", "da", "do", "das", "dos", "e"
3. Mantém o primeiro nome completo mesmo que seja uma preposição

### Exemplos:
- Entrada: "alessandro de barros" → Saída: "Alessandro Barros"
- Entrada: "maria da silva e souza" → Saída: "Maria Silva Souza"
- Entrada: "josé dos santos" → Saída: "José Santos"
- Entrada: "ana e carlos" → Saída: "Ana Carlos"

Essa formatação é aplicada automaticamente antes do envio dos dados para o webhook, garantindo consistência nos dados dos leads.

## Tratamento de Dados de Email

O campo de email também passa por um tratamento especial:

1. Todos os emails são convertidos para letras minúsculas antes do envio
2. Isso garante consistência na base de dados e evita duplicatas por diferença de case

### Exemplos:
- Entrada: "Alessandro.Barros@Gmail.COM" → Saída: "alessandro.barros@gmail.com"
- Entrada: "MARIA@HOTMAIL.COM" → Saída: "maria@hotmail.com"

Essa formatação também é aplicada automaticamente antes do envio dos dados para o webhook.

## Tratamento de Dados de Telefone

O campo de telefone agora inclui formatação automática com máscara:

1. Aplicação de máscara em tempo real conforme o usuário digita
2. Limitação de dígitos para evitar entrada excessiva
3. Suporte para telefones com e sem nono dígito
4. Formatos:
   - (XX) XXXX-XXXX (telefones fixos ou celulares antigos)
   - (XX) XXXXX-XXXX (celulares com nono dígito)
5. Remoção da adição automática do código do Brasil (55)

### Exemplos:
- Entrada: "11999999999" → Saída: "(11) 99999-9999"
- Entrada: "1188888888" → Saída: "(11) 8888-8888"
- Entrada: "5511999999999" → Saída: "(55) 11999-9999" (limitado a 11 dígitos)

A máscara é aplicada apenas para exibição. Internamente, o sistema armazena apenas os números para envio ao webhook. O código do Brasil (55) não é mais adicionado automaticamente, sendo necessário que o usuário o insira manualmente se necessário.