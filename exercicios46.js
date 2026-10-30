//gincana
const prompt = require('prompt-sync')();

const pontos = Number(prompt("Digite a pontuacao da gincana: "));

if (pontos < 20) {
    console.log("Iniciante");
} else if (pontos <= 49) {
    console.log("Intermediario");
} else if (pontos <= 79) {
    console.log("Avancado");
} else {
    console.log("Especialista");
}