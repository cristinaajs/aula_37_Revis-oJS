//Forma convencional
soma = function(a,b){
    return a + b;
}

var resultado = soma(1, 2)

console.log("Resultado da função convencional: " + resultado)

//Arrow funcion apontando para o retorno da função
soma = (a,b) => a + b

var resultado = soma (4,20)

console.log("Resultado da arrow function: " + resultado)


// declaração de função convencional
function somatorio(n1,n2){
    return n1 + n2;
}

console.log(soma)

// declaração de função com arrow functions omitindo a palavra function e a palavra return
let times = (n1,n2) => n1 * n2;

console.log(times(4,2))