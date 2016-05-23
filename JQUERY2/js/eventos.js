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

	
	
	var Altausuarios = function()
	{
		event.preventDefault();
		alert($("#frmAltaUsuarios").serialize());
		var datos = $("#frmAltaUsuarios").serialize();
		var parametros ="accion=guardaUsuario&"+datos+"&id="+Math.random();

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
					alert("USUARIO REGISTRADO CORRECTAMENTE ");

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

		var altas = function()
		{
		//MOSTRAMOS EL FORMULARIO
		$("altausuarios").show("slow");
		$("altausuarios h2").html("alta usuarios");
		//ENCIENDO LA FUNCION DE ALTA USUARIO
		$("frmAltaUsuarios").on("submit",Altausuarios);
		//APAGO LA FUNCION DE BAJUSUARIO PARA EL MISMO BOTON
		$("frmAltaUsuarios").off("submit",Bajausuario);

		}

		var bajas = function()
		{	
			$("altausuarios").show("slow");
			$("altausuarios h2").html("baja usuarios");
			//APAGADO LA FUNCION DE ALTA USUARIO
			$("frmAltaUsuarios").on("submit",Bajausuario);
			//ENCIENDO LA FUNCION DE BAJUSUARIO PARA EL MISMO BOTON
			$("frmAltaUsuarios").off("submit",Bajausuario);
		}
		//MOSTRAMOS EL FORMULARIO
	}

	$("#frmValidaEntrada").on("submit",validarEntrada);
	$("#btnaltas").on("submit",altas);
	$("btnaltausuario","click",altausuarios);
	$("frmAltaUsuarios").on("submit",Altausuarios);
	$("#btnbajas").on("click",bajas);
	$("#btnconsultas").on("click",consultas);

	var consultas = function()
	{
		$("#consultausuarios").show("slow");
		var parametros = "accion=consultas"+
						 "&id="+Math.random();


		$.ajax({
			beforeSend:function(){
				console.log(" CONSULTAS USUARIOS ");
			},
			cache: false,
			type: "POST",
			dataType: "json",
			url:"php/funciones.php",
			data:parametros, 
			success: function(response){

			},
		
		error: function(xhr,ajaxOptionx,thrownError){
			console.log("AH OCURRIDO UN ERROR ");
			}

		});

	 }


	var Bajausuario = function()
	{
		event.preventDefault();

		//var datos = $("#frmAltaUsuarios").serialize();
		var datos ="txtUsuario=+$"("#txtUsuario").val();
		var parametros ="accion=BajaUsuario&"+datos+"&id="+Math.random();

		$.ajax({
			beforeSend:function(){
				console.log("Baja al usuario");
			},
			cache: false,
			type: "POST",
			dataType: "json",
			url:"php/funciones.php",
			data:parametros, 
			success: function(response){


				if (response.respuesta==true) 
				{
					alert("USUARIO DADO DE BAJA CORRECTAMENTE ");

				}
				else
				{
					alert("NO SE PUDO DAR DE BAJA LA INFORMACION");
				}

			},
		
		error: function(xhr,ajaxOptionx,thrownError){
			console.log("ALGO SALIO MAL ");
		}

	 });

	}

	
}
$(document).on("ready",iniciaApp);

