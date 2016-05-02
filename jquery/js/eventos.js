var inicio = function()
{

	var clicboton= function()
	 {
	 	console.log("CLICK DEL BOTON ");
	 	$(".anuncioweb").html("click  del boton ");
	 	$(".anuncioweb").append("click  del boton ");

	 }
	 var clicboton2= function()
	 {

	 	alert("BOTON  2");
	 }

	 var teclauninput = function(tecla)
	 {
	 	if(tecla.which == 13)
	 	{
	 	$("#otroinput").focus();
	 		//QUE SE POSICIONE EN OTRO INPUT
	 	}
	 	
	 }
	  // PREPARAR LOS EVENTOS
	//DE TODOS MIS OBJETOS
	 	$(".miboton").off("click",clicboton);
	 	$(".miboton").on("click",clicboton2);
	 	$("#uninput").on("keypress",teclauninput);

	
	
	$("#miboton").off("click",clicboton);
	// PREPARAR LOS EVENTOS
	//DE TODOS MIS OBJETOS
	$("#miboton").on("click",clicboton);

}
//MAIN
//$(document).on("ready",inicio);


	

//MAIN
$(document).on("ready",inicio);

