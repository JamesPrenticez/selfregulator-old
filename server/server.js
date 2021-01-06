const path = require('path')
const express = require('express')

const { getTasks } = require('./database/db')

const navRoutes = require('./routes/nav')
const taskRoutes = require('./routes/tasks')
const portfolioRoutes = require('./routes/nav')
const userRoutes = require('./routes/users')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

module.exports = server

// Routes
server.use('/', navRoutes)
server.use('/', portfolioRoutes)
server.use('/', userRoutes)
server.use('/', taskRoutes)


