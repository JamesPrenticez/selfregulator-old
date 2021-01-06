  
const express = require('express')
const db = require('../db')
const router = express.Router()

module.exports = router

//Get entire tasks db and display on page
router.get('/api/tasks', (req, res) => {
  db.getTasks()
    .then(tasks => {
      res.json({tasks: tasks})
    })
})

//Get boxes as javascript values
router.get('/boxes/:id', (req, res) => { 
  const id = 1 //req.params.id  
  db.getBoxes(id)
        .then(callback => {
        console.log(callback)
        res.send(callback)
    })
})