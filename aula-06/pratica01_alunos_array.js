// Array de objetos
let alunos = [
{ nome: "Ana", idade:18, curso: "Full Stack" },
{ nome: "Carlos", idade:22, curso: "Full Stack" }
];

//Percorrendo com for tradicional
for (let i = 0; i < alunos.length; i++) {
    console.log(alunos[i].nome)
}

//Percorrendo com forEach
alunos.forEach((aluno) => {
    console.log(aluno.nome);
});
