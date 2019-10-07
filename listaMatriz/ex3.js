
function funcao() {
    var matriz = []

    for (var i = 0; i < 6; i++) {
        matriz[i] = []
        for (var j = 0; j < 3; j++) {
            matriz[i][j] = Number(prompt("Entre com um numero inteiro"))
        }
    }

    var maior = { linha: 0, coluna: 0, valor: matriz[0][0] }
    var menor = { linha: 0, coluna: 0, valor: matriz[0][0] }

    for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 3; j++) {

            if (matriz[i][j] < menor.valor) {
                menor.valor = matriz[i][j]
                menor.linha = i
                menor.coluna = j
            }

            if (matriz[i][j] > maior.valor) {
                maior.valor = matriz[i][j]
                maior.linha = i
                maior.coluna = j
            }
        }
    }

    console.log(`Menor numero : ${menor.valor}, na linha ${menor.linha}, coluna ${menor.coluna}\nMaior numero : ${maior.valor}, na linha ${maior.linha}, coluna ${maior.coluna}`)
}