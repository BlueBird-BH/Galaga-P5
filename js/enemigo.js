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

	disparar() {
		var disparo = new Disparo(
			this.posicionX + 18.2,
			this.posicionY,
			5
		);
		disparo.crear()
		disparosEnemigos.push(disparo);
		audioDisparoEnemigo.play();
	}

	fueImpactado(disparo) {
		if ((disparo.posicionX > this.posicionX) && (disparo.posicionX < this.posicionX + 40)) {
			if (disparo.posicionY <= this.posicionY + 40) {
				this.estaVivo = false;
				audioMuerteEnemigo.play()
				return true;
			}
		} else {
			return false;
		}
	}
}