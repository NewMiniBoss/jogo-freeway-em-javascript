// Imagens PNG
let imagenDaEstrada;
let imagemDoAtor;
let imagemDoCarro1;
let imagemDoCarro2;
let imagemDoCarro3;

// Váriaveis do Ator
let xAtor = 250;
let yAtor = 365;
let comprimentoAtor = 30;
let alturaAtor = 30;

// Váriaveis do Carro 1
let xCarro1 = 500;
let yCarro1 = 35;
let comprimentoCarro1 = 50;
let alturaCarro1 = 50;

function preload() {
    imagemDaEstrada = loadImage('imagens/estrada.png');
    imagemDoAtor = loadImage('imagens/ator-1.png');
    imagemDoCarro1 = loadImage('imagens/carro-1.png');
    imagemDoCarro2 = loadImage('imagens/carro-2.png');
    imagemDoCarro3 = loadImage('imagens/carro-3.png');
}

function setup() {
    createCanvas(500, 400);
}

function draw() {
    background(imagemDaEstrada);
    mostraAtor();
    mostraCarro1();
    movimentaAtor();
    movimentaCarro1();
}

function mostraAtor() {
    image(imagemDoAtor, xAtor, yAtor, comprimentoAtor, alturaAtor);
}

function mostraCarro1() {
    image(imagemDoCarro1, xCarro1, yCarro1, comprimentoCarro1, alturaCarro1);
}

function movimentaAtor() {
    if (keyIsDown(UP_ARROW)) {
        yAtor -= 1.5;
    }
    if (keyIsDown(DOWN_ARROW)) {
        yAtor += 1.5;
    }
    if (keyIsDown(LEFT_ARROW)) {
        xAtor -= 1.5;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        xAtor += 1.5;
    }
}

function movimentaCarro1() {
    xCarro1 -= 2;
}

