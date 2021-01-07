import request from 'superagent'

export function getUsers() {
    return request  
        .get('/api/users')
        .then(res => res.body.users)
}

export function getTasks() {
    return request  
        .get('/api/v1/tasks')
        .then(res => res.body.tasks)
}

export function getBoxes() {
    return request  
        .get('/boxes/:id')
        .then(res => res.body)//maybe just res.body?
}

//ADD Job
export function addTask(name) {
    return request.post('/api/v1/tasks')
        .send({name})
        .then(res => res.body.id)
}