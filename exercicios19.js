// Ocupação do ônibus
const prompt = require('prompt-sync')();

const passageiros = Number(prompt("Digite a quantidade de passageiros: "));

if (passageiros < 0) {
    console.log("Valor invalido");
} else if (passageiros <= 15) {
    console.log("Vazio");
} else if (passageiros <= 35) {
    console.log("Moderado");
} else {
    console.log("Lotado");
}