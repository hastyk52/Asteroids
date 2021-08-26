const { Pool } = require('pg');

const poolConfig = {
  host: 'localhost',
  user: 'keanu',
  max: 10,
  database: 'asteroids',
  port: '5432',
  password: 'password',
};

const pool = new Pool(poolConfig);

pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

pool.on('aquire', (err, client) => {
  console.error('client checked out');
});

module.exports = pool;
