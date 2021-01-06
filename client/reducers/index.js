import {combineReducers} from 'redux'

import usersReducer from './users'
import tasksReducer from './tasks'
import boxesReducer from './boxes'

export default combineReducers({
    users: usersReducer,
    tasks: tasksReducer,
    boxes: boxesReducer,
})
