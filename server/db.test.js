const knex = require('knex')
const config = require('../knexfile')

const {getTasks, updateTask} = require('./db')
let testDb = knex(config.test)

beforeAll(() => testDb.migrate.latest())
beforeEach(() => testDb.seed.run())

//Tasks Seed has 3 tasks pre-populated
describe('Test getTasks function', () => {
    test('Check function return correct number of task', () => {
        getTasks(1, testDb)
        .then((result) => {
            return testDb('tasks').where({user_id: 1})
        .then((result) => {
            expect(result.length).toBe(3)
        })
    })
})
})

describe('updateTask', () => {
    test("updates a task", () => {
        return updateTask(1, "Task69", testDb)
            .then((recordsUpdated) => {
                expect(recordsUpdated).toBe(1)
                return testDb('tasks').where({id: 1}).select().first()
            })
            .then(task => {
                expect(task.name).toBe("Task69")
            })
    })

})
