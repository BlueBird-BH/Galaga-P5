/*
Autores:
	- Yeisson Pinilla
	- Edward Mendez
	- Alejandro Buelvas
Proyecto para la clase de 
	Programación Creativa
2021
Universidad de La Sabana
*/

var partidaRecienCreada = true;
var listaEnemigos = [];
var disparosEnemigos = [];
var disparosJugador = [];
var jugador;

function preload() {
	imagenCielo = loadImage("media/cielo.jpg");
	spriteJugador = loadImage("media/jugador.png");
	spriteEnemigo = loadImage("media/enemigo.png");
}

function setup() {
	createCanvas(500, 500);
	jugador = new Jugador(225);
}

function draw() {
	background(imagenCielo);

	if (partidaRecienCreada) {
		crearHileraEnemigos(20);
		crearHileraEnemigos(120);
		crearHileraEnemigos(220);
		partidaRecienCreada = false;
	} else {
		enemigosVivos = listaEnemigos.filter(enemigo => enemigo.estaVivo)
		enemigosVivos.forEach(enemigo => enemigo.crear())
	}

	jugador.crear();
	disparosJugador.forEach(disparo => disparo.moverse());
}

function crearHileraEnemigos(posicionY) {
	for (posicionX = 40; posicionX < width - 60; posicionX += 50) {
		enemigo = new Enemigo(posicionX, posicionY);
		enemigo.crear();

		listaEnemigos.push(enemigo);
	}
}

function mousePressed() {
	jugador.disparar();
	console.log(jugador.posicionX);
}

class Jugador {
	constructor(posicionX) {
		this.posicionX = posicionX;
		this.posicionY = 420;
	}

	crear() {
		image(spriteJugador, this.posicionX, 420);
		this.reconocerInput()
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
			-5,
			"#33b2ff",
			"#1082c8"
		);
		disparo.crear()
		disparosJugador.push(disparo);
	}
}

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
		this.posicionY += 5;
	}
	
	disparar() {
		var disparoEnemigo = new Disparo(
			this.posicionX + 18.2,
			this.posicionY,
			5,
			"#ec360f",
			"#f09811"
		);
		disparoEnemigo.crear()
		disparosEnemigos.push(disparoEnemigo);
	}

	recibioDisparo(disparo) {
		if ((disparo.posicionX > this.posicionX) && (disparo.posicionX < this.posicionX + 40)) {
			if (disparo.posicionY <= this.posicionY + 40) {
				this.estaVivo = false;
				return true;
			}
		} else {
			return false;
		}
	}
}

class Disparo {
	constructor(posicionX, posicionY, velocidad, color, aura) {
		this.posicionX = posicionX;
		this.posicionY = posicionY;
		this.velocidad = velocidad;
		this.color = color;
		this.aura = aura;
	}

	crear() {
		stroke(this.aura);
		fill(this.color);
		rect(this.posicionX, this.posicionY, 5, 15);
	}

	moverse() {
		this.posicionY += this.velocidad;
		rect(this.posicionX, this.posicionY, 5, 15);
	}
}