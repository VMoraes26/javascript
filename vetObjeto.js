function funcao() {
    var vet = [];
    
    for (var i = 0; i < 5; i++) {
        var objeto = {};
        //Coloca os dados no objeto
        objeto.codigo = Number(prompt("Código"));
        objeto.nome = prompt("Nome");
        objeto.qtde = Number(prompt("Qtde"));
        objeto.preco = Number(prompt("Preço"));

        //Coloca o objeto no vetor
        vet.push(objeto);
    }
}