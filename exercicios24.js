// Preço de estacionamento
const prompt = require('prompt-sync')();

const horas = Number(prompt("Digite as horas estacionadas: "));

if (horas <= 0) {
    console.log("Tempo invalido");
} else if (horas <= 1) {
    console.log("R$ 5");
} else if (horas <= 3) {
    console.log("R$ 10");
} else {
    console.log("R$ 20");
}