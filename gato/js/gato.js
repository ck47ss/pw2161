var operador="";
var contador=0;
var par=0;
var impar=0;

function teclas(nombreId)
{

	/*
	if (contador%2==0)
	{
		document.getElementById(nombreId).value="X";
		par++;

	}

	else

	if (par!=0)
	{
	document.getElementById(nombreId).value="O";
	}
	console.log(nombreId);

	*/
}

function teclas(turno)
{
	
	document.getElementById(turno).value="0";
	document.getElementById(turno).value="X";
 	
}
