var txt =document.getElementById("txt");
var boton =document.getElementById("boton");
boton.addEventListener("click",convertir)

var v_dolar= 4515;
var result;
var dolares;

function convertir()
{
    dolares = document.getElementById("caja").value;
    dolares=parseInt(dolares);
    result = v_dolar*dolares
    result= result.toLocaleString("en-US");
    console.log(dolares);
    txt.innerHTML="El valor de 15 dolares es: $" + result;
}
