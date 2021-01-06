exports.up = (knex, Promise) => {
    return knex.schema.createTable('users', (table) => {
    table.increments('id')
    table.string('username')
    table.string('password')
    table.string('email')
    table.string('fname')
    table.string('lname')
    })  
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('users')
};
