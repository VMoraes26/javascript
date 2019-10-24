var input = require('fs').readFileSync('dev/stdin.txt', 'utf8');
var lines = input.split('\n');

while (true) {
    try {
        var [x, y, m] = lines[0].split()
        var i = 1
        for (i; i < m; i++) {

            var [x, y] = lines[i]
        }
    }
    catch (e) {
        return;
    }

}

