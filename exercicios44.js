//entrega
const prompt = require('prompt-sync')();

const atraso = Number(prompt("Digite o atraso da entrega: "));

if (atraso <= 0) {
    console.log("No prazo");
} else if (atraso <= 10) {
    console.log("Pequeno");
} else if (atraso <= 30) {
    console.log("Moderado");
} else {
    console.log("Grande");
}