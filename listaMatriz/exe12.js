function principal() {

    // guarda os alunos
    var alunos = []
    // guarda as disciplinas
    var disc = []
    // entrada da qtde de provas
    var provas = []


    entradaAlunos(alunos)
    entradaDisc(disc, alunos, provas)


    item1(alunos, disc, provas)
    item2(alunos, disc, provas)

}

function entradaAlunos(alunos) {

    // guarda a qtde de alunos
    var qtdAlu = Number(prompt("Qts alunos"))

    // entrada dos alunos
    for (var i = 0; i < qtdAlu; i++) {
        var obj = {}
        obj.codigo = Number(prompt("Informe código do aluno"))
        obj.idade = Number(prompt("Informe idade do aluno"))
        alunos.push(obj)
    }
}

function entradaDisc(disc, alunos, provas) {

    // guarda a qtde de disciplinas
    var qtdDis = Number(prompt("Qts disciplinas"))

    // entrada das disciplinas
    for (var j = 0; j < qtdDis; j++) {
        disc.push(Number(prompt("Informe código da disciplina")))
    }

    for (var i = 0; i < alunos.length; i++) {
        provas[i] = [] // prepara uma linha da matriz
        for (var j = 0; j < qtdDis; j++) {
            provas[i][j] = Number(prompt(`Qtde provas: ${alunos[i].codigo} - ${disc[j]}`))
        }
    }
}

function item1(alunos, disc, provas) {
    // item 1
    var discProc = Number(prompt("Informe o código da disciplina"))
    var j = disc.indexOf(discProc)
    if (j == -1) {
        alert("Disciplina não existe")
    }
    else {
        var qtde = 0
        for (var i = 0; i < alunos.length; i++) {
            if (provas[i][j] > 2) {
                if ((alunos[i].idade >= 18) && (alunos[i].idade <= 25)) {
                    qtde++
                }
            }
        }
        alert(`Resposta do item 1  ${qtde}`)
    }
}

function item2(alunos, disc, provas) {
    // item 2
    var discProc = Number(prompt("Informe o código da disciplina"))
    // índice do vetor da disciplina procurada
    var j = disc.indexOf(discProc)
    // verifica se a disciplina existe
    if (j == -1) {
        alert("Disciplina não existe")
    }
    else {
        var resp = []
        for (var i = 0; i < alunos.length; i++) { // saio procurando
            if (provas[i][j] < 3) {
                resp.push(alunos[i].codigo)
            }
        }
        alert(resp)
    }
}