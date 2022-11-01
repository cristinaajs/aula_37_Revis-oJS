//declaração de variável de escopo global com let
let numero //undefined;

numero = 4

console.log(numero)

//erro ao redeclarar variável com let
//let numero = 20

//parâmetro de função
//declaração de função - sem chamar
function calcula(n){

    //declaração de variável de escopo de função, esta variável só existe nesta parte do programa
    let numero = 10;

    //função retorna o resultado do cálculo
    return n * numero;
}

//variável constante de escopo global que recebe o resultado da multiplicação através do retorno (return) da função
const resultado = calcula(numero)
                  // chamada da função passando como parâmetro o valor da variável número

console.log(resultado)