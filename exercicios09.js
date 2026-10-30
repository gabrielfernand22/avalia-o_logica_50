//Tempo de estudo
const prompt = require('prompt-sync')();

const minutos = Number(prompt("Digite os minutos de estudo: "));

if (minutos < 30) {
    console.log("Pouco tempo");
} else if (minutos <= 59) {
    console.log("Bom inicio");
} else {
    console.log("Otima dedicacao");
}