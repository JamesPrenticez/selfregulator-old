const path = require('path')
const express = require('express')

const { getTasks } = require('./database/db')
const navRoutes = require('./routes/nav')
const taskRoutes = require('./routes/tasks')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

module.exports = server

// Routes
server.use('/', navRoutes)
server.use('/', taskRoutes)
