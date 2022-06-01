import Knex from 'knex';
const knex = Knex({
  client: 'mysql2',
  connection: {
    host: 'localhost',
    user: 'root',
    password: 'Lucas123963',
    database: 'crud'
  }
})
async function start() {
  await knex.schema.createTable('games', function (table) {
    table.increments()
    table.string('name')
    table.string('category')
    table.decimal('price')
  })
}
start()
  .finally(() => {
    knex.destroy()
  })