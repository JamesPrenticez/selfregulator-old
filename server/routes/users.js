const express = require('express')
const db = require('../db')
const router = express.Router()

module.exports = router

//Get user and display on main page
router.get('/api/users', (req, res) => {
  db.getUsers()
    .then(users => {
      res.json({users: users})
    })
})