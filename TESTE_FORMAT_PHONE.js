// Testes para a função formatPhoneNumber

// Teste 1: Número de celular com nono dígito
console.log(formatPhoneNumber("(11) 99999-9999")); 
// Esperado: "11999999999"

// Teste 2: Número de telefone fixo
console.log(formatPhoneNumber("(11) 8888-8888")); 
// Esperado: "1188888888"

// Teste 3: Número com código do país
console.log(formatPhoneNumber("+55 (11) 99999-9999")); 
// Esperado: "5511999999999"

// Teste 4: Número com caracteres especiais
console.log(formatPhoneNumber("11 99999 9999")); 
// Esperado: "11999999999"