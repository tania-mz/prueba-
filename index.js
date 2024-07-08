import express from 'express';

const app = express()

app.get("/" , (req, res) => {
    res.send ("Hola mundoooo")
})

app.listen (3000)

console.log ("Servidor levantado en el puerto 3000");