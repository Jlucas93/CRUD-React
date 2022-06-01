const express = require('express')
const cors = require('cors')
const Knex = require('knex')
//
const knex = Knex({
  client: 'mysql2',
  connection: {
    host: 'localhost',
    user: 'root',
    password: 'Lucas123963',
    database: 'crud'
  }
})
const port = 3001
const app = express()
  .use(cors())
  .use(express.json())
app.listen(port, () => {
  console.log('Iniciado na porta', port)
})
// Games
app.get('/games', (_req, res) => {
  knex('games')
    .then(result => res.send(result))
    .catch(error => {
      console.error(error)
      res.status(500).end()
    })
})
app.post('/games', (req, res) => {
  const {
    name,
    price,
    category
  } = req.body
  knex('games')
    .insert({
      name,
      price,
      category
    })
    .then(([game_id]) => {
      res.status(201).send({ id: game_id })
    })
    .catch(error => {
      console.error(error)
      res.status(500).end()
    })
})
app.put('/games/:id', async (req, res) => {
  const {
    name,
    price,
    category
  } = req.body
  const updated_records = await knex('games')
    .update({
      name,
      price,
      category
    })
    .where('id', req.params.id)
  res.status(updated_records ? 204 : 404).end()
})
app.delete('/games/:id', async (req, res) => {
  const { id } = req.params
  const updated_records = await knex('games')
    .where('id', id)
    .del()
  res.status(updated_records ? 204 : 404).end()
})
