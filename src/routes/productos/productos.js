// creamos los endpoint que tengan que ver con la url de "productos".
const express = require("express")
const router = express.Router()
const productosModel = require("../../models/productos.model")

router.get("/", async (req, res) => {
    const documentos = await productosModel.find()
    res.json(documentos)
})

// NO ANDA! esto está guardando el producto vacío en la BD
router.post("/", async (req, res) => {
    const { nombre, precio } = req.body;
    const document = { nombre, precio }
    try {
        const newProduct = new productosModel(document)
        await newProduct.save()
        res.status(200).json({
            message: "Documento insertado con exito",
            document
        })
    } catch (error) {
        res.status(500).json({error: "Algo salio mal"})
    }
})

router.get("/chau", (req, res) => {
    res.send("chau mundo")
})

module.exports = router