import request from 'superagent'

export function getTasks() {
    return request  
        .get('/api/v1/tasks')
        .then(res => res.body.tasks)
}

//ADD Task
export function addTask(name, boxes) {
    return request.post('/api/v1/tasks')
        .send({name, boxes})
        .then(res => res.body.id)
}

//Delete Task
export function deleteTask(id) {
    return request.delete('/api/v1/tasks/' + id)
        .then(res => res.body)
}

//Edit Task
export function editTask(id, name) {
    return request.patch('/api/v1/tasks/' + id)
        .send({name})
        .then(res => res.body)
}

