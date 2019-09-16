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