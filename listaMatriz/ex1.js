
function funcao() {
    var matriz = []

    for (var i = 0; i < 3; i++) {
        matriz[i] = []
        for (var j = 0; j < 5; j++) {
            matriz[i][j] = Number(prompt("Entre com um numero inteiro"))
        }
    }

    var qtd = 0

    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 5; j++) {
            if (matriz[i][j] > 15 && matriz[i][j] < 20) {
                qtd++
            }
        }
    }

    alert(`Qtd de elementos entre 15 e 20 : ${qtd}`)
}