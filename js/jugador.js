function mousePressed() {
    jugador.disparar();
}

class Jugador {
    constructor(posicionX) {
        this.posicionX = posicionX;
        this.posicionY = 420;
    }

    crear() {
        image(spriteJugador, this.posicionX, 420);
        this.reconocerInput();
    }

    reconocerInput() {
        if (keyIsDown(LEFT_ARROW)) {
            if (this.posicionX > 0)
                this.posicionX -= 3;
        }
        if (keyIsDown(RIGHT_ARROW)) {
            if (this.posicionX < 429)
                this.posicionX += 3;
        }
    }

    disparar() {
        var disparo = new Disparo(
                this.posicionX + 32.3,
                this.posicionY,
                -5
                );
        disparo.crear();
        disparosJugador.push(disparo);
        audioDisparoJugador.play();
    }
}