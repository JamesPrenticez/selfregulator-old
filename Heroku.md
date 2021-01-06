# Deployment
set "const port = process.env.PORT || 3000" in index.js
npm install -g heroku
heroku -v
heroku login
Sign in with jamesprenticez@gmail.com
heroku apps:create NAME_OF_YOUR_APP
git remote -v to see the urls
Skip DB set-up for now
git push heroku master OR If you're deploying a branch other than master, you must specify which branch you're deploying with git push heroku local-branch-name:master 

https://selfregulator.herokuapp.com/

# Database

## Config
Create a production option in the knexfile.js

production: {
  client: 'postgresql',
  connection: process.env.DATABASE_URL,
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
}

## Install Postgres
npm i pg

## Setup db.js correctly 
const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const db = require('knex')(config)

## Delay migrations till after npm i
Add to package.JSON scripts
"postinstall": "knex migrate:latest"

## Push to Heroku
git push heroku master

## Remote terminal
heroku run bash
exit

## Run seeds remote
knex seed:run

