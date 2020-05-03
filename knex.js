const knex = require('knex')({

    client:'mysql',
    connection:{

        host:'localhost',

        user:'root',
        password:'danny1312',


        database:'users',
        charset:'utf8'
    }
});

module.exports=knex