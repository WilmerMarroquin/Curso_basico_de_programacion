var borrar = document.getElementById("borrar");
var borrar= borrar.addEventListener("click", function()
{
    this.onclick=location.reload();
})

var canvas = document.getElementById("canvas");
var lienzo = canvas.getContext("2d");

var color = "black";
var lineas = 5;
var grosor = 1; 

function defcolor(c)
{
    color=c;
}

function defgrosor(g)
{
    grosor=parseInt(g);
}

function deflineas(l)
{
    lineas=parseInt(l);
}

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

var teclas= {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
}

var x_i=250;
var y_i=250;
var x_f;
var y_f;

document.addEventListener("keyup", dijujoTeclas);
function dijujoTeclas(evento)
{
    switch(evento.keyCode)
    {
        case teclas.UP:
            x_f=x_i;
            y_f=y_i-lineas;
            dibujar(color,grosor,x_i,y_i,x_f,y_f);
            x_i=x_f;
            y_i=y_f;
            break;

        case teclas.DOWN:
            x_f=x_i;
            y_f=y_i+lineas;
            dibujar(color,grosor,x_i,y_i,x_f,y_f);
            x_i=x_f;
            y_i=y_f;
            break;

        case teclas.RIGHT:
            x_f=x_i+lineas;;
            y_f=y_i;
            dibujar(color,grosor,x_i,y_i,x_f,y_f);
            x_i=x_f;
            y_i=y_f;
            break;

        case teclas.LEFT:
            x_f=x_i-lineas;
            y_f=y_i;
            dibujar(color,grosor,x_i,y_i,x_f,y_f);
            x_i=x_f;
            y_i=y_f;
            break;
    }
}