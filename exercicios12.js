//Carga da mochila
const prompt = require('prompt-sync')();

const peso = Number(prompt("Digite o peso da mochila: "));

if (peso < 3) {
    console.log("Leve");
} else if (peso <= 6) {
    console.log("Atencao");
} else {
    console.log("Muito pesada");
}