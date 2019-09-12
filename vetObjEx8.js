function funcao() {
    var fim = false
    var estados = []
    var opcao = 0

    while (opcao != 5) {

        opcao = Number(prompt("1- Cadastrar estado\n2- Calcular indices\n3- Calcula percentual\n4- Calcula media\n5- Sair"))
        switch (opcao) {
            case 1:
                cadastraEstado(estados)
                break;
            case 2:
                calculaIndice(estados)
                break;
            case 3:
                calculaPercentual(estados)
                break;
            case 4:
                calculaMedia(estados)
                break;
        }



    }

}

function cadastraEstado(estados) {

    var estado = {};
    var existe = false
    var nome = prompt("Nome do estado")

    for (let index = 0; index < estados.length; index++) {
        if (estados[index].nome == nome) {
            existe = true
        }
    }

    if (nome === "") {
        alert("Entre com o nome do estado")
    } else if (existe) {
        alert("Estado já existe")
    }
    else {

        var veiculos = Number(prompt("Número de veículos que circularam no estado"))
        var acidentes = Number(prompt("Número de acidentes de trânsito no estado"))
        estado.nome = nome
        estado.veiculos = veiculos
        estado.acidentes = acidentes

        estados.push(estado)
    }

}

function calculaIndice(estados, fim) {

    var maior = { estado: "", valor: 0 }
    var menor = { estado: estados[0].nome, valor: (estados[0].acidentes / estados[0].veiculos) * 100 }

    estados.forEach(estado => {
        var veic = estado.veiculos
        var porc = 0
        if (estado.veiculos !== 0) {
            porc = (estado.acidentes / veic) * 100
        }
        if (porc > maior.valor) {
            maior.estado = estado.nome
            maior.valor = porc
        }
        if (porc < menor.valor) {
            menor.estado = estado.nome
            menor.valor = porc
        }
    });

    alert(`Mais acidentes: ${maior.estado} : ${maior.valor}% de carros acidentados\nMenos acidentes:  ${menor.estado}  :  ${menor.valor}% de carros acidentados`)

}

function calculaPercentual(estados) {
    var somaVeic = 0;

    estados.forEach(estado => {
        somaVeic += estado.veiculos
    });

    estados.forEach(estado => {
        estado.percentual = estado.veiculos / somaVeic * 100
    });

    var texto = ""
    estados.forEach(estado => {
        texto += "Estado: " + estado.nome + ": " + estado.percentual + "%\n"
    });
    alert("Percentuais de carros:\n" + texto)
}

function calculaMedia(estados) {
    var somaAcidentes = 0;

    estados.forEach(estado => {
        somaAcidentes += estado.acidentes
    });

    var media = somaAcidentes / estados.length
    alert("Media de acidentes: " + media)
}