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

function bajaUsuario()
{
	$usuario = GetSQLValueString($_POST["txtUsuario"],"text");
	mysql_connect("localhost","root");
	mysql_select_db("cursopw")
	//$baja = sprintf("delete from usuarios where usuario=%s",$usuario);
	$baja = sprintf("update usuarios set tipousuario='baja' where usuario=%s limit 1 ",$usuario);

	mysql_query($baja);
	if (mysql_affected_rows()>0) 
	{
 		$respuesta=true;
	}

	$salidaJSON = array('respuesta' => $respuesta);
	print(json_encode($salidaJSON);
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

function guardaUsuario()
	{
		$usuario= GetSQLValueString($_POST["txtnombreusuario"],"text");
		$clave= GetSQLValueString(md5($_POST["txtclave"]),"text");
		$tipo= GetSQLValueString(md5($_POST["txtipoususario"]),"text");
		$depto= GetSQLValueString(md5($_POST["txtdepartamento"]),"long");
		$respuesta=false;
		

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
function consultas()
{
	$respuesta=false;
	mysql_connect("localhost","root","");
	mysql_select_db("cursopw");
	$consulta= "select * from usuarios order by usuarios";
	$resultado =mysql_query($consulta);
	
	$tabla= "";
	if (mysql_num_rows(result)()>0) 
	{
		$respuesta=true;
		$tabla.="<tr>";
	 	$tabla.="<th>Usuario</th>";
		$tabla.="<th>Tipo Usuario"
		$tabla.="<th>Departamento</th>";
		$tabla.="</tr>"
		while($registro = mysql_fetch_array(resultado))
		{
			$tabla.="<tr>";
			$tabla.="<td>.$registro["usuario"].</td>";
			$tabla.="<td>.$registro["tipousuario"]";
			$tabla.="<td>.$registro["Departamento"]";
			$tabla.="</tr>";
		}
	}
	$salidaJSON =array('respuesta' =>$respuesta,'tabla' =>$tabla);

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
	case 'bajaUsuario':
		bajaUsuario();
		break;

	case 'consulta':
		consultas();
		break;
	
	default:
		# code...
		break;
}



?>