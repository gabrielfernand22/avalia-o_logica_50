// Peso da encomenda
const prompt = require('prompt-sync')();

const peso = Number(prompt("Digite o peso da encomenda: "));

if (peso <= 1) {
    console.log("Leve");
} else if (peso <= 5) {
    console.log("Medio");
} else {
    console.log("Pesado");
}