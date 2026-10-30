//Consumo de agua
const prompt = require('prompt-sync')();

const consumo = Number(prompt("Digite o consumo de agua: "));

if (consumo < 50) {
    console.log("Baixo");
} else if (consumo <= 100) {
    console.log("Moderado");
} else {
    console.log("Alto");
}