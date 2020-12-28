exports.up = function(knex) {
    return knex.schema.createTable('tasks', t => {
          t.increments()
          t.string('name')
      })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('tasks')
  };