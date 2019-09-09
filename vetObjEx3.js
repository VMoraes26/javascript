function funcao() {
    var vet = [];

    for (var i = 0; i < 3; i++) {
        var objeto = {};
        objeto.sexo = prompt("Sexo: M ou F");
        objeto.altura = Number(prompt("Altura"));
        objeto.idade = Number(prompt("Idade"));
        objeto.cor = prompt("Cor dos olhos: A - azuis, V - verdes, C - castanhos");
        vet.push(objeto);
    }

    var mediaIdade = 0;
    var qtd = 0;
    var maiorIdade = 0;
    var homens = 0;
    for (var i = 0; i < vet.length; i++) {
        mediaSalarial += vet[i].salario;
        mediaFilhos += vet[i].filhos;
        if (vet[i].idade > maiorIdade) {
            maiorIdade = vet[i].idade;
        }
        if (vet[i].cor == "C" && vet[i].altura > 1.6) {
            mediaIdade++
        }
        if ((vet[i].sexo == "F" && vet[i].idade > 19 && vet[i].idade < 46) || (vet[i].cor == "V" && vet[i].altura < 1.7)) {
            qtd++
        }
        if (vet[i].sexo == "M") {
            homens++
        }
    }

    mediaSalarial = mediaSalarial / vet.length
    mediaFilhos = mediaFilhos / vet.length

    alert("A média de idade é: " + mediaIdade + "\nA maior idade é: " + maiorIdade + "\nA quantidade é de: "
        + qtd + "\nA porcentagem de homens é de: " + homens * 100 / vet.length)
}