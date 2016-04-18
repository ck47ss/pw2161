//variable global.
var operador = "";


function numeros(num)
{
	var valor= document.calculadora.operando1.value;
	if (operador== "" ) //ESCRIBIR EN EL OPERANDO 1
	{
		if (valor=="0")	//VACIAMOS LA CAJA
		 {
		 	document.calculadora.operando1.value;
		 	//CONCATENAR LOS VALORES DE NUM CON LOS DEL OPERANDO 1
		 	document.calculadora.operando1.value =
		 	document.calculadora.operando1.value+num;
		 }
		 else
		 {
		var valor= document.calculadora.operando2.value;
		if (operador== "" ) //ESCRIBIR EN EL OPERANDO 1
	{
		if (valor=="0")	//VACIAMOS LA CAJA
		 {
		 	document.calculadora.operando2.value;
		 	//CONCATENAR LOS VALORES DE NUM CON LOS DEL OPERANDO 1
		 	document.calculadora.operando2.value =
		 	document.calculadora.operando2.value+num;
		 }
	}

}

function borrar()
{
	operador="";
	document.calculadora.operando1.value=0;
	document.calculadora.operando2.value=0;
	document.calculadora.resultado.value=0;
}
function igual()
{
var valor1 = document.calculadora.operando1.value;
var valor2= document.calculadora.operando2.value;
document.calculadora.resultado.value=eval(valor1+operador+valor2)
/*
if (OPERANDO=='+') 
{
	resultado=operando1+operando2;
}

if (OPERANDO=='-') 
{
	resultado=operando1-operando2;
}

if (OPERANDO=='*') 
{
	resultado=operando1*operando2;
}

if (OPERANDO=='/') 
{
	resultado=operando1/operando2;
}

*/
}

function operadores(ope)
{
	operador=ope;

}