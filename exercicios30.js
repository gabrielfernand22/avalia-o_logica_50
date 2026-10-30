// Produção de camisetas
const prompt = require('prompt-sync')();

const camisetas = Number(prompt("Digite a quantidade de camisetas: "));

if (camisetas < 0) {
    console.log("Valor invalido");
} else if (camisetas <= 19) {
    console.log("Inicio");
} else if (camisetas <= 49) {
    console.log("Em andamento");
} else if (camisetas <= 99) {
    console.log("Quase la");
} else {
    console.log("Meta concluida");
}