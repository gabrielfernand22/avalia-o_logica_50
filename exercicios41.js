//geladeira
const prompt = require('prompt-sync')();

const temperatura = Number(prompt("Digite a temperatura da geladeira: "));

if (temperatura < -2) {
    console.log("Muito fria");
} else if (temperatura <= 4) {
    console.log("Ideal");
} else {
    console.log("Quente");
}