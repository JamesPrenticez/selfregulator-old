const path = require('path')
const express = require('express')

const server = express()

const taskRoutes = require('./routes/tasks')
const navRoutes = require('./routes/nav')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

module.exports = server

// Routes
server.use('/', taskRoutes)
//Make sure navRoutes comes last due to the top down order of execution
server.use('/', navRoutes) 

