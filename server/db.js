const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const database = require('knex')(config)

module.exports = {
    getUsers,
    getTasks,
    getBoxes,
    addTask
}

//GET Users
function getUsers (db = database) {
  return db('users').select()
}

//GET Tasks
function getTasks (db = database) {
  return db('tasks').select()
}

//Get Boxes
function getBoxes (id = 1, db = database){
  return db('tasks')
    .select('boxes')
    .where('user_id', id)
    .then(parse)
} 

// JSON.parse()
function parse(stuff) {
  console.log("stuff")
  console.log(stuff)
  return stuff.map(task => {
    task.boxes = JSON.parse(task.boxes)
    return task
  }) 
}

//ADD Tasks
function addTask({task, id}, db = database){
  return db('tasks').insert({task}).where({id})
}