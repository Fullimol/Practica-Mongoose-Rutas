const express = require("express")
const app = express()
app.use(express.json()); // Middleware para analizar datos JSON en el cuerpo de la solicitud
const apiRutas = require("./src/routes/api")
const db = require("./src/db") // se importa la conexión de mongoose a la BD

db() //aca se ejecuta la conexion mencionada arriba.
app.use("/api", apiRutas) 

const PORT = 8080
app.listen(PORT, () => {
    console.log(`servidor iniciado en puerto ${PORT}`)
})