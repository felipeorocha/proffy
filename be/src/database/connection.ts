import knex from 'knex';
import path from 'path';

const db = knex({
  client: 'mysql',
  connection: {
    filename: path.resolve(__dirname, 'database.sql')
  },
  useNullAsDefault: true,
});

export default db;
