const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

var nome;
readline.question(`Qual o seu nome?`, name => {
    nome = name;
    console.log(`Hi ${name}!`);
    readline.close();
});

console.log(nome)