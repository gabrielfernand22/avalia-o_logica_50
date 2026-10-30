//Qualidade do ar
const prompt = require('prompt-sync')();

const indice = Number(prompt("Digite o indice de qualidade do ar: "));

if (indice <= 50) {
    console.log("Bom");
} else if (indice <= 100) {
    console.log("Regular");
} else if (indice <= 150) {
    console.log("Ruim");
} else {
    console.log("Muito ruim");
}