//Arrays com os dados dos alunos
let nomes = ["Rodrigo", "Ana", "Carlos", "Julius", "Pedro"];
let notas = [8, 6, 4, 9, 7];
let frequencias = [80, 90, 70, 100, 75];
let soma = 0;

// Opção do menu
let opcao = 4;





switch (opcao) {
    case 1:
        // Lista todos os alunos
        for (let i = 0; i < nomes.length; i++) {
            console.log("Posição: " + i);
            console.log("Nomes: " + nomes[i]);
            console.log("Nota: " + notas[i]);
            console.log("Frequência: " + frequencias[i]);
            console.log("---------");
        }
        break;

    case 2:
        // Calcula a média da turma
        for (let i = 0; i < notas.length; i++) {
            soma = soma + notas[i];
        }
        let media = soma / notas.length;
        console.log("Média da turma: " + media);
        break;

    case 3:
         // Verifica a situação dos alunos
        for (let i = 0; i < nomes.length; i++) {
            let nota = notas[i];
            let frequencia = frequencias[i];

            if (nota >= 7 && frequencia >= 75) {
                console.log(nomes[i] + " - Aprovado");
            } else if (nota >= 5 && nota < 7 && frequencia >= 75) {
                console.log(nomes[i] + " - Recuperação");
            } else {
                console.log(nomes[i] + " - Reprovado");
            }
        }
        break;

    case 4:
         // Mostra um resumo da turma
        let Aprovados = 0;
        let Recuperacao = 0;
        let Reprovado = 0;
        for (let i = 0; i < nomes.length; i++) {
            let nota = notas[i];
            let frequencia = frequencias[i];

        if (nota >= 7 && frequencia >= 75){
            Aprovados++;
        } else if (nota >= 5 && nota < 7 && frequencia >= 75) {
            Recuperacao++;
        } else {
            Reprovado++;
        }
}
        console.log("Aprovados: " + Aprovados);
        console.log("Recuperação: " + Recuperacao);
        console.log("Reprovados: " + Reprovado);


        
        break;

    default:
        console.log("opcao inválida")
}







