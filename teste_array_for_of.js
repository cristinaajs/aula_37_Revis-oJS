//array de objeto
const fila = [
    {
        nome: "Elisete",
        sobrenome: "Jesus",
        idade: 56
    },
    {
        nome: "Ane",
        sobrenome: "Jesus",
        idade: 28
    },
    {
        nome: "Antônio",
        sobrenome: "Jesus",
        idade: 66
    },
    {
        nome: "Marcio",
        sobrenome: "Jesus",
        idade: 36
    },
    {
        nome: "Cristina",
        sobrenome: "Jesus",
        idade: 27
    }
]

//varrendo o array de fila obtendo cada pessoa
for(pessoa of fila){
    //console.log(pessoa)
    console.log(pessoa.nome)
}

//varrendo o array de fila obtendo o índice de cada pessoa no array
for(pessoa of fila.entries()){
    //imprime a pessoa com o seu indice
    console.log(pessoa)
    //imprime o indice e o nome da pessoa
    console.log(pessoa[0] + ":" + pessoa[1].nome)
}