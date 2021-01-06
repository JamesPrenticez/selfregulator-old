import {RECEIVE_TASKS} from '../actions'
const initialState = []

export default function tasksReducer(state=initialState, action){
    switch(action.type) {
        case RECEIVE_TASKS:
            return action.tasks
        default:
            return state
    }
}