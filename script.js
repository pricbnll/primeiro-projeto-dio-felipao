
// ESTE TESTAR NO TERMINAL COM "node index.js"
 
let nome = "Pri";
let quantidadeExperiencia = 890000; 
let xp = "";

if (quantidadeExperiencia <= 1000) {
    xp = "Ferro";
} else if (quantidadeExperiencia >= 1001 && quantidadeExperiencia <= 2000) {
    xp = "Bronze";
} else if (quantidadeExperiencia >= 2001 && quantidadeExperiencia <= 5000) {
    xp = "Prata";
} else if (quantidadeExperiencia >= 5001 && quantidadeExperiencia <= 7000) {
    xp = "Ouro";
} else if (quantidadeExperiencia >= 7001 && quantidadeExperiencia <= 8000) {
    xp = "Platina";
} else if (quantidadeExperiencia >= 8001 && quantidadeExperiencia <= 9000) {
    xp  = "Ascendente";
} else if (quantidadeExperiencia >= 9001 && quantidadeExperiencia <= 10000) {
    xp = "Imortal";
} else if (quantidadeExperiencia >= 10001) {
    xp = "Radiante";
}

console.log("O herói de nome " + nome + "está no nível de "+ xp + "!");



// Swicth case não suporta expressão condicional

//let name = prompt("Digite seu nome, por favor!");
// let quantidadeExperiencia = prompt("Qual o seu nível de experiência?"); 
// let xp = "";

// switch (parseInt(quantidadeExperiencia)) {
//     case 1000:
//         xp = "Ferro";
//         break;
//     case 2000:
//         xp = "Bronze";
//         break;
//     case 5000:
//         xp = "Prata";
//         break;
//     case 9000:
//         xp  = "Ascendente";
//         break;
//     default:
//         xp = "Nível não reconhecido";
//         break;
// }

// alert(`O herói de nome ${name} está no nível de ${xp}`);

