// creamos la funcion que conecta el mongoose a la base de datos (MongoDBcompass).
const mongoose = require("mongoose")

const conexion = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1/mipracticanode")
        console.log("conectado a la base de datos")
    } catch (error) {
        console.log(error)
    }
}

module.exports = conexion