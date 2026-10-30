//Distância da caminhada
const prompt = require('prompt-sync')();

const km = Number(prompt("Digite os quilometros percorridos: "));

if (km < 2) {
    console.log("Curta");
} else if (km < 5) {
    console.log("Media");
} else if (km < 10) {
    console.log("Longa");
} else {
    console.log("Muito longa");
}