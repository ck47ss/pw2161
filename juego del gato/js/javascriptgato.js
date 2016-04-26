var turno = false;
var letracasilla = "";
var cuentajuego=0;
var cuentajugadas=0;


function inicia_gato()
{
	//PREGUNTAR SI ES NAVEGADOR ES COMPATIBLE CON LOCALSTORAGE.
	if (typeof(Storage)!= "undefined") 
	{
		if (LOCALSTORAGE.webcuentajuego)
		 {
		 	cuentajuego=LOCALSTORAGE.webcuentajuego;
		 	cuentajuego=cuentajuego+1;
		 }
		 else
		 {
		 	cuentajuego+=1;
		 }
		 document.getElementById("titulojuego").innerHTML=
		 "Juego del Gato (#"+cuentajuego+")";
	}
	else
	alert.("utiliza un NAVEGADOR actualizado");
}


function escribe(casilla)
{
	var letra = "";
	letracasilla = document.getElementById(casilla).innerHTML;

	if (letracasilla!="X" && letracasilla!="O") 
	{
		if (turno==false) //if(turno)
		
			letra="X";

		
		else
		
			letra="O";
			document.getElementById(casilla).innerHTML = letra;
			turno= !turno; //TURNO = TRUE
		
	 }
		cuentajugadas=cuentajugadas+1;
		//PARA SABER QUIEN GANO, VALIDAMOS LA HYGADA
		validajugada(letra);
	
}

function validajugada(letra)
{
	var ganador=false;
	var b11.document,getElementById("unouno").innerHTML;
	var b12.document,getElementById("unodos").innerHTML;
	var b13.document,getElementById("unotres").innerHTML;
	var b21.document,getElementById("dosuno").innerHTML;
	var b22.document,getElementById("dosdos").innerHTML;
	var b23.document,getElementById("dostres").innerHTML;
	var b31.document,getElementById("tresuno").innerHTML;
	var b32.document,getElementById("tresdos").innerHTML;
	var b33.document,getElementById("trestres").innerHTML;
	
	//jugadas
	//RENGLONES
	if (b11==b12 &&  b12==b13 && b11!="&nbsp;") 
	ganador=true;

	if (b21==b22 &&  b22==b23 && b21!="&nbsp;") 
	ganador=true;

	if (b31==b32 &&  b32==b32 && b31!="&nbsp;") 
	ganador=true;

	//COLUMNAS

	if (b11==b12 &&  b12==b13 && b11!="&nbsp;") 
	ganador=true;

	if (b11==b12 &&  b12==b13 && b11!="&nbsp;") 
	ganador=true;

	if (b11==b12 &&  b12==b13 && b11!="&nbsp;") 
	ganador=true;

	//DIAGONALES

	if (b11==b12 &&  b12==b13 && b11!="&nbsp;") 
	ganador=true;

	if (b11==b12 &&  b12==b13 && b11!="&nbsp;") 
	ganador=true;

	if (b11==b12 &&  b12==b13 && b11!="&nbsp;") 
	ganador=true;



}
