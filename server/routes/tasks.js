const express = require('express')
const router = express.Router()
const db = require('../db')

module.exports = router

//GET Tasks
router.get('/api/v1/tasks/:user_id', (req, res) => {
  let {user_id} = req.params
  db.getTasks(user_id)
    .then(tasks => {
      res.json({tasks: tasks})
    })
})

//Merge with get tasks
// //GET Boxes (parse as JSON values)
// router.get('/boxes/:id', (req, res) => { 
//   const id = 1 //req.params.id  
//   db.getBoxes(id)
//         .then(callback => {
//           console.log(callback)
//           res.send(callback)
//     })
// })

//ADD Task
router.post('/api/v1/tasks/:user_id', (req, res) => {
  let {user_id} = req.params
  let {name, boxes} = req.body
    db.addTask({name, boxes, user_id})
    .then((ids) => {
      res.status(201).json({ id: ids[0] })
    })
})

//DELETE Task
router.delete('/api/v1/tasks/:id', (req, res) => {
  let {id} = req.params
  if (!id) return res.status(400).send('no id specified')

  db.deleteTask(Number(id))
    .then((recordsDeleted) => {
      res.sendStatus(200)
  })
  .catch(error => {
    res.sendStatus(500)
  })
})

//UPDATE Task
router.patch('/api/v1/tasks/:id', (req, res) => {
  let {id} = req.params
  if (!id) return res.status(400).send('no id specified')
  db.updateTask(Number(id), req.body.name)
    .then(recordsUpdated => {
      res.sendStatus(200)
    })
    .catch(error => {
      res.sendStatus(500)
    })
})

//UPDATE Boxes
router.patch('/api/v1/tasks/:id', (req, res) => {
  let {id} = req.params
  let {boxes} = req.body.boxes
  console.log(boxes)
  if (!id) return res.status(400).send('no id specified')
  db.updateBoxes(Number(id), boxes)
    .then(recordsUpdated => {
      res.sendStatus(200)
    })
    .catch(error => {
      res.sendStatus(500)
    })
})