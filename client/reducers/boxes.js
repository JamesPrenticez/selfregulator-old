import {RECEIVE_BOXES} from '../actions'
const initialState = []

export default function boxesReducer(state=initialState, action){
    switch(action.type) {
        case RECEIVE_BOXES:
            return action.boxes
        default:
            return state
    }
}