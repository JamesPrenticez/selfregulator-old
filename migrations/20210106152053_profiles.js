exports.up = function(knex) {
    return knex.schema.createTable('profiles', (table) => {
        table.increments('id')
        table.integer('user_id').references('users.id')
        table.string('profile_picture')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('profiles')
};