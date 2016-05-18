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

	var altas = function()


	{
		//MOSTRAMOS EL FORMULARIO
		$("#altausuarios").show("slow");

	}

	var guardaUsuario = function()
	{
		$usuario= GetSQLValueString($_POST["txtnombreusuario"],"text");
		$clave= GetSQLValueString(md5($_POST["txtclave"]),"text");
		$tipo= GetSQLValueString(md5($_POST["txtipoususario"]),"text");
		$depto= GetSQLValueString(md5($_POST["txtdepartamento"]),"long");
		$respuesta=false;
		/

		//CONECTAR AL SERVIDOR DE DB
		//SERVIDOR,USUARIO,CLAVE
		$conexion =mysql_connect("localhost","root","");

		//SELECCIONAR LA BD
		mysql_select_db("usuarios");
		$guarda = sprintf("insert into usuarios values(%s,%s,%s,%d)",$usuario,$clave,$tipo,$depto);

		//EJECUTAMOS LA CONSULTA 
		mysql_query($guarda);
		//CUANTOS REGISTROS FUERON AFECTGADOS
		if (mysql_affected_rows()>0)
		 {
		 	$respuesta=true;
		 }
		 $salidaJSON = array('respuesta'=> $respuesta);
		 print json_encode($salidaJSON);
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

		//MOSTRAMOS EL FORMULARIO
	}

	$("#frmValidaEntrada").on("submit",validarEntrada);
	$("#btnaltas").on("submit",altas);
	$("btnaltausuario","click",altausuarios);

	

	
}
$(document).on("ready",iniciaApp);

