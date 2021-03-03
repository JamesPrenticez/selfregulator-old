import request from 'superagent'

export function getTasks(user_id) {
    return request  
        .get('/api/v1/tasks/' + user_id)
        .then(res => res.body.tasks)
}

//ADD Task
export function addTask(name, boxes, user_id) {
    return request.post('/api/v1/tasks/' + user_id)
        .send({name, boxes, user_id})
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

//Edit Boxes
export function editBoxes(id, boxes) {
    return request.patch('/api/v1/tasks/' + id)
        .send({boxes})
        .then(res => res.body)
        .then(console.log('api'))
}

