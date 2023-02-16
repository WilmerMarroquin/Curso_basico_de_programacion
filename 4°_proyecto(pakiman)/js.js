class pakiman
{
    constructor(n, t, v, a, d)
    {
        this.imagen = new Image();
        this.nombre = n;
        this.tipo = t;
        this.vida =  v;
        this.ataque = a;
        this.defensa = d;
        this.imagen.src = imagenes[this.nombre];
    }
    hablar()
    {
        document.write(this.nombre);
    }
    mostrar()
    {
        document.body.appendChild(this.imagen);
        document.write("<p>");
        document.write("<strong>" + this.nombre + "</strong>"+"<br/>");
        document.write("Tipo: " + this.tipo + "<br/>");
        document.write("Vida: " + this.vida + "<br/>");
        document.write("Ataque: " + this.ataque + "<br/>");
        document.write("Defensa: " + this.defensa + "<hr/>");
        document.write("</p>");
    }
}
var imagenes=[]
imagenes["lechin"] = "lechin.png";
imagenes["mrDog"] = "mrDog.png";
imagenes["pachin"] = "pachin.png";
imagenes["tocinauro"] = "tocinauro.png";

var coleccion=[]
coleccion.push(new pakiman("lechin","agua",800,600,750));
coleccion.push(new pakiman("mrDog","fisicoa",600,900,600));
coleccion.push(new pakiman("pachin","aire",500,950,500));
coleccion.push(new pakiman("tocinauro","tierra",700,600,700));

for(p of coleccion)
{
    p.mostrar();
}
