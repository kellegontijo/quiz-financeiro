```javascript
// Teste da função formatPhoneWithMask

// Teste 1: Celular com nono dígito (formato brasileiro)
console.log(formatPhoneWithMask("11999999999")); 
// Esperado: "(11) 99999-9999"

// Teste 2: Telefone fixo ou celular antigo (8 dígitos)
console.log(formatPhoneWithMask("1188888888")); 
// Esperado: "(11) 8888-8888"

// Teste 3: Celular com nono dígito e código do Brasil
console.log(formatPhoneWithMask("5511999999999")); 
// Esperado: "+55 (11) 99999-9999"

// Teste 4: Telefone fixo com código do Brasil
console.log(formatPhoneWithMask("551188888888")); 
// Esperado: "+55 (11) 8888-8888"

// Teste 5: Número com caracteres especiais
console.log(formatPhoneWithMask("(11) 99999-9999")); 
// Internamente armazena: "11999999999"
// Exibição: "(11) 99999-9999"

// Teste 6: Número com espaços
console.log(formatPhoneWithMask("11 99999 9999")); 
// Internamente armazena: "11999999999"
// Exibição: "(11) 99999-9999"
```