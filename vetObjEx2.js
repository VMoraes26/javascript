function funcao() {
    var vet = [];

    for (var i = 0; i < 3; i++) {
        var objeto = {};
        objeto.sexo = prompt("Sexo: M ou F");
        objeto.salario = Number(prompt("Salário"));
        objeto.idade = Number(prompt("Idade"));
        objeto.filhos = Number(prompt("Número de filhos"));
        vet.push(objeto);
    }

    var mediaSalarial = 0;
    var mediaFilhos = 0;
    var maiorSalario = 0;
    var mulheres = 0;
    var mSalarioMil = 0;
    for (var i = 0; i < vet.length; i++) {
        mediaSalarial += vet[i].salario;
        mediaFilhos += vet[i].filhos;
        if (vet[i].salario > maiorSalario) {
            maiorSalario = vet[i].salario;
        }
        if (vet[i].sexo == "F") {
            mulheres++
            if (vet[i].salario > 1000) {
                mSalarioMil++
            }
        }
    }

    mediaSalarial = mediaSalarial / vet.length
    mediaFilhos = mediaFilhos / vet.length

    alert("A média salarial é: " + mediaSalarial + "\nA média de filhos é: " + mediaFilhos + "\nO maior salário é de: "
     + maiorSalario + "\nA porcentagem de mulheres que ganham mais de 1000 reais é de: " + mSalarioMil * 100 / mulheres)
}