import request from 'superagent'

export function getTasks() {
    return request  
        .get('/api/v1/tasks')
        .then(res => res.body.tasks)
}

//ADD Job
export function addTask(name) {
    return request.post('/api/v1/tasks')
        .send({name})
        .then(res => res.body.id)
}

export function deleteTask(id) {
    return request.delete('/api/v1/tasks/' + id)
        .then(res => res.body)
}

export function editTask(id, name) {
    return request.patch('/api/v1/tasks/' + id)
        .send({name})
        .then(res => res.body)
}