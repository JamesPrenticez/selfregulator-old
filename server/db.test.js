const knex = require('knex')
const config = require('../knexfile')

const {getTasks, addTask} = require('./db')
let testDb = knex(config.test)

beforeAll(() => testDb.migrate.latest())
beforeEach(() => testDb.seed.run())

//Tasks Seed has 3 tasks pre-populated

describe('Test getTasks function', () => {
    test('Check function return correct number of task', () => {
        getTasks(testDb)
           .then((result) => {
                expect(result.length).toBe(3)
            })
    })
})

describe('Test addTask function', () => {
    test('creates a task for the specified user', () => {
        addTask({name: 'jump for joy'}, testDb)
        .then(ids => {
            expect(ids[0] > 0).toBe(true)
            return addTask(testDb)
        })
        .then(tasks => {
            expect(tasks.length).toBe(4)
            expect(tasks[3].task).toBe('jump for joy')
        })
    })
})