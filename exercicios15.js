// Páginas lidas
const prompt = require('prompt-sync')();

const paginas = Number(prompt("Digite a quantidade de paginas lidas: "));

if (paginas < 10) {
    console.log("Inicio");
} else if (paginas <= 29) {
    console.log("Em progresso");
} else if (paginas <= 59) {
    console.log("Muito bem");
} else {
    console.log("Meta superada");
}