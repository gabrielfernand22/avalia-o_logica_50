// Pontuação da gincana
const prompt = require('prompt-sync')();
const pontos = Number(prompt("digite a pontuação"))
 if (pontos <0) {
    console.log("valor invalido")
 }else if (pontos <=24) {
    console.log ("iniciante")
 }else if (pontos <=49) {
console.log("intermediario")
 }else if (pontos <=74) {
    console.log("avancado")
 }else (pontos >75) 
    console.log("especialista")
 