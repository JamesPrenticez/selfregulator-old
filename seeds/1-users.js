exports.seed = (knex, Promise) => {
  return knex('users').insert([
    {id: 1, username: 'JamesPrenticez', password: 'password123', email: 'JamesPrenticez@gmail.com', fname: 'James', lname: 'Prentice'},
    {id: 2, username: 'BobJonez', password: 'password123', email: 'bj@gmail.com', fname: 'Bob', lname: 'Jones'},
  ])
}