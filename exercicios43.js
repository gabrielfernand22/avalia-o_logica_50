//campeonato
const prompt = require('prompt-sync')();

const pontos = Number(prompt("Digite a pontuacao: "));

if (pontos >= 100) {
    console.log("Ouro");
} else if (pontos >= 80) {
    console.log("Prata");
} else if (pontos >= 60) {
    console.log("Bronze");
} else {
    console.log("Participacao");
}