let nome = "Rodrigo";

let nota1 = 33;
let nota2 = 86;

let frequencia = 75;

let atividadesEntregues = true;

let estaBloqueado = false;

let media = (nota1 + nota2) / 2;

let aprovado =
    media >= 6 &&
    frequencia >= 75 &&
    atividadesEntregues &&
    !estaBloqueado;

let aprovadoDestaque =
    media >= 9 &&
    frequencia >= 60 &&
    !estaBloqueado;

console.log("Nome: " + nome);
console.log("Média: " + media);
console.log("Frequência: " + frequencia);
console.log("Atividades entregues: " + atividadesEntregues);

if (aprovadoDestaque) {
    console.log("Situação final: Aprovado por destaque");
} else if (aprovado) {
    console.log("Situação final: Aprovado");
} else {
    console.log("Situação final: Reprovado");
}
