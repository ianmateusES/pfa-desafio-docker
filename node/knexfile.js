module.exports = {

  development: {
    client: 'mysql2',
    connection: {
      host : 'mysql-desafio-pfa',
      user : 'root',
      password : '123456',
      database : 'fullcycle'
    },
    migrations: {
      directory: './src/database/migrations'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'mysql',
    connection: {
      host : 'localhost',
      user : 'root',
      password : '123456',
      database : 'fullcycle'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './src/database/migrations'
    }
  }

};
