// parque
const prompt = require('prompt-sync')();

const altura = Number(prompt("Digite a altura em cm: "));

if (altura < 110) {
    console.log("Nao permitido");
} else if (altura < 150) {
    console.log("Acompanhado");
} else {
    console.log("Liberado");
}