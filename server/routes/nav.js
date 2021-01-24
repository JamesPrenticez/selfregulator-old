const express = require('express')
const router = express.Router()
const path = require('path')

module.exports = router

//Nav Catch All
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'), (err) => {
      if (err) {
        res.status(500).send('Error 500 - Somthing went wrong')
      }
    })
  })