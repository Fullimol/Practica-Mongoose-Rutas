const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.send("Hola mundo soy AUTOS")
})

router.get("/chau", (req, res) => {
    res.send("chau mundo SOY AUTOS")
})

module.exports = router