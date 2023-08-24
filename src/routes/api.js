// aca se unifican las ramas de la url con sus respectivas rutas con los endpoint.
const express = require("express")
const router = express.Router()
const productosRutas = require("./productos/productos")
const autosRutas = require("./autos")

router.use("/productos", productosRutas)
router.use("/autos", autosRutas)

module.exports = router