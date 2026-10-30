//visitantes do museu
const prompt = require('prompt-sync')();

const visitantes = Number(prompt("Digite a quantidade de visitantes: "));

if (visitantes < 20) {
    console.log("Baixo");
} else if (visitantes <= 59) {
    console.log("Medio");
} else {
    console.log("Alto");
}