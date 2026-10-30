//troca de pontos
const prompt = require('prompt-sync')();

let A = Number(prompt("Digite os pontos A: "));
let B = Number(prompt("Digite os pontos B: "));

console.log("Antes da troca: A=" + A + ", B=" + B);

let auxiliar = A;
A = B;
B = auxiliar;

console.log("Depois da troca: A=" + A + ", B=" + B);

if (A > B) {
    console.log("A maior");
} else if (B > A) {
    console.log("B maior");
} else {
    console.log("Iguais");
}

if (A >= 20 && B >= 20) {
    console.log("Ambos >= 20");
} else {
    console.log("Nem ambos >= 20");
}