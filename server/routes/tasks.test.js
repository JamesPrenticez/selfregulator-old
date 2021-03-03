import request from 'supertest'
import server from '../server'

import {updateBoxes} from '../db'

jest.mock('../db', () => ({
    updateBoxes: jest.fn()
}))

//UPDATE
describe('PATCH /api/v1/tasks/:id', () =>{
    test("calls updateBoxes database function", () =>{
        updateBoxes.mockImplementation(() => Promise.resolve(1))
        expect.assertions(1)
        return request(server)
            .patch('/api/v1/tasks/2')
            .send({boxes: "['pass', 'fail', 'neutral', 'pass', 'fail']"})
            .then(res => {
                expect(updateBoxes).toHaveBeenCalledWith("['pass', 'fail', 'neutral', 'pass', 'fail']")
                expect(res.status).toBe(200)
            })
    })
})