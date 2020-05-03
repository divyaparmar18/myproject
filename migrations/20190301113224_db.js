
exports.up = function(knex, Promise) {
    return knex
               .schema
               .createTable('users',function(usersTable){


                   usersTable.increments();

                   usersTable.string('name', 50).notNullable();
                   usersTable.string('username',50).notNullable().unique();
                   usersTable.string('email',250).notNullable().unique();
                   usersTable.string('password',128).notNullable()

               })
  
};

exports.down = function(knex, Promise) {

    return knex
        .schema
            .dropTableIfExists('users')
  
};
