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

// Variables
var partidaRecienCreada = true;
var listaEnemigos = [];
var disparosEnemigos = [];
var disparosJugador = [];
var jugador;

// Colores
var azul = "#1082c8"
var celeste ="#33b2ff"
var rojo = "#ec360f"
var naranja = "#f09811"

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

	for (var enemigo of listaEnemigos) {
		for (var disparo of disparosJugador) {
			if (enemigo.estaVivo) {
				if (enemigo.fueImpactado(disparo)) {
					indiceDisparo = disparosJugador.indexOf(disparo)
					disparosJugador.splice(indiceDisparo, 1);
				}
			}
		}
	}

	/*
	enemigo.disparar();
	activarDisparos(disparosEnemigos, rojo, naranja);
	*/

	jugador.crear();
	activarDisparos(disparosJugador, azul, celeste);
}

function activarDisparos(lista, color, aura) {
	fill(color);
	stroke(aura);
	lista.forEach(disparo => disparo.moverse());
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