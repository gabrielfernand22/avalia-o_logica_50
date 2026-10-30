// Tempo de entrega
const prompt = require('prompt-sync')();

const atraso = Number(prompt("Digite o atraso em minutos: "));

if (atraso <= 0) {
    console.log("No prazo");
} else if (atraso <= 15) {
    console.log("Atraso pequeno");
} else if (atraso <= 40) {
    console.log("Atraso moderado");
} else {
    console.log("Atraso grande");
}