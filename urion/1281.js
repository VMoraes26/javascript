var input = require('fs').readFileSync('dev/stdinf.txt', 'utf8');
var lines = input.split('\n');

var entradas = lines[0]
for (var i = 1; i < parseInt(entradas); i++) {
    var disponiveis = lines[i]
    var pdisp = {}

    for (var j = 1; j <= parseInt(disponiveis); j++) {
        let [mercadoria, valor] = lines[j + i].split(' ')
        console.log(mercadoria)
        pdisp = {
            ...pdisp,
            [mercadoria]: parseFloat(valor.replace(',', '.'))
        }
    }

    console.log(pdisp)
    
    var comprados = lines[i + parseInt(disponiveis) + 1]
    console.log(comprados)

    for (var j = 1; j <= parseInt(disponiveis); j++) {
        let [mercadoria, valor] = lines[j + i].split(' ')
        console.log(mercadoria)
        pdisp = {
            ...pdisp,
            [mercadoria]: parseFloat(valor.replace(',', '.'))
        }
    }
}