import path from 'path';

module.exports = {
  client: 'mysql',
  connection: {
    filename: path.resolve(__dirname, 'src', 'database', 'database.sql'),
    database: 'proffy',  // make sure you create this db
    user: 'root',         // can be something else
    password: '2710',         // your corresponding password
    host: 'localhost',
    port: '3306'          // Default port

    // host : 'db',
    // host : '127.0.0.1',
    // user : 'your_database_user',
    // password : 'your_database_password',
    // database : 'myapp_test',
    // port: 5432
  },
  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'migrations')
  },
  useNullAsDefault: true,
  // development: {
  //   client: 'mysql',
  //   connection: {
  //     database: 'mybooks',  // make sure you create this db
  //     user: 'root',         // can be something else
  //     password: '',         // your corresponding password
  //     host: 'localhost',
  //     port: '3306'          // Default port
  //   }
  // }
};

// module.exports = {

//   development: {
//     client: 'sqlite3',
//     connection: {
//       filename: './dev.sqlite3'
//     }
//   },

//   staging: {
//     client: 'postgresql',
//     connection: {
//       database: 'my_db',
//       user:     'username',
//       password: 'password'
//     },
//     pool: {
//       min: 2,
//       max: 10
//     },
//     migrations: {
//       tableName: 'knex_migrations'
//     }
//   },

//   production: {
//     client: 'postgresql',
//     connection: {
//       database: 'my_db',
//       user:     'username',
//       password: 'password'
//     },
//     pool: {
//       min: 2,
//       max: 10
//     },
//     migrations: {
//       tableName: 'knex_migrations'
//     }
//   }

// };

