class Aluno {
  nome: string;
  nota1: number;
  nota2: number;

  constructor(nome: string, nota1: number, nota2: number) {
    this.nome = nome;
    this.nota1 = nota1;
    this.nota2 = nota2;
  }

  calcularMedia(): number {
    return (this.nota1 + this.nota2) / 2;
  }

  verificarSituacao(): string {
    if (this.calcularMedia() >= 6) {
      return "Aprovado";
    } else {
      return "Reprovado";
    }
  }

  exibirInformacoes(): void {
    console.log(`Nome: ${this.nome}`);
    console.log(`Média: ${this.calcularMedia()}`);
    console.log(`Situação: ${this.verificarSituacao()}`);
    console.log("------------------------");
  }
}


const aluno1 = new Aluno("João", 8, 7);
const aluno2 = new Aluno("Maria", 5, 4);
const aluno3 = new Aluno("Pedro", 9, 6);


const alunos: Aluno[] = [aluno1, aluno2, aluno3];

 
for (const aluno of alunos) {
  aluno.exibirInformacoes();
}