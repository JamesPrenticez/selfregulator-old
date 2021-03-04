import request from 'supertest'
import server from '../server'

import {updateBoxes, deleteTask, updateTask} from '../db'

jest.mock('../db', () => ({
    deleteTask: jest.fn(),
    updateBoxes: jest.fn(),
    updateTask: jest.fn()
}))

//DELETE
describe('DELETE /api/v1/tasks/:id', () => {
    test("calls deleteTask database function", () => {
        deleteTask.mockImplementation(() => Promise.resolve(1))
        expect.assertions(2)
        return request(server)
            .delete('/api/v1/tasks/1')
            .then(res => {
                expect(deleteTask).toHaveBeenCalledWith(1)
                expect(res.status).toBe(200)
            })
    })
})

//UPDATE Name
describe('PATCH /api/v1/tasks/:id', () => {
    test("calls updateTask database function", () => {
        updateTask.mockImplementation(() => Promise.resolve(1))
        expect.assertions(2)
        return request(server)
            .patch('/api/v1/tasks/1')
            .send({name: "don't do stuff"})
            .then(res => {
                expect(updateTask).toHaveBeenCalledWith(1, "don't do stuff")
                expect(res.status).toBe(200)
            })

    })
})
// UPDATE Boxes
describe('PATCH /api/v1/boxes/:id', () =>{
    test("calls updateBoxes database function", () =>{
        updateBoxes.mockImplementation(() => Promise.resolve(1))
        expect.assertions(2)
        return request(server)
            .patch('/api/v1/boxes/1')
            .send({boxes: "['pass', 'fail', 'neutral', 'pass', 'fail']"})
            .then(res => {
                expect(updateBoxes).toHaveBeenCalledWith(1, "['pass', 'fail', 'neutral', 'pass', 'fail']")
                expect(res.status).toBe(200)
            })
    })
})