//Exercício 3.1 - Verificando Par ou Ímpar
//Crie um código que:
//Peça ao usuário um número.
//Verifique se é par ou ímpar.
//Exiba no console "O número X é par" ou "O número X é ímpar".

// Exercicio 1 - Par ou Ímpar 
var prompt = require("prompt-sync")();
var numero = Number(prompt("Informe um N°:"));

if ((numero%2)===0) {
    console.log("O número digitado é par");
} else{
    console.log("O número digitado é ímpar");
}