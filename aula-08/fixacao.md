- O que e um objeto em programacao?

**R: É algo do mundo real dentro do código.**
- O que e uma propriedade de um objeto? Cite um exemplo.

**R:uma propriedade é uma caracteristica ou informação que pertence ao objeto.**
**Se o objeto for um carro**
**ira ter: rodas:4, portas:4 e volante:1.**
- O que e um metodo? Qual a diferenca entre metodo e propriedade?

**R:um metodo é uma funcao que pertence a um objeto e representa uma acao que ele pode realizar. A diferenca é que o metodo executa uma acao e a propriedade guarda informacoes.**
- O que e uma classe?

**R:é um modelo usado para criar objetos.**
- Qual a diferenca entre classe e objeto?

**R: classe: é o modelo, objeto: é uma instancia criada a partir desse modelo.**
- Para que serve o constructor dentro de uma classe?

**R:serve para inicializar o objeto quando ele é criado.**
- O que significa a palavra this dentro de uma classe?

**R: significa "este objeto"**
- O que a palavra new faz ao criar um objeto?

**R:A palavra new cria um novo objeto a partir de uma classe e chama automaticamente o constructor.**
- Em TypeScript, por que usamos tipos como string, number e boolean?

**R: porque ela e tipada, isso signfica que ela tem que ser mais detalhada.**
- De um exemplo do mundo real que poderia virar uma classe em codigo e cite 3 propriedades e 1
metodo.

**R: Celular**


class Celular {
    marca: string;
    modelo: string;
    bateria: number;

    ligar() {
        console.log("celular ligado!");
    }
}