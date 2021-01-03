import { combineReducers } from 'redux'
import currentPage from './currentPage'
import addUserInfoReducer from './addUserInfo'

const reducers = combineReducers({
  currentPage,
  addUserInfoReducer
})

export default reducers