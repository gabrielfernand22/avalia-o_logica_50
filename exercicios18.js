// Avaliação do restaurante
const prompt = require('prompt-sync')();

const nota = Number(prompt("Digite a nota do restaurante: "));

if (nota < 0 || nota > 10) {
    console.log("Nota invalida");
} else if (nota < 5) {
    console.log("Insatisfatorio");
} else if (nota < 8) {
    console.log("Bom");
} else {
    console.log("Excelente");
}