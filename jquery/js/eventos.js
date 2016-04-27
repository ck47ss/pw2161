var inicio = function()
{
	var clicboton= function()
	 {
	 	console.log("CLICK DEL BOTON ");
	 	$(".anuncioweb").html("Click  del boton ");
	 	$(".anuncioweb").append("Click  del boton ");

	 }
	// PREPARAR LOS EVENTOS
	//DE TODOS MIS OBJETOS
	$("#miboton").on("click",clicboton);
}
//MAIN
$(document).on("ready",inicio);
