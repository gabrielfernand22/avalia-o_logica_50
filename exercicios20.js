//Dias até o evento
const prompt = require('prompt-sync')();

const dias = Number(prompt("Digite quantos dias faltam: "));

if (dias < 0) {
    console.log("Evento encerrado");
} else if (dias === 0) {
    console.log("E hoje");
} else if (dias <= 7) {
    console.log("Esta semana");
} else {
    console.log("Ainda falta");
}