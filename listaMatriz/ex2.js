
function funcao() {
    var matriz = []

    for (var i = 0; i < 2; i++) {
        matriz[i] = []
        for (var j = 0; j < 4; j++) {
            matriz[i][j] = Number(prompt("Entre com um numero inteiro"))
        }
    }

    var qtd = []
    var pares = 0
    var qtdPares = 0
    for (var i = 0; i < 2; i++) {
        qtd[i] = 0
        for (var j = 0; j < 4; j++) {
            console.log(matriz[i][j])
            
            if (matriz[i][j] > 12 && matriz[i][j] < 20) {
                qtd[i]++
            }
            if (matriz[i][j] % 2 == 0) {
                pares = matriz[i][j]
                qtdPares++
            }
        }
    }

    alert(`Qtd de elementos entre 12 e 20 por linha : ${qtd}\nMédia dos pares ${pares / qtdPares}`)
}