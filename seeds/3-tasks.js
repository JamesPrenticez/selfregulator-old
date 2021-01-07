exports.seed = (knex, Promise) => {
  return knex('tasks').insert([
    {id: 1, user_id: 1, name: 'Task1', boxes: JSON.stringify(['pass', 'fail', 'neutral', 'pass', 'fail'])},
    {id: 2, user_id: 1, name: 'Task2', boxes: JSON.stringify(['fail', 'neutral', 'pass', 'fail', 'neutral'])},
    {id: 3, user_id: 1, name: 'Task3', boxes: JSON.stringify(['neutral', 'pass', 'fail', 'neutral', 'pass'])}
  ])
}