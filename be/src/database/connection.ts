import knex from 'knex';
import path from 'path';

const db = knex({
  client: 'mysql',
  connection: {
    filename: path.resolve(__dirname, 'database.sql'),
    database: 'proffy',
    user: 'felipe',
    password: '',
    host: 'localhost',
    port: '3306'
  },
  useNullAsDefault: true,
});

export default db;
