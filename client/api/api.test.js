import nock from 'nock'
import {editTask, editBoxes} from './index'

test('edit task', () => {
    const scope = nock(/localhost/)
        .patch('/api/v1/tasks/1', {name: 'do stuff'})
        .reply(200)

    return editTask(1, 'do stuff')
        .then(() => {
            expect(scope.isDone()).toBe(true)
        })
})

test('edit boxes', () => {
    const scope = nock(/localhost/)
        .patch('/api/v1/tasks/2', {boxes: "['pass', 'fail', 'neutral', 'pass', 'fail']"})
        .reply(200)

    return editBoxes(2, "['pass', 'fail', 'neutral', 'pass', 'fail']")
        .then(() => {
            expect(scope.isDone()).toBe(true)
        })
})