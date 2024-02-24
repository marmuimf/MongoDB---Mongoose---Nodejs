//https://youtu.be/hMQVuVUQTmo

//pulsar boton CONECTAR en Compass
//comprobamos que tenemos la libreria instalada
//npm install mongodb
var mongo = require ('mongodb');


//introduccion de comandos en el MONGOSH

//crear base de datos
use menu;

//crear colleccion
db.createCollection("cafes");

//INSERTAR registro con parametros JSON
db.cafes.insertOne({
    nombre:"Capuccino",
    ingredientes:"expreso, espuma de leche, cacao o canela",
    mensaje:"contiene leche"
});
//el ObjectId es como la clave primaria, es un id en forma de hash que el sistema le da automaticamente


//insertar muchos, varios JSON en un array
db.cafes.insertMany([
    {
    nombre:"Latte",
    ingredientes:"expreso, leche al vapor, leche espumosa",
    mensaje:"contiene leche",
},
    {
    nombre:"Capuccino V",
    ingredientes:"expreso, espuma de leche de soja, cacao o canela",
    mensaje:"veggie",
},
    {
    nombre:"Latte V",
    ingredientes:"expreso, leche de soja al vapor, leche espumosa",
    mensaje:"veggie",
}
]);

//ENCONTRAR
db.cafes.find(); //es como un SALECT all
db.cafes.findOne(); //muestra el primero
//encontrar con filtro/condicion
db.cafes.find({ingredientes:"expreso, leche al vapor, leche espumosa"});

//ACTUALIZAR
db.cafes.updateOne({ingredientes:"expreso, leche de soja al vapor, leche espumosa"},{$set:{mensaje:"vegano"}});
//no hace falta escribir el criterio de busqueda
db.cafes.updateMany({},{$set:{ mensaje:"vegano"}});

//ELIMINAR
db.cafes.deleteOne({ingredientes:"expreso, espuma de leche, cacao o canela"});
db.cafes.deleteMany({nombre:"Latte"});

