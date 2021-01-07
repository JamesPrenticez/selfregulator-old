const express = require('express')
const router = express.Router()
const db = require('../db')

module.exports = router

//GET Tasks
router.get('/api/v1/tasks', (req, res) => {
  db.getTasks()
    .then(tasks => {
      res.json({tasks: tasks})
    })
})

//ADD Task
router.post('/api/v1/tasks', (req, res) => {
  let {name} = req.body
    db.addTask({name})
    .then((ids) => {
      res.status(201).json({ id: ids[0] })
    })
})

//GET Boxes (parse as JSON values)
router.get('/boxes/:id', (req, res) => { 
  const id = 1 //req.params.id  
  db.getBoxes(id)
        .then(callback => {
          console.log(callback)
          res.send(callback)
    })
})