import request from 'superagent'
const acceptJsonHeader = { Accept: 'application/json' }

export function fetchTasks(){
    return request.get('/api/v1/tasks')
        .then(res => res.body)
}

export function sendRegistrationEmail (email) {
  return request
    .post('/api/v1/sendRegistrationEmail')
    .set(acceptJsonHeader)
    .send({ email })
    .then(res => res.body)
}

export function sendReminderEmail (email) {
  return request
    .post('/api/v1/sendReminderEmail')
    .set(acceptJsonHeader)
    .send({ email })
    .then(res => res.body)
}

export function getUserInfo (email) {
  return request
    .get(`/api/v1/auth?email=${email}`)
    .set(acceptJsonHeader)
    .then(res => {
      return res.body
    })
}