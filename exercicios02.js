//Altura para brinquedo
const prompt = require('prompt-sync')();

const altura = Number(prompt("Digite a altura em cm: "));

if (altura < 100) {
    console.log("Nao permitido");
} else if (altura < 140) {
    console.log("Acompanhado");
} else {
    console.log("Liberado");
}