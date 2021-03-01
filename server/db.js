const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const database = require('knex')(config)

module.exports = {
  getTasks,
  addTask,
  deleteTask,
  updateTask
}

//GET Tasks
// function getTasks (db = database) {
//   return db('tasks').select()
// }

//Get Tasks and Boxes
function getTasks (id = 1, db = database){
  return db('tasks')
    .select('name', 'boxes')
    .where('user_id', id)
    .then(parse)
} 

// // JSON.parse()
function parse(stuff) {
  return stuff.map(task => {
    task.boxes = JSON.parse(task.boxes)
    return task
  }) 
}

//ADD Task
function addTask({name, boxes}, db = database){
  return db('tasks').insert({name, boxes})
}

//DELETE Task
function deleteTask(id, db = database) {
    if (!id) return Promise.reject('id must be specified')
    return db('tasks').where({id}).delete()
}

//UPDATE Task
function updateTask(id, name, db = database) {
    if (!id) return Promise.reject('id must be specified')
    return db('tasks').where({id}).update({name})
}