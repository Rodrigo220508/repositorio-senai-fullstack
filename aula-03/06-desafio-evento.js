let idade = 16;
let temIngresso = true;
let ehAlunoSENAI = true;
let horaChegada = 21;
let codigoIngresso = "PADRÃO"; // VIP, PADRAO ou MEIA

if (idade < 14) {
    console.log("Entrada negada");
} else {
    console.log("Entrada aprovada");
}

if (!temIngresso) {
    console.log("Precisa comprar ingresso")
} else {
    console.log("Ingresso válido")
}

if (!ehAlunoSENAI) {
    console.log("beneficío conquistado")
} else {
    console.log("beneficío inválido")
}

if (horaChegada > 20) {
    console.log("entrada encerrada")
} else {
    console.log("entrada liberada")
}


switch (codigoIngresso) {
    case "VIP":
        console.log("Entrada VIP");
        break;

    case "PADRÃO":
        console.log("Entrada PADRÃO / PISTA");
        break;

    case "MEIA":
        console.log("Meia entrada liberada");
        break;

    default:
        console.log("entrada inválida");
}