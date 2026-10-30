//troca de saldos
const prompt = require('prompt-sync')();

let A = Number(prompt("Digite o saldo A: "));
let B = Number(prompt("Digite o saldo B: "));

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

if (A < 0 || B < 0) {
    console.log("Algum saldo negativo");
} else {
    console.log("Saldos nao negativos");
}