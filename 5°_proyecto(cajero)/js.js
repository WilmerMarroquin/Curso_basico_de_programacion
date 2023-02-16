class Billete
{
    constructor(v,c)
    {
        this.valor = v;
        this.cantidad = c;
    }
}
var caja = [];
caja.push( new Billete (50,20) );
caja.push( new Billete (20,50) );
caja.push( new Billete (10,100) );
caja.push( new Billete (5,200) );
caja.push( new Billete (2,500) );
caja.push( new Billete (1,1000) );

var entregado = [];
var dinero=0;
var div = 0;
var papeles = 0;

var boton = document.getElementById("extraer");
boton.addEventListener("click", entregar_dinero);

var recargar = document.getElementById("reload");
recargar.addEventListener("click", function()
{
    window.location.reload();
});

var result = document.getElementById("txt");

var diners=document.getElementById("dinero_disponible");
var d_d=0;
for(var d of caja){
    d_d=d_d+d.valor*d.cantidad
}
diners.innerHTML="El dinero disponible es $"+d_d;

function entregar_dinero()
{

    
    var t = document.getElementById("diner");
    dinero = parseInt(t.value);

    for (var bi  of caja)
    {
        result.innerHTML="";
        if (dinero>0)
        {
            div=Math.floor(dinero/bi.valor);
            if (div > bi.cantidad)
            {
                papeles=bi.cantidad;
            }
            else
            {
                papeles=div;
            }
            entregado.push(new Billete(bi.valor,papeles));
            if (dinero< d_d)
            {
                bi.cantidad=bi.cantidad-papeles;
                d_d+=-(bi.valor*papeles);
                diners.innerHTML="El dinero disponible es $" + (d_d);
            } 
            dinero=dinero-(bi.valor*papeles);                       
        }            
    }
    if (dinero > 0)
    {
        result.innerHTML="No hay money"+"<br />";
    }
    else 
    {
        
        for ( var e of entregado)
        {
            if (e.cantidad > 0)
            {
                result.innerHTML= e.cantidad + " billetes de $" + e.valor +"<br/>"+result.innerHTML;
            }  
        }
    }
}
