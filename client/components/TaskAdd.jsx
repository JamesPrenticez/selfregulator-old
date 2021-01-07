import React from 'react'
import {connect} from 'react-redux'

import {setTasks} from '../actions'
import {addTask, getTasks} from '../api'

class TaskAdd extends React.Component {
     //We need to make this a 'controlled form so we add state
    state = {
        name: ''    
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submit = () => {
        //get addTask from api
        addTask(this.state.name)
            .then(() => {
                this.setState({name: ''})
                return getTasks()
            })
            .then((tasks) => {
                this.props.dispatch(setTasks(tasks))
            })
    }

    render() {
        return(
        <>
            <h2>Add Task</h2>
            <input name='name' onChange={this.handleChange} value={this.state.name}/>
            <button onClick={this.submit}>Create Task</button>
        </>
        )
    }
}
export default connect()(TaskAdd) 