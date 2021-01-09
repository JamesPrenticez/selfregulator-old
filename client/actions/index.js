export const SET_TASKS = 'SET_TASKS'
export const ADD_TASK = 'ADD_TASKS'
export const REMOVE_TASK = 'REMOVE_TASK'
export const UPDATE_TASK = 'UPDATE_TASK'

export function setTasks(tasks) {
    return ({
        type: SET_TASKS,
        tasks
    })
}

export function removeTask(id) {
    return ({
        type: REMOVE_TASK,
        id
    })
}

export function updateTask(id, name) {
    return ({
        type: UPDATE_TASK,
        id, name
    })
}