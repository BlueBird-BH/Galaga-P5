var centroX, centroY;

function preload() {
	imagen = "media/estrellas.jpg";
	espacioExterior = loadImage(imagen);
}

function setup() {
	createCanvas(700, 700);
	centroX = width / 2;
	centroY = height / 2;

	sol = new Planeta((aspecto = "#f5cd07"), (tamaño = 70), (orbita = 0));
}

function draw() {
	background(espacioExterior);

	sol.fijar();
}

class Planeta {
	constructor(aspecto, tamaño, orbita) {
		this.aspecto = aspecto;
		this.velocidad = 27 / (tamaño * orbita * 2);
		this.tamaño = tamaño;

		this.anguloInicial = 0;
		this.orbita = orbita;
		this.x = centroX;
		this.y = centroY;
	}

	angulo() {
		return (this.anguloInicial += this.velocidad);
	}

	fijar() {
		noStroke();
		fill(this.aspecto);
		ellipse(this.x, this.y, this.tamaño);
	}

	orbitar() {
		this.x = centroX + this.orbita * cos(this.angulo());
		this.y = centroX + this.orbita * sin(this.angulo());

		this.fijar();
	}
}