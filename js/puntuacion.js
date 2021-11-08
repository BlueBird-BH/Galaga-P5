class Puntuacion {
	constructor() {
		this.puntuacion = 0;
	}

	agregarPuntos(valor) {
		this.puntuacion += valor;
	}

	mostrarPuntuacion() {
		stroke(gris);
		fill(negro);
		textFont(bitFont, 20);
		text("SCORE \n" + this.puntuacion, 30, 38);
	}
}