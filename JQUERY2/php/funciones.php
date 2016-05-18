<?php

$accion = $_POST["accion"];

function GetSQLValueString($theValue, $theType, $theDefinedValue = "", $theNotDefinedValue = "") 
{
  $theValue = get_magic_quotes_gpc() ? stripslashes($theValue) : $theValue;

  $theValue = function_exists("mysql_real_escape_string") ? mysql_real_escape_string($theValue) : mysql_escape_string($theValue);

  switch ($theType) {
    case "text":
      $theValue = ($theValue != "") ? "'" . $theValue . "'" : "NULL";
      break;    
    case "long":
    case "int":
      $theValue = ($theValue != "") ? intval($theValue) : "NULL";
      break;
    case "double":
      $theValue = ($theValue != "") ? "'" . doubleval($theValue) . "'" : "NULL";
      break;
    case "date":
      $theValue = ($theValue != "") ? "'" . $theValue . "'" : "NULL";
      break;
    case "defined":
      $theValue = ($theValue != "") ? $theDefinedValue : $theNotDefinedValue;
      break;
  }
  return $theValue;
}


function validaentrada()
{
	$usuario= GetSQLValueString($_POST["usuario"],"text");
	$clave= GetSQLValueString(md5($_POST["clave"]),"text");
	$respuesta=false;

	//CONECTAR AL SERVIDOR DE DB
	//SERVIDOR,USUARIO,CLAVE
	$conexion =mysql_connect("localhost","root","");

	//SELECCIONAR LA BD
	mysql_select_db("usuarios");
	$validar = sprintf("select usuario,clave from usuarios where usuario=%s and clave=%s limit 1",$usuario,$clave);
	
	$resultado = mysql_query($validar);
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
	case 'validarEntrada':
		validaentrada();
		break;
	case 'guardaUsuario':
		guardaUsuario();
		break;
	
	default:
		# code...
		break;
}



?>