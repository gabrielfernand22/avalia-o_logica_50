//reservatorio
const prompt = require('prompt-sync')();

const nivel = Number(prompt("Digite o nivel do reservatorio (%): "));

if (nivel < 0 || nivel > 100) {
    console.log("Invalido");
} else if (nivel <= 29) {
    console.log("Critico");
} else if (nivel <= 69) {
    console.log("Medio");
} else {
    console.log("Alto");
}