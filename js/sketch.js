function preload() {
	imagen = "media/estrellas.jpg";
	espacioExterior = loadImage(imagen);
}

function setup() {
	createCanvas(700, 700);
}

function draw() {
	background(espacioExterior);
}
