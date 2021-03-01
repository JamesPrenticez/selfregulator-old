import React from 'react'
import { connect } from 'react-redux'

import {setTasks} from '../actions'
import {getTasks} from '../api'

import TaskListItem from './TaskListItem'

class TaskList extends React.Component {
    componentDidMount() {
        getTasks()
        .then(tasks => {
            this.props.dispatch(setTasks(tasks))
        })
        .catch(err => {
            console.log(err)
      })
    }

    render(){
        const {tasks} = this.props
        return (
        <>
        <div className="taskList">
            <ul className='grid'>{tasks.map(task => <TaskListItem key={task.id} task={task} />)}</ul>
        </div>
       </>
        )
    }
}

function mapStateToProps (state) {
    return {
        tasks: state.tasks
    }
}

export default connect (mapStateToProps)(TaskList)
