import {SET_TASKS, REMOVE_TASK, UPDATE_TASK, UPDATE_BOXES} from '../actions'

export default function(state=[], action) {
  switch(action.type) {
    case SET_TASKS: 
      return action.tasks

    case REMOVE_TASK:
      return state.filter(t => t.id != action.id)

    case UPDATE_TASK:
      return state.map(t => t.id == action.id ? {...t, name: action.name} : t)

    case UPDATE_BOXES:
      return state.map(t => t.id == action.id ? {...t, name: action.name} : t)

    default: 
      return state
  }
}