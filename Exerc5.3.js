//Exercício 5.3 - Média de Notas
//Crie uma função que recebe três notas e calcula a média.
//Exiba "Aprovado" se a média for maior ou igual a 7, senão "Reprovado".


function calcularMedia(nota1, nota2, nota3) {
    // Calculando a média
    let media = (nota1 + nota2 + nota3) / 3;

    // Verificando se o aluno foi aprovado ou reprovado
    if (media >= 7) {
        console.log("Aprovado");
    } else {
        console.log("Reprovado");
    }
}

// Exemplo de uso da função
calcularMedia(8, 7, 6);  // Resultado: Aprovado
calcularMedia(5, 6, 4);  // Resultado: Reprovado
