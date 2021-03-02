import React from 'react'
import { connect } from 'react-redux'

import { BrowserRouter as Router, Switch, Route, Link, NavLink, useParams, Redirect } from "react-router-dom";
import {setTasks} from '../actions'
import {getTasks} from '../api'

import TaskListItem from './TaskListItem'

class TaskList extends React.Component {
    componentDidMount() {
        let user_id = 1
         getTasks(user_id)
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
