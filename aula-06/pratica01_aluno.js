
let aluno = {
nome: "Ana",
idade: 25,
curso: "Programação Full Stack",
matriculado: false,
notaFinal: 7.5,
};


console.log(
  "\Nome:", aluno.nome,
  "\nIdade:", aluno.idade,
  "\nCurso:", aluno.curso,
  "\nMatriculado:", aluno.matriculado,
  "\nNota final:", aluno.notaFinal

);
console.log("==========================================")
aluno.idade = 18;
aluno.notaFinal = 8;
aluno.matriculado = true;

console.log(
  "\Nome:", aluno.nome,
  "\nIdade:", aluno.idade,
  "\nCurso:", aluno.curso,
  "\nMatriculado:", aluno.matriculado,
  "\nNota final:", aluno.notaFinal

);
