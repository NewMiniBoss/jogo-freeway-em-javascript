// Váriaveis do Ator
let xAtor = 90;
let yAtor = 375;
let comprimentoAtor = 25;
let alturaAtor = 25;

// Colisão
let colisao = false;

// Pontos
let meusPontos = 0;

function mostraAtor() {
    image(imagemDoAtor, xAtor, yAtor, comprimentoAtor, alturaAtor);
}

function movimentaAtor() {
    if (keyIsDown(UP_ARROW)) {
        yAtor -= 1.5;
    }
    if (keyIsDown(DOWN_ARROW)) {
        if (podeSeMover()) {
            yAtor += 1.5;
        }
    }
    if (keyIsDown(LEFT_ARROW)) {
        xAtor -= 1.5;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        xAtor += 1.5;
    }
}

function podeSeMover() {
    return yAtor < 370;
}

function verificaColisao() {
    //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
    for (let i = 0; i < imagemDosCarros.length; i += 1) {
        colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarros[0], alturaCarros[0], xAtor, yAtor, comprimentoAtor)
        if (colisao) {
            voltaPosicaoInicial();
            somDaColisao.play();
            if (pontosMaiorQueZero()) {
                meusPontos--;
            }
        }
    }
}

function pontosMaiorQueZero() {
    meusPontos > 0;
}

function voltaPosicaoInicial() {
    yAtor = 375;
}

function incluiPontos() {
    textAlign(CENTER);
    textSize(25);
    fill('#88as54')
    text(meusPontos, width / 5, 27);
}

function marcaPonto() {
    if (yAtor < 15) {
        voltaPosicaoInicial();
        meusPontos++;
        somDosPontos.play();
    }
}