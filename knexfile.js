module.exports = {

  development: {

    migrationss:{tablename:'knex_migrations'},
    seeds:{tablename: './seeds'},

    client:'mysql',
    connection:{

      host:'localhost',

      user:'root',
      password:'danny1312',

      datebase:'users',
      charset:'utf8',
          }
  }

}