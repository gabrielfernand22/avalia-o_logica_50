// Pontualidade
const prompt = require('prompt-sync')();

const diferenca = Number(prompt("Digite a diferenca em minutos: "));

if (diferenca < -15) {
    console.log("Muito atrasado");
} else if (diferenca < 0) {
    console.log("Atrasado");
} else if (diferenca === 0) {
    console.log("No horario");
} else {
    console.log("Adiantado");
}