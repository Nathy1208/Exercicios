//Crie uma função chamada calculadora() que recebe três parâmetros:
//Dois números.
//Uma operação matemática (+, -, *, /).
//A função deve retornar o resultado da operação.

function calculadora(numero1, numero2, operacao) {
    let resultado;

    // Verificando a operação e realizando o cálculo
    if (operacao === "+") {
        resultado = numero1 + numero2;
    } else if (operacao === "-") {
        resultado = numero1 - numero2;
    } else if (operacao === "*") {
        resultado = numero1 * numero2;
    } else if (operacao === "/") {
        // Verificando divisão por zero
        if (numero2 === 0) {
            return "Erro: Divisão por zero!";
        }
        resultado = numero1 / numero2;
    } else {
        return "Operação inválida!";
    }

    return resultado;
}

console.log(calculadora(10, 5, "+"));  // Resultado: 15
console.log(calculadora(10, 5, "-"));  // Resultado: 5
console.log(calculadora(10, 5, "*"));  // Resultado: 50
console.log(calculadora(10, 5, "/"));  // Resultado: 2
console.log(calculadora(10, 0, "/"));  // Resultado: erro
