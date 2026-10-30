//Nível de ruído
const prompt = require('prompt-sync')();

const ruido = Number(prompt("Digite o nivel de ruido: "));

if (ruido < 40) {
    console.log("Silencioso");
} else if (ruido <= 70) {
    console.log("Moderado");
} else {
    console.log("Barulhento");
}