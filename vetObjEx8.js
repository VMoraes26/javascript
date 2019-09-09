function funcao() {
    var fim = false
    var estados = []

    while (!fim) {
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

        if (estados.length === 2) {

            var maior = { estado: "", valor: 0 }
            var menor = { estado: estados[0].nome, valor: (estados[0].acidentes / estados[0].veiculos) * 100 }
            var somaVeic = 0;
            var somaAcidentes = 0;


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

                somaVeic += estado.veiculos
                somaAcidentes += estado.acidentes
            });

            estados.forEach(estado => {
                estado.percentual = estado.veiculos / somaVeic * 100
            });

            var media = somaAcidentes / estados.length

            alert("Mais acidentes: " + maior.estado + " : " + maior.valor + "% de carros acidentados")
            alert("Menos acidentes: " + menor.estado + " : " + menor.valor + "% de carros acidentados")
            alert("Media de acidentes: " + media)
            var texto = ""
            estados.forEach(estado => {
                texto += "Estado: " + estado.nome + ": " + estado.percentual + "%\n"
            });
            alert("Percentuais de carro:\n" + texto)
            fim = true
        }
    }

}