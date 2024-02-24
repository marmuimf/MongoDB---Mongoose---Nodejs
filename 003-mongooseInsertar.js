//https://youtu.be/hMQVuVUQTmo


//comprobamos si esta instalado
var mongoose = require('mongoose');
// npm install mongoose

//conectamos con la base de datos (formateamos url)
const conexion = 'mongodb://127.0.0.1/menu'
//mongodb://localhost:27017

//especificar un esquema que corresponda con mi modelo de datos
const cafesSchema = new mongoose.Schema({
    nombre:String,
    ingredientes:String,
    mensaje:String,
})

//creo un elemento llamano cafes y le aplico el modelo de datos anterior
const cafes = mongoose.model("cafes",cafesSchema)

//creamos el objeto nuevo que queremos insertar
const NuevoCafe = new cafes({
    nombre:"Manchado",
    ingredientes:"leche",
    mensaje:"vegano",
})

//me conecto para INSERTAR 
mongoose.connect(conexion,{useNewUrlParser:true,useUnifiedTopology:true}).then(function(){
    console.log("conectado a mongo")
    NuevoCafe.save()
        .then(function(){
            console.log("Insertado")
        })
})
