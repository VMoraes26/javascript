var input = require('fs').readFileSync('dev/stdin.txt', 'utf8');
var lines = input.split('\n');

try {
    var [x, y, m] = lines[4].split()
}
catch (e) {
    console.log(e)
}
