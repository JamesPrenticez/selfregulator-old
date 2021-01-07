export const RECEIVE_USERS = 'RECEIVE_USERS'
export const RECEIVE_BOXES = 'RECEIVE_BOXES'
export const ADD_TASK = 'ADD_TASKS' //Not needed?
export const SET_TASKS = 'SET_TASKS'

export const receiveUsers = (users) => {
  return {
    type: RECEIVE_USERS,
    users
  }
}


export function setTasks(tasks) {
    return ({
        type: SET_TASKS,
        tasks
    })
}

export const receiveBoxes = (boxes) => {
  return {
    type: RECEIVE_BOXES,
    boxes
  }
}