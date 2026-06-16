let peso = 71;

let altura = 1.80;

let IMC = peso / (altura * altura);
console.log (IMC);

let abaixoDoPeso = IMC < 18;5;

if (abaixoDoPeso) {
    console.log ("abaixo do peso")
} else if (IMC >18.5 && IMC <24.9){
    console.log ("peso normal")

} else if (IMC >25 && IMC <29.9){
    console.log ("sobre peso")

} else {
    console.log 
}