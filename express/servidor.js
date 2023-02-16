var express = require('express'); 
var app = express();

app.get("/", inicio);
function inicio(peticion, resultado)
{
    resultado.send("Este es el home")
}

app.get("/cursos", cursos);
function cursos(peticion, resultado)
{
    resultado.send("Estos son los cursos")
}

app.listen(8989);