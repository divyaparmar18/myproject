exports.seed = function(knex,Promise){

  let tableName = 'users';

  let rows = [
    {

      name : 'Zoyaa patel',
      username: 'zpatel',
      email: 'zoyaa@navgurukul.org',
      password: "zoyaa2410",

    },
    {

      name : 'Pratik patel',
      username :'patelpratik',
      email:'pratik.24@gmail.com',
      password:'pratik2410'

    }
];
  return knex (tablename)
  .del()
  .then(function(){
    return knex.insert(rows).into(tablename);
  });

}