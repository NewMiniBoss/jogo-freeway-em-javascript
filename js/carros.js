// Arrays
let yCarros = [35, 92, 145, 205, 258, 315];
let xCarros = [500, 500, 500, -50, -50, -50];
let velocidadeCarros = [2, 2.5, 3, 2.5, 3, 2];
let comprimentoCarros = [45, 45, 45, 45, 45, 45];
let alturaCarros = [45, 45, 45, 45, 45, 45];

function mostraCarro() {
    for (let i = 0; i < imagemDosCarros.length; i++) {
        image(imagemDosCarros[i], xCarros[i], yCarros[i],
            comprimentoCarros[i], alturaCarros[i]);
    }
}

function movimentaCarro() {
    for (let i = 0; i < imagemDosCarros.length; i++) {
        xCarros[i] -= velocidadeCarros[i];
    }
}

function voltaPosicaoInicialDoCarro() {
    for (let i = 0; i < imagemDosCarros.length; i++) {
        if (passouTodaTela(xCarros[i])) {
            xCarros[i] = 600;
        }
    }
}

function passouTodaTela(xCarros) {
    return xCarros < -50;
}