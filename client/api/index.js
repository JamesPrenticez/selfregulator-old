import request from 'superagent'

export function fetchUsers() {
    return request  
        .get('/api/users')
        .then(res => res.body.users)
}

export function fetchTasks() {
    return request  
        .get('/api/tasks')
        .then(res => res.body.tasks)
}

export function fetchBoxes() {
    return request  
        .get('/boxes/:id')
        .then(res => res.body)//maybe just res.body?
}

//ADD Job
export function addTask(task, id){
    return request.post('/api/add')
        .send({task, id})
        .then(res => res.body.id)
}