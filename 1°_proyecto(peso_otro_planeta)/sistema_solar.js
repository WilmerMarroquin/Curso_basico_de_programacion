var mercurio={
    nombre: "Mercurio",
    gravedad: 3.7
}
var venus={
    nombre: "Venus",
    gravedad: 8.87
}
var marte={
    nombre: "Marte",
    gravedad: 3.71
}
var jupiter={
    nombre: "Jupiter",
    gravedad: 24.79
}
var saturno={
    nombre: "Saturno",
    gravedad: 10.44
}
var urano={
    nombre: "Urano",
    gravedad: 8.87
}
var neptuno={
    nombre: "Neptuno",
    gravedad: 11.15
}
var pluton={
    nombre: "Pluton",
    gravedad: 0.62
}

var texto =document.getElementById("texto");
var boton =document.getElementById("go");
boton.addEventListener("click",calcular);

var g_tierra = 9.8;
var result;
var peso_t;
var planeta;

function calcular()
{
    planeta = document.getElementById("planeta").value;
    planeta =planeta.toLowerCase();
    peso_t = document.getElementById("peso").value;

    if (planeta == 1 ||planeta=="mercurio")
    {
        planeta = mercurio;
        peso_t=parseInt(peso_t);
        result = peso_t*planeta.gravedad/g_tierra
        result=result.toFixed(1);    
        texto.innerHTML="Tu peso en " + planeta.nombre + " es " + result + " Kg";
        console.log(peso_t);
        console.log(planeta);
        console.log(result);
    }
    else if (planeta == 2 ||planeta=="venus")
    {
        planeta = venus;
        peso_t=parseInt(peso_t);
        result = peso_t*planeta.gravedad/g_tierra
        result=result.toFixed(1);    
        texto.innerHTML="Tu peso en " + planeta.nombre + " es " + result + " Kg";
        console.log(peso_t);
        console.log(planeta);
        console.log(result);
    }
    else if (planeta == 3 ||planeta=="marte")
    {
        planeta = marte;
        peso_t=parseInt(peso_t);
        result = peso_t*planeta.gravedad/g_tierra
        result=result.toFixed(1);    
        texto.innerHTML="Tu peso en " + planeta.nombre + " es " + result + " Kg";
        console.log(peso_t);
        console.log(planeta);
        console.log(result);
    }
    else if (planeta == 4 ||planeta=="jupiter")
    {
        planeta = jupiter;
        peso_t=parseInt(peso_t);
        result = peso_t*planeta.gravedad/g_tierra
        result=result.toFixed(1);    
        texto.innerHTML="Tu peso en " + planeta.nombre + " es " + result + " Kg";
        console.log(peso_t);
        console.log(planeta);
        console.log(result);
    }
    else if (planeta == 5 ||planeta=="saturno")
    {
        planeta = saturno;
        peso_t=parseInt(peso_t);
        result = peso_t*planeta.gravedad/g_tierra
        result=result.toFixed(1);    
        texto.innerHTML="Tu peso en " + planeta.nombre + " es " + result + " Kg";
        console.log(peso_t);
        console.log(planeta);
        console.log(result);
    }
    else if (planeta == 6 ||planeta=="urano")
    {
        planeta = urano;
        peso_t=parseInt(peso_t);
        result = peso_t*planeta.gravedad/g_tierra
        result=result.toFixed(1);    
        texto.innerHTML="Tu peso en " + planeta.nombre + " es " + result + " Kg";
        console.log(peso_t);
        console.log(planeta);
        console.log(result);
    }
    else if (planeta == 7 ||planeta=="neptuno")
    {
        planeta = neptuno;
        peso_t=parseInt(peso_t);
        result = peso_t*planeta.gravedad/g_tierra
        result=result.toFixed(1);    
        texto.innerHTML="Tu peso en " + planeta.nombre + " es " + result + " Kg";
        console.log(peso_t);
        console.log(planeta);
        console.log(result);
    }
    else if (planeta == 8 ||planeta=="pluton")
    {
        planeta = pluton;
        peso_t=parseInt(peso_t);
        result = peso_t*planeta.gravedad/g_tierra
        result=result.toFixed(1);    
        texto.innerHTML="Tu peso en " + planeta.nombre + " es " + result + " Kg";
        console.log(peso_t);
        console.log(planeta);
        console.log(result);
    }
    else
    {
        texto.innerHTML="El planeta ingresado no existe";
    }
}
