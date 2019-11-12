const robots = {
    endPoint: require('./robots/endPoint.bot'),
    input: require('./robots/input.bot')
}

function start() {
    const nameProject = "Cadastro";
    const nameService = robots.input();
    
    robots.endPoint(nameProject, nameService);
}

start();