function vet1() {
    var mensagem = "Digite uma opção \n " +
        "1. Cadastrar vendedor \n 2. Cadastrar venda \n " +
        "3. Consultar vendas funcionário em um mês \n " +
        "4. Consulta total vendas de vendedor \n" +
        "5. Mostrar o número do vendedor que mais vendeu em um mês \n" +
        "6. Mostrar o número do mês com mais vendas \n" +
        "7. Sair ";
    var opcao;
    var vendas = []; var vendedores = []
    do {
        opcao = Number(prompt(mensagem))
        switch (opcao) {
            case 1: cadastraVendedor(vendedores);
                break;
            case 2: cadastraVenda(vendas, vendedores);
                break;
            case 3: consultaVendasMes(vendas, vendedores);
                break;
            case 4: consultaVendasVendedor(vendas, vendedores);
                break;
            case 5: vendedorMaisVendeu(vendas);
                break;
            case 6: mesMaisVendas(vendas);
                break;
            case 7: alert("Obrigado por usar o programa"); break;
            default: alert("Opção inválida");
        }
    }
    while (opcao != 7);
}

function cadastraVendedor(vendedores) {
    var objeto = {};
    objeto.codigo = Number(prompt("Código"))
    objeto.nome = prompt("Nome")
    vendedores.push(objeto)
}

function cadastraVenda(vendas, vendedores) {
    var objeto = {};
    var cola = colar(vendedores);
    objeto.codigo = Number(prompt("Código Funcionário \n" + cola))
    objeto.valor = Number(prompt("Valor"))
    objeto.mes = Number(prompt("Mês"))
    vendas.push(objeto)
}

function consultaVendasMes(vendas, vendedores) {
    var cola = colar(vendedores);
    var cod = Number(prompt("Código \n" + cola))
    var mes = Number(prompt("Mês"))
    for (var i = 0; i < vendas.length; i++) {
        if ((vendas[i].codigo == cod) &&
            (vendas[i].mes == mes)) {
            alert(vendas[i].valor)
            break;
        }
    }
    if (i == vendas.length) {// não achou
        alert("Venda não existe")
    }
}

function consultaVendasVendedor() {
    var cola = colar(vendedores);
    var cod = Number(prompt("Código " + "\n" + cola))
    var soma = 0;
    for (var i = 0; i < vendas.length; i++) {
        if (vendas[i].codigo == cod) {
            soma = soma + vendas[i].valor;
        }
    }
    alert("A soma das vendas é " + soma)
}

function vendedorMaisVendeu(vendas) {
    var mes = Number(prompt("Mês"))
    var maior = 0
    var codigo = 0
    for (var i = 0; i < vendas.length; i++) {
        if (vendas[i].mes == mes) {
            if (vendas[i].valor > maior) {
                maior = vendas[i].valor
                codigo = vendas[i].codigo
            }
        }
    }
    alert("Vendedor " + codigo)
}

function mesMaisVendas(vendas) {
    var meses = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    for (var i = 0; i < vendas.length; i++) {
        meses[vendas[i].mes - 1] = meses[vendas[i].mes - 1] +
            vendas[i].valor
    }
    var maior = 0; var mesMaior = 0
    for (var i = 0; i < meses.length; i++) {
        if (meses[i] > maior) {
            maior = meses[i]
            mesMaior = i + 1
        }
    }
    alert(mesMaior)
}

function colar(vendedores) {
    var cola = "";
    for (var i = 0; i < vendedores.length; i++) {
        cola = cola + vendedores[i].codigo + " " + vendedores[i].nome + "\n"
    }
    return cola;
}