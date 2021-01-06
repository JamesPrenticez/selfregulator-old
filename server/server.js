const path = require('path')
const express = require('express')

const server = express()

const portfolioRoutes = require('./routes/nav')
const userRoutes = require('./routes/users')
const taskRoutes = require('./routes/tasks')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

module.exports = server

// Routes
server.use('/', portfolioRoutes)
server.use('/', userRoutes)
server.use('/', taskRoutes)

