// Peças produzidas
const prompt = require('prompt-sync')();

const pecas = Number(prompt("Digite a quantidade de pecas produzidas: "));

if (pecas < 10) {
    console.log("Abaixo da meta");
} else if (pecas <= 19) {
    console.log("Meta parcial");
} else if (pecas <= 29) {
    console.log("Meta atingida");
} else {
    console.log("Meta superada");
}