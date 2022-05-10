const express = require('express');
const app = express();

app.listen(3031, () => {
    console.log('Iniciado em 3031')
})

app.get('/', (req, res) => {
    res.send("olá")
})