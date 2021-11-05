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

firstTime = true;
//Posición inicial del jugador
var x = 225;
//Color del jugador
var rojo = "#FF5733";
var enemies = [];
var disparos = [];
var player;
//Cargar el fondo
function preload() {
	imagen = "media/cielo.jpg";
	cielo = loadImage(imagen);
	imagen1 = "media/player.png";
	playerImg = loadImage(imagen1);
	imagen2 = "media/enemy.png";
	enemyImg = loadImage(imagen2);
}

function setup() {
	createCanvas(500, 500);
	player = new Player();
}

function draw() {
	background(cielo);

	//Pinta al jugador
	fill(rojo);

	//dibuja al jugador, tomando X en cada posición, si X cambia, el jugador se mueve.
	player.draw();
	player.reconocerInput();

	var enemigos (width, Y++){
		//Dibuja los enemigos la primera vez
		if (firstTime) {
			//Crea a los enemigos
			for (i = 40; i < width - 60; i += 50) {
				enemy = new Enemy(i = 20);
				enemy.draw();

				//introduce en el arreglo enemies, el enemigo creado en este for.
				append(enemies, enemy);
			}
			// Segunda linea de enemigos
			for (i = 40, 100; i < width - 60; i += 50, 50) {
				enemy = new Enemy(i, 70 + 50);
				enemy.draw();
				//introduce en el arreglo enemies, el enemigo creado en este for.
				append(enemies, enemy);
			}
			//Tercera linea 

			for (i = 40, 100; i < width - 60; i += 50, 50) {
				enemy = new Enemy(i, 120);
				enemy.draw();
				//introduce en el arreglo enemies, el enemigo creado en este for.
				append(enemies, enemy);
			}
		}

	}

	//Dibuja los enemigos el resto de veces.
	if (!firstTime) {
		for (i = 0; i < enemies.length; i++) {
			if (enemies[i].vive()) {
				enemies[i].draw();
			}
		}
	}



	firstTime = false;

	//hace avanzar verticalmente los disparos
	for (i = 0; i < disparos.length; i++) {
		disparos[i].avanza();
	}

	//Revisa constantemente si los enemigos han recibido disparos, en caso de ser así, quita al enemigo del mapa, y elimina al disparo.
	for (i = 0; i < enemies.length; i++) {
		for (j = 0; j < disparos.length; j++) {
			if (enemies[i].muere(disparos[j])) {
				disparos.splice(j, 1);
			}
		}
	}
}

function mouseClicked() {
	player.disparar();
}

class Player {
	constructor() {
		this.x = x;
	}

	draw() {
		image(playerImg, this.x, 425);
	}

	//reconoce el input, y mueve el jugador hacia el lado correspondiente
	reconocerInput() {
		if (keyIsDown(LEFT_ARROW)) {
			if (this.x > 0)
				this.x -= 3;
		}
		if (keyIsDown(RIGHT_ARROW)) {
			if (this.x + 64 < width)
				this.x += 3;
		}
	}

	//Crea el disparo
	disparar() {
		var disparo = new Disparo(this.x);
		append(disparos, disparo);
		print(this.x);
	}

	//devuelve la posición actual del jugador
	posicionX() {
		return this.x;
	}
}

class Enemy {
	constructor(posX, posY) {
		this.x = posX;
		this.y = posY;
		this.life = true;
	}

	draw() {
		image(enemyImg, this.x, this.y);
	}

	//Moverá al enemigo hacia abajo
	move() {
		this.y += 5;
	}

	//Calcula si el enemigo ha sido o no tocado por un disparo
	muere(disparo) {
		if (disparo.posicionX() > this.x && disparo.posicionX() < this.x + 40) {
			if (disparo.posicionY() <= this.y + 40) {
				this.life = false;
				return true;
			}
		}
		else {
			return false;
		}
	}

	vive() {
		return this.life;
	}

	posicionX() {
		return this.x;
	}

	posicionY() {
		return this.y;
	}
}

class Disparo {
	constructor(posX) {
		this.x = posX + 32;
		this.y = 425;
		this.velocidad = -5;
	}

	draw() {
		rect(this.x + 32, this.y, 5, 15);
	}

	avanza() {
		this.y += this.velocidad;
		if (this.velocidad <= -1)
			this.velocidad += 0.05;
		rect(this.x, this.y, 5, 15);
	}

	posicionX() {
		return this.x;
	}

	posicionY() {
		return this.y;
	}
}