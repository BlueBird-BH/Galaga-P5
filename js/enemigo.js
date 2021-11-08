class Enemigo {
    constructor(posicionX, posicionY) {
        this.posicionX = posicionX;
        this.posicionY = posicionY;
        this.estaVivo = true;
    }

    crear() {
        image(spriteEnemigo, this.posicionX, this.posicionY);
    }

    moverse() {
        this.posicionY += 0.2;
    }

    fueImpactado(disparo) {
        if ((disparo.posicionX > this.posicionX) && (disparo.posicionX < this.posicionX + 40)) {
            if (disparo.posicionY <= this.posicionY + 40) {
                this.estaVivo = false;
                audioMuerteEnemigo.play();
                return true;
            }
        } else {
            return false;
        }
    }
}
