//Exercício 2.2 - Conversão de Tipos
//Crie uma variável anoNascimento e defina um valor numérico.
//Converta essa variável para String e exiba o tipo de dado no console.
//Crie uma variável peso como String "80.5" e converta para número.

let anoNascimento = 1990;
anoNascimento = anoNascimento.toString();
console.log(typeof anoNascimento);  // O tipo agora será 'string'
let peso = "80.5";
peso = parseFloat(peso);// Convertendo para número (float)
console.log(typeof peso);  // O tipo agora será 'number'
