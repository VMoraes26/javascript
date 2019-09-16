function lista() {
    var ex = -1
    while (ex != 0) {
        ex = Number(prompt("Entre com o numero do exercicio ou nada para finalizar"))
        switch (ex) {
            case 0:
                alert("Finalizado")
                break;
            case 1:
                let num = Number(prompt("Entre com um numero inteiro positivo"))
                ex1(num)
                break;
            case 2:
                let horas = Number(prompt("Entre com as horas"))
                let minutos = Number(prompt("Entre com os minutos"))
                let segundos = Number(prompt("Entre com os segundos"))
                ex2(horas, minutos, segundos)
                break;
            case 3:
                var caracteres = [];
                for (var i = 0; i < 5; i++) {
                    caracteres.push(prompt("Entre com um caracter"))
                }
                ex3(caracteres)
                break;
            case 4:
                let raio = Number(prompt("Entre com a raio da esfera em metros"))
                ex4(raio)
                break;
            case 5:
                let num2 = Number(prompt("Entre com um numero inteiro"))
                ex5(num2)
                break;


            case 15:
                let numeros = [];
                for (var i = 0; i < 15; i++) {
                    numeros.push(Number(prompt("Entre com números inteiros")))
                }
                ex15(numeros)
                break;
            case 16:
                let numerosReais = [];
                for (var i = 0; i < 20; i++) {
                    numerosReais.push(Number(prompt("Entre com números reais (com ponto)")))
                }
                ex16(numerosReais)
                break;
            case 17:
                let numerosInteiros = [];
                for (var i = 0; i < 25; i++) {
                    numerosInteiros.push(Number(prompt("Entre com números inteiros negativos ou positivos")))
                }
                ex17(numerosInteiros)
                break;
            case 18:
                ex18()
                break;
            case 19:
                let vet1 = [];
                let vet2 = [];
                for (var i = 0; i < 10; i++) {
                    vet1.push(Number(prompt("Entre com um número inteiros para o primerio vetor")))
                }
                for (var i = 0; i < 10; i++) {
                    vet2.push(Number(prompt("Entre com um número inteiros para o segundo vetor")))
                }
                ex19(vet1, vet2)
                break;
            case 20:
                ex20(num2)
                break;
            default:
                alert("Exercicio não existe")
                break;
        }
    }
}

function ex1(num) {
    if (num < 0) {
        alert("Número não é inteiro")
    } else {
        var soma = 0
        for (var i = 1; i < num - 1; i++) {
            soma = soma + num - i
        }
        alert(`Soma dos numeros entre 1 e ${num} = ${soma}`)
    }
}

function ex2(horas, minutos, segundos) {
    var segundosTotais = segundos + minutos * 60 + horas * 60 * 60
    alert(`Total de segundos ${segundosTotais}`)
}

function ex3(caracteres) {
    var igual = caracteres[0]
    for (var i = 0; i < caracteres.length; i++) {
        if (caracteres[i] != igual) {
            alert(`Caracter diferente no index ${i}`)
            return
        }
    }
}
function ex4(raio) {
    var volume = 4 / 3 * 3.14 * raio ** 3
    alert(`O volume da esfera é: ${volume.toFixed(2)} metros`)
}

function ex5(num) {
    if (num < 0) {
        alert("O número é negativo")
    } else {
        alert("O número é positivo")
    }
}



function ex15(numeros) {
    var qtd = 0
    numeros.forEach(numero => {
        if (numero % 2 == 0) {
            qtd++
        }
    })
    alert(`Quantidade de números pares: ${qtd}`)
}

function ex16(numerosReais) {
    var soma = 0
    numerosReais.forEach(numero => {
        soma += numero
    })
    alert(`Soma dos números: ${soma}`)
}

function ex17(numerosInteiros) {
    numerosInteiros.forEach(numero => {
        if (numero < 0) {
            numero = 0
        }
    })
    alert(`Vetor sem números negativos: ${numerosInteiros}`)
}

function ex18() {
    let num = 100
    let count = 0
    var vet = []
    while (count < 10) {
        num++
        let divisao = false

        for (var i = 2; i <= num / 2; i++) {
            if (num % i == 0) {
                divisao = true
            }
        }

        if (!divisao) {
            vet.push(num)
            count++
        }
    }
    alert("10 números primos\n" + vet)

}

function ex19(vet1, vet2) {
    var vetIntersec = []
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            if (vet1[i] == vet2[j]) {
                vetIntersec.push(vet1[i])
            }
        }
    }
    alert("Vetor intersecção: " + vetIntersec)
}

function ex20(num) {
}