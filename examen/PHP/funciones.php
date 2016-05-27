<?php

$accion = $_POST["accion"];


/*
function guardaUsuario()
	{
	$idAlmacen= GetSQLValueString($_POST["idAlmacen"],"text");
	$Nombre= GetSQLValueString(($_POST["Nombre"]),"text");
	$Direccion1= GetSQLValueString(($_POST["Direccion1"]),"text");
	$Direccion2= GetSQLValueString(($_POST["Direccion2"]),"text");
	$CP= GetSQLValueString(($_POST["CP"]),"text");
	$Localidad= GetSQLValueString(($_POST["Localidad"]),"text");
	$Provincia= GetSQLValueString(($_POST["Provincia"]),"text");


	$respuesta=false;

		
	//CONECTAR AL SERVIDOR DE DB
	//SERVIDOR,USUARIO,CLAVE
	$conexion =mysql_connect("localhost","root","")

	//SELECCIONAR LA BD
	mysql_select_db("examen");

	//CONECTAR LA BD

		
		$guarda = sprintf("insert into almacenes values(%s,%s,%s,%s,%s,%s,%s)",$$idAlmacen,$Nombre,$Direccion1,$Direccion2,$CP,$Localidad,$Provincia);

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

*/
function cambios()
{
	
	$idAlmacen= GetSQLValueString($_POST["idAlmacen"],"text");
	$Nombre= GetSQLValueString(($_POST["Nombre"]),"text");
	/*
	$Direccion1= GetSQLValueString(($_POST["Direccion1"]),"text");
	$Direccion2= GetSQLValueString(($_POST["Direccion2"]),"text");
	$CP= GetSQLValueString(($_POST["CP"]),"text");
	$Localidad= GetSQLValueString(($_POST["Localidad"]),"text");
	$Provincia= GetSQLValueString(($_POST["Provincia"]),"text");
		*/

	$respuesta=false;
	


	//CONECTAR AL SERVIDOR DE DB
	//SERVIDOR,USUARIO,CLAVE
	$conexion =mysql_connect("localhost","root")

	//SELECCIONAR LA BD
	mysql_select_db("examen");

	//CONECTAR LA BD
	
	$guardar = sprintf("update almacenes set idAlmacen=%d ",$idAlmacen);
	
	/*
	$actualizar = sprintf("update almacenes set IdAlmacen,Nombre where idAlmacen,Nombre=%s limit 1 ",$usuario);
	$cambios = sprintf("update almacenes set IdAlmacen,Nombre",$IdAlmacen,$Nombre);
	*/
	
	$resultado = mysql_query($guardar);
	//PREGUNTAMOS SI SE TRAJO UN REGISTRO

	if (mysql_num_rows($resultado)>0) 

		$respuesta=true;
	$salidaJSON = array('respuesta' => $respuesta );
	//DEVOLVEMOS EL  RESULTADO  AL JS
	print json_encode($salidaJSON);
	

}

$accion=$_POST["accion"];
// MENU PRINICIPAL
switch ( $accion) {

	case 'cambios':
		cambios();
		break;

	
	default:
		# code...
		break;
}



?>