const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'shahriarakash',
  password: '1234',
  host: 'localhost',
  port: 5432,
  database: 'chat',
})

module.exports = pool;