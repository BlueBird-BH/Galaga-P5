class Disparo {
    constructor(posicionX, posicionY, velocidad) {
        this.posicionX = posicionX;
        this.posicionY = posicionY;
        this.velocidad = velocidad;
    }

    crear() {
        rect(this.posicionX, this.posicionY, 5, 15);
    }

    moverse() {
        this.posicionY += this.velocidad;
        rect(this.posicionX, this.posicionY, 5, 15);
    }
}