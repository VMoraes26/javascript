
function funcao() {
    var matriz = []
    var vet = []

    for (var i = 0; i < 15; i++) {
        vet.push(prompt("Nome"))
        matriz[i] = []
        for (var j = 0; j < 5; j++) {
            matriz[i][j] = Number(prompt("Informe a nota +" + j))
        }
    }

    var soma = 0


    for (var i = 0; i < 15; i++) {
        for (var j = 0; j < 5; j++) {
            soma += matriz[i][j]
        }
        if (soma / 5 >= 6) {
            alert(`Aluno ${vet[i]} foi aprovado com ${soma / 5}`)
        }
        else if (soma / 5 >= 3) {
            alert(`Aluno ${vet[i]} em exame com ${soma / 5}`)
        }
        else {
            alert(`Aluno ${vet[i]} foi reprovado com ${soma / 5}`)
        }
    }

}