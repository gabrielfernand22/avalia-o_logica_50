//Tempo de atendimento
const prompt = require('prompt-sync')();

const espera = Number(prompt("Digite o tempo de espera: "));

if (espera <= 5) {
    console.log("Rapido");
} else if (espera <= 15) {
    console.log("Normal");
} else if (espera <= 30) {
    console.log("Demorado");
} else {
    console.log("Muito demorado");
}