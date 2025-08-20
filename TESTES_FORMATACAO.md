```javascript
// Testes para a função formatName

// Teste 1: Nome com preposição "de"
console.log(formatName("alessandro de barros")); 
// Esperado: "Alessandro Barros"

// Teste 2: Nome com múltiplas preposições
console.log(formatName("maria da silva e souza")); 
// Esperado: "Maria Silva Souza"

// Teste 3: Nome com preposição "dos"
console.log(formatName("josé dos santos")); 
// Esperado: "José Santos"

// Teste 4: Nome com preposição "e"
console.log(formatName("ana e carlos")); 
// Esperado: "Ana Carlos"

// Teste 5: Nome sem preposições
console.log(formatName("carlos eduardo")); 
// Esperado: "Carlos Eduardo"

// Teste 6: Nome com preposição no início
console.log(formatName("francisco de assis")); 
// Esperado: "Francisco Assis"

// Teste 7: Nome com múltiplas preposições diferentes
console.log(formatName("lucia das dores")); 
// Esperado: "Lucia Dores"
```