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

	 	$.ajax({
	 		beforeSend:function(){
	 		console.log("Espere...");
	 		},
 		 url: 'https://randomuser.me/api/',
 		 dataType: 'json',
  		success: function(data){
  		console.log(data);
  			alert(data.results[0].name.first+
  				" "+data.results[0].name.last);
  		},
  		error:function(xhr,error,throws){
  			console.log("Ocurrio un Error ");
  		}
		});
    
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

