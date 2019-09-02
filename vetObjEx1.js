function funcao() {
    var opcao = 0;
    var vendedores = [];
    var vendas = [];


    while (opcao != 7) {
        opcao = Number(prompt(
            "Entre com o código da opção desejada\n\n" +
            "1 - Cadastrar vendedor\n" +
            "2 - Cadastrar venda\n" +
            "3 - Consultar as vendas de um funcionário\n" +
            "4 - Consultar o total de vendas do vendedor\n" +
            "5 - Consultar o código do vendedor que mais vendeu em determinado no mês\n" +
            "6 - Mostrar o número do mês com mais vendas\n" +
            "7 - Finalizar"
        ))

        if (opcao == 1) {
            let repetido = false;
            var vendedor = {};
            var codigo = prompt("Código do vendedor")
            vendedores.forEach(vendedor => {
                if (vendedor.cod == codigo) {
                    repetido = true
                    return
                }
            });
            if (repetido) {
                alert("Codigo já Cadastrado")
            } else {
                vendedor.cod = codigo
                vendedor.nome = prompt("Nome do vendedor")
                vendedores.push(vendedor)
            }
        }
        if (opcao == 2) {
            let repetido = false;
            var venda = {};
            vendedor = prompt("Código do vendedor")
            mes = prompt("Nome do mês")
            vendas.forEach(venda => {
                if (venda.vendedor == vendedor && venda.mes == mes) {
                    repetido = true;
                }
            })
            if (repetido) {
                alert("Venda já cadastrada")
            } else {
                venda.vendedor = vendedor
                venda.mes = mes
                venda.valor = Number(prompt("Valor das vendas do mês"))
                vendas.push(venda)
            }
        }
        if (opcao == 3) {
            vendedor = prompt("Código do vendedor")
            mes = prompt("Nome do mês")
            vendas.forEach(venda => {
                if (venda.vendedor == vendedor && venda.mes == mes) {
                    alert("Valor de vendas do mês: " + venda.valor + " reais")
                    return
                }
            })
        }
        if (opcao == 4) {
            vendedor = prompt("Código do vendedor")
            let total = 0
            vendas.forEach(venda => {
                if (venda.vendedor == vendedor) {
                    total += venda.valor
                }
            })
            alert("Total das vendas: " + total + " reais")
        }
        if (opcao == 5) {
            mes = prompt("Nome do mês")
            var vendedor = "";
            var maior = 0;
            vendas.forEach(venda => {
                if (venda.mes == mes) {
                    if (venda.valor > maior) {
                        vendedor = venda.vendedor
                    }
                }
            })
            alert("O vendedor que mais vendeu foi: " + vendedor)
        }
        if (opcao == 6) {
            var meses = [];
            var totais = []
            let existe = false;
            vendas.forEach(venda => {
                meses.forEach(mes => {
                    if (venda.mes === mes.nome) {
                        existe = true
                    }
                })
                if (!existe) {
                    var mes = {}
                    mes.nome = venda.mes
                    mes.total = 0
                    meses.push(mes)
                }
            })
            meses.forEach(mes => {
                vendas.forEach(venda => {
                    if (venda.mes === mes.nome) {
                        mes.total += venda.valor
                    }
                })
            })
            let maior = 0
            let mesMaior = "";
            meses.forEach(mes => {
                if (mes.total > maior) {
                    mesMaior = mes.nome
                }
            })
            alert("O mês com mais vendas foi: " + mesMaior)
        }

    }

}