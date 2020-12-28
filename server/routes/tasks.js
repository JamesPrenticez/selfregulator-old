const express = require('express')
const db = require('../database/db')
const router = express.Router()

module.exports = router

//Get entire tasks db and display on page
router.get('/api/v1/tasks', (req, res) => {
    db.getTasks()
        .then(tasks => {
            res.json({tasks: tasks})
        })
})