// Velocidade de internet
const prompt = require('prompt-sync')();

const velocidade = Number(prompt("Digite a velocidade da internet (Mbps): "));

if (velocidade <= 0) {
    console.log("Sem conexao");
} else if (velocidade < 20) {
    console.log("Lenta");
} else if (velocidade < 100) {
    console.log("Regular");
} else {
    console.log("Rapida");
}