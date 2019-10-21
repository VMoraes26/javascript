
function funcao() {
    var alunos = []
    var disc = []

    var qtdAlunos = Number(prompt("Qtde de alunos"))
    var qtdDisciplinas = Number(prompt("Qtde de disciplinas"))

    for (var i = 0; i < qtdAlunos; i++) {
        var obj = {}
        obj.codigo = Number(prompt("Informe o codigo do aluno"))
        obj.idade = Number(prompt("Informe a idade do aluno"))
        alunos.push(obj)
    }

    for (var i = 0; i < qtdAlunos; i++) {
        disc.push(Number(prompt("Informe o código da disciplina")))
    }


    var provas = []
    for (var i = 0; i < qtdAlunos; i++) {
        provas[i] = []
        for (var j = 0; j < qtdDisciplinas; j++) {
            provas[i][j] = Number(prompt(`Qtde de provas: ${alunos[i].codigo} - ${disc[j]}`))
        }
    }

    var discProc = Number(prompt("Informe o codigo da disciplina"))
    var posDisc = disc.indexOf(discProc)
    if (posDisc == -1) {
        alert("Disciplina não existe")
    }
    else {
        var resp = []
        for (var i = 0; i < qtdAlunos; i++) {
            if (provas[i][posDisc] < 3) {
                resp.push(alunos[i].codigo)
            }
        }
        alert(resp)
    }
}