function numeroAleatorio(nmax, nmin)
{
    var resultado= Math.floor(Math.random()*(nmax-nmin+1)+nmin);
    return resultado
}

var vp = document.getElementById("mapa");
var papel = vp.getContext("2d");

var fondo={
    url:"tile.png",
    cargaOk:false,
}
fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", function(){
    fondo.cargaOk = true;
    dibujar();
});

var vaca={
    url:"vaca.png",
    cargaOk:false,
}
vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", function(){
    vaca.cargaOk = true;
    dibujar();
});

var cerdo={
    url:"cerdo.png",
    cargaOk:false,
}
cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", function(){
    cerdo.cargaOk = true;
    dibujar();
});

var pollo={
    url:"pollo.png",
    cargaOk:false,
}
pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", function(){
    pollo.cargaOk = true;
    dibujar();
});

var perro={
    url:"perro.png",
    cargaOk:false,
}
perro.imagen = new Image();
perro.imagen.src = perro.url;
perro.imagen.addEventListener("load", function(){
    perro.cargaOk = true;
    dibujar();
});

var xv=[];
var yv=[];
var cv=  numeroAleatorio(0,5);
for(var i=0;i<cv;i++)
{
    xv.push(numeroAleatorio(0,420));
}
for(var i=0;i<cv;i++)
{
    yv.push(numeroAleatorio(0,420));
}

var xc=[];
var yc=[];
var cc=  numeroAleatorio(0,10);
for(var i=0;i<cc;i++)
{
    xc.push(numeroAleatorio(0,420));
}
for(var i=0;i<cc;i++)
{
    yc.push(numeroAleatorio(0,420));
}

var xp=[];
var yp=[];
var cp=  numeroAleatorio(0,20);
for(var i=0;i<cp;i++)
{
    xp.push(numeroAleatorio(0,420));
}
for(var i=0;i<cp;i++)
{
    yp.push(numeroAleatorio(0,420));
}

teclas={
    UP:38,
    DOWN:40,
    LEFT:37,
    RIGHT:39,
}

function dibujar()
{
    if(fondo.cargaOk==true)
    {
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if(vaca.cargaOk==true)
    {
        for(i=0;i<cv;i++)
        {
            papel.drawImage(vaca.imagen, xv[i], yv[i]);
        }
    }
    if(cerdo.cargaOk==true)
    {
        for(i=0;i<cc;i++)
        {
            papel.drawImage(cerdo.imagen, xc[i], yc[i]);
        }
    }
    if(pollo.cargaOk==true)
    {
        for(i=0;i<cp;i++)
        {
            papel.drawImage(pollo.imagen, xp[i], yp[i]);
        }
    }
    if(perro.cargaOk==true)
    {
        papel.drawImage(perro.imagen,xperro,yperro);    
    }   
}

xperro=420;
yperro=420;
mov=20;

document.addEventListener("keydown",mover);
function mover(evento)
{
    switch (evento.keyCode)
    {
        case teclas.UP:
            yperro = yperro - mov;
            dibujar();
            console.log(yperro);
            break;
        case teclas.DOWN:
            yperro = yperro + mov;
            dibujar();
            console.log(yperro);
            break;
        case teclas.LEFT:
            xperro = xperro - mov;
            dibujar();
            console.log(yperro);
            break;
            case teclas.RIGHT:
                xperro = xperro + mov;
                dibujar();
                console.log(yperro);
                break;
    }
}
