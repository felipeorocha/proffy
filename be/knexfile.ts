import path from 'path';

module.exports = {
  client: 'mysql',
  connection: {
    filename: path.resolve(__dirname, 'src', 'database', 'database.sql'),
    database: 'proffy',
    user: 'felipe',
    password: '',
    host: 'localhost',
    port: '3306'
  },
  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'migrations')
  },
  useNullAsDefault: true,
};
