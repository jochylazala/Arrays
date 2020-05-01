//numero aleatorio
var number = Math.round(Math.random()* 11);


//arreglo de imagenes
var images = ["cartas/bg_c2.gif",
		"cartas/bg_c3.gif",
		"cartas/bg_c4.gif",
		"cartas/bg_c5.gif",
		"cartas/bg_c6.gif",
		"cartas/bg_c7.gif",
		"cartas/bg_c8.gif",
		"cartas/bg_c9.gif",
		"cartas/bg_c10.gif",
		"cartas/bg_c11.gif",
		"cartas/bg_c12.gif",
		"cartas/bg_c13.gif"
	];

document.getElementById('cartas').src = images[number];
var imagen = document.getElementById("cartas");

console.log(imagen);

for(var i = 0; i < imagen.length; i++){
	imagen[i].setAttribute("x",500);
	imagen[i].setAttribute("y",250);
}
