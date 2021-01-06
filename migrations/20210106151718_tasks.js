exports.up = (knex, Promise) => {
    return knex.schema.createTable('tasks', (table) =>{
        table.integer('user_id').references('users.id')
        table.increments('id') 
        table.string('task')
        table.string('boxes')
    })
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('tasks')
};