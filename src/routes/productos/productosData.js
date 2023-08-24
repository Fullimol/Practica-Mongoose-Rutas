const productosModel = require("../../models/productos.model")

const insert = (producto, callback) => {
    const nuevoProducto = new productosModel(producto)
    nuevoProducto.save()
        .then((datosGuardados) => callback(null, datosGuardados))
        .catch((error) => callback(error))
}

const listar = (callback) => {
    productosModel.find()
    .then(callback)
}

module.exports = {
    insert,
    listar
}