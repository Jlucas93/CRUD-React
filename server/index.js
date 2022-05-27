const express = require('express');
const app = express();
const mysql = require('mysql2')
const cors = require('cors');

const port = 3001
const database = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Lucas123963",
    database: "crud"
})
app.get('/', function (req, res) {
    res.send("Servidor Rodando")
})
app.listen(port, () => {
    console.log('Iniciado na porta ' + port)
})
app.use(cors())
app.use(express.json())

app.get('/games', (req, res) => {
    let SQL = 'SELECT * FROM games'

    database.query(SQL, (err, result) => {
        if (err) {
            console.log(err)
            return res.status(404).end()
        }
        res.send(result)
    })
})
app.post('/games', (req, res) => {
    const { name } = req.body;
    const { price } = req.body;
    const { category } = req.body;

    let SQL = "INSERT INTO games( name, price, category ) VALUES(?,?,?)"

    database.query(SQL, [name, price, category], (err, result) => {
        console.log(err)
    })
})

app.put('/games/:id', (req, res) => {
    const {
        id,
        name,
        price,
        category
    } = req.body
    let SQL = "UPDATE games SET name = ?,price = ?, category = ? WHERE idgames = ?";

    database.query(SQL, (err, result) => {
        if (err) {
            console.log(err)
            return res.status(500).end()
        }
        res.send(result)
    })

})

app.delete('/games/:id', (req, res) => {
    const { id } = req.params

    let SQL = "DELETE FROM games WHERE idgames = ?"
    database.query(SQL, [id], (err, result) => {
        if (err) {
            console.log(err)
        }
        res.send(result)
    })

})
