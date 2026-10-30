//mochila
const prompt = require('prompt-sync')();

const peso = Number(prompt("Digite o peso da mochila: "));

if (peso <= 2) {
    console.log("Leve");
} else if (peso <= 5) {
    console.log("Atencao");
} else {
    console.log("Pesada");
}