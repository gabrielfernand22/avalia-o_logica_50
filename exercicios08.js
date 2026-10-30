// Velocidade da bicicleta
const prompt = require('prompt-sync')();

const velocidade = Number(prompt("Digite a velocidade: "));

if (velocidade < 10) {
    console.log("Lento");
} else if (velocidade <= 20) {
    console.log("Moderado");
} else {
    console.log("Rapido");
}