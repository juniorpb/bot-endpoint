const readline = require('readline-sync');

function robot() {
    return readline.question("nome do servico: ");
}

module.exports = robot