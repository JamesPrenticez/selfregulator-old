  
const express = require('express')
const db = require('../db')
const router = express.Router()

module.exports = router

//GET Tasks
router.get('/api/tasks', (req, res) => {
  db.getTasks()
    .then(tasks => {
      res.json({tasks: tasks})
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

//ADD Task
router.post('/api/add/:id', (req, res) => {
  const id = 1 //req.params.id
  let {task} = req.body
    db.addTask({task, id})
    .then((ids) => {
      res.status(201).json({ id: ids[0] })
    })
})