const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
    getUsers,
    getTasks,
    getBoxes
}

function getUsers (db = connection) {
  return db('users').select()
}

function getTasks (db = connection) {
  return db('tasks').select()
}

function getBoxes (id = 1, db = connection){
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