//Volume do reservatório
const prompt = require('prompt-sync')();
const nivel = Number(prompt("Digite o nivel do reservatorio (%): "));
if (nivel < 0 || nivel > 100 ) {
    console.log("muito baixo")
}else if ( nivel < 19) {
    console.log("critico")
}else if (nivel <49) {
    console.log("baixo")
}else if (idade <79) {
    console.log("medio")
} else {
    console.log("alto")
}



