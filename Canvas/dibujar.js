var borrar = document.getElementById("borrar");
var borrar= borrar.addEventListener("click", function()
{
    this.onclick=location.reload();
})

var canvas = document.getElementById("canvas");
var lienzo = canvas.getContext("2d");

var c = document.getElementById("color");
var color = "#000000"
c.onchange=function(){
    color=c.value;
}

var t = document.getElementById("grosor")
var grosor = 1; 
t.onchange=function(){
    grosor=parseInt(t.value*0.025);
}

var l = document.getElementById("lineas");
var lineas = 50;
l.onchange=function(){
    lineas=parseInt(l.value);
}

var d = document.getElementById("go");
var go = d.addEventListener("click",dibujar_lineas);

function dibujar(colorsito,gross, x_in, y_in, x_fi, y_fi)
{
    lienzo.beginPath();
    lienzo.lineWidth = gross;
    lienzo.strokeStyle = colorsito;
    lienzo.moveTo(x_in, y_in);
    lienzo.lineTo(x_fi, y_fi);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujar_lineas()
{
    var cant = 0
    var ancho = canvas.width;
    var t_l=ancho/lineas;
    var x_i;
    var y_i;
    var x_f;
    var y_f;
    
    for (cant=0; cant<lineas; cant++)
    {
        x_f=cant*(t_l+ 1 );
        y_i=cant*t_l;
        dibujar(color,grosor,0,y_i,x_f,500);
    }

    for (cant=0; cant<lineas; cant++)
    {
        x_i=cant*t_l;
        y_f=500-(cant*(t_l +1));
        dibujar(color,grosor,x_i,500,500,y_f);
    }
    for (cant=0; cant<lineas; cant++)
    {
        x_i=cant*t_l;
        y_f=cant*(t_l +1);
        dibujar(color,grosor,x_i,0,500,y_f);
    }
    for (cant=0; cant<lineas; cant++)
    {
        x_f=cant*(t_l+1);
        y_i=500-(cant*t_l);
        dibujar(color,grosor,0,y_i,x_f,0);
    }
}