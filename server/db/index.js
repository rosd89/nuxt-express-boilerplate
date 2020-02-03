import knex from 'knex'

const {
  DB_NAME:database, DB_HOST:host = '0.0.0.0', DB_PORT:port = 3306,
  DB_USER: user, DB_PASS: password
} = process.env

export default knex({
  client: 'mysql2',
  connection: {
    host,
    port,
    database,
    user,
    password,
    timezone: 'UTC',
    pool: { min: 0, max: 5 }
  }
})
