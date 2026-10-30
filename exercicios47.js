//estacionamento
const prompt = require('prompt-sync')();

const horas = Number(prompt("Digite as horas de estacionamento: "));

if (horas <= 0) {
    console.log("Invalido");
} else if (horas <= 2) {
    console.log("R$ 8");
} else if (horas <= 4) {
    console.log("R$ 14");
} else {
    console.log("R$ 25");
}