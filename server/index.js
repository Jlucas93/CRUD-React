const express = require('express');
const app = express();
const mysql = require('mysql2')
const cors = require('cors');
const { application } = require('express');

const database = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Lucas123963",
    database: "crud"
})

app.listen(3001, () => {
    console.log('Iniciado')
})
app.use(cors())
app.use(express.json())

app.get('/games', (req, res) => {
    let SQL = 'SELECT * FROM games'

    database.query(SQL, (err, result) => {
        if (err) {
            console.log(err)
            return response.status(404).end()
        }
        res.send(result)
    })
})
app.put('/games/:id', (req, res) => {
    const {
        id,
        name,
        price,
        category
    } = req.body
    res.send(id, name, price, category)

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
