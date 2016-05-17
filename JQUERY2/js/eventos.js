var iniciaApp = function()
{
	var validarEntrada = function()
	{
		event.preventDefault();
		var usuario = $("#txtUsuario").val();
		var clave   = $("#txtClave").val();
		//Validaciones
		//1.- Que no sean vacíos
		if(usuario == "")
		{
			alert("El usuario no debe ser vacío");
			$("#txtUsuario").focus();
		}
		if(clave == "")
		{
			alert("La clave no debe ser vacía");
			$("#txtClave").focus();
		}
		//2.- VERIFICAR USUARIO Y CONTRASEÑA
			var parametros="accion=validarEntrada"+
							"&usuario="+usuario+
							"&clave="+clave+
							"&id="+Math.random();
		$.ajax({
			beforeSend:function(){
				console.log("VALIDAR AL USUARIO ");
			},
			cache: false,
			type: "POST",
			dataType: "json",
			url:"php/funciones.php",
			data:parametros, 
			success: function(response){
				if (response.respuesta==true) 
				{
					$("#datosusuario").hide();
					$("nav").show("slow");

				}
				else
				{
					alert("DATOS INCORRECTOS");
				}

			},
		
		error: function(xhr,ajaxOptionx,thrownError){
			console.log("ALGO SALIO MAL ");
		}

	 });
		console.log("Se disparo el submit");
		/*if(usuario=="pw" && clave=="1234"){
		 	//alert("BIENVENIDO "+usuario);
		 
		 	("#datosusuario").hide();// ESCONDEMOS
		 	
		 	//$("nav").show("slow"); // MOSTRAMOS

		 	//DAR ENTRADA AL USUARIO
		
		 }
		 else
		 	alert("USUARIO O CONTRASEÑA INCORRECTA ");
		console.log("Se disparó el submit");
	*/	
	}

	
	$("#frmValidaEntrada").on("submit",validarEntrada);
}
$(document).on("ready",iniciaApp);

