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
app.get('/games', async (_req, res) => {
  const result = await knex('games')
  res.send(result)
})
app.post('/games', async (req, res) => {
  const {
    name,
    price,
    category
  } = req.body
  const game_id = await knex('games')
    .insert({
      name,
      price,
      category
    })
  res.status(201).send({ id: game_id })
})
app.put('/games/:id', async (req, res) => {
  const {
    id,
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
    .where('id', id)
  res.status(updated_records ? 204 : 404).end()
})
app.delete('/games/:id', async (req, res) => {
  const { id } = req.params
  await knex('games')
    .where('id', id)
    .del()
  res.status(204).end()
})
