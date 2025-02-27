//Exercício 3.2 - Idade e Permissão
//Peça ao usuário sua idade.
//Verifique e exiba se ele pode votar e/ou tirar a carteira de motorista.
//Regras:
//Menos de 16 anos: Não pode votar.
//Entre 16 e 17 anos: Voto opcional.
//18 anos ou mais: Voto obrigatório e pode tirar CNH.

var prompt = require("prompt-sync")();
// Desafio 1 - Verificação de Idade
var idade = Number(prompt("Informe sua Idade:"));
//if encadeado 
if (idade < 16) {
    console.log("não pode votar");
} else if (idade>=16 && idade<17){
    console.log("voto opcional");
} else{
    console.log("Voto obrigatório e pode tirar CNH");
}