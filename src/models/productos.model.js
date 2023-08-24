// creamos el modelo de los productos.
const mongoose = require("mongoose")

const productoModelName = "producto" //el nombre del documento a crear
const productoModelSchema = new mongoose.Schema({ //el esquema que debería de tener
    name: String,
    price: Number
})
const productoModelCollection = "productos" //la coleccion en la que se guardaría

const productoModel = mongoose.model(productoModelName, productoModelSchema, productoModelCollection) //creamos el modelo con cada uno de las const definidas arriba.

module.exports = productoModel;