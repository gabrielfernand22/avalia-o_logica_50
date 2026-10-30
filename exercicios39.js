//Troca de tempos
const prompt = require('prompt-sync')();

let A = Number(prompt("Digite o tempo A: "));
let B = Number(prompt("Digite o tempo B: "));

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

if (A >= 50 && B >= 50) {
    console.log("Ambos >= 50");
} else if (A >= 50 || B >= 50) {
    console.log("Pelo menos um >= 50");
} else {
    console.log("Ambos < 50");
}