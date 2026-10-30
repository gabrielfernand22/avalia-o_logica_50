//Temperatura do forno
const prompt = require('prompt-sync')();

const temperatura = Number(prompt("Digite a temperatura do forno: "));

if (temperatura < 100) {
    console.log("Muito baixo");
} else if (temperatura < 180) {
    console.log("Aquecendo");
} else if (temperatura <= 220) {
    console.log("Ideal");
} else {
    console.log("Muito quente");
}