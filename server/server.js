const path = require('path')
const express = require('express')

const server = express()

const portfolioRoutes = require('./routes/nav')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

module.exports = server

// Routes
server.use('/', portfolioRoutes)
