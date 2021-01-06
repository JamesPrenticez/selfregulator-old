import {combineReducers} from 'redux'

import tasksReducer from './tasks'
import boxesReducer from './boxes'

export default combineReducers({
    tasks: tasksReducer,
    boxes: boxesReducer
})

