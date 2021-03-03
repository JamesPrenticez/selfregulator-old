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
                        {/* <div>Task</div>
                        <div>M</div>
                        <div>T</div>
                        <div>W</div>
                        <div>T</div>S
                        <div>F</div>
                        <div>Delete</div> */}

            <div>{tasks.map(task => <TaskListItem key={task.id} task={task} />)}</div>
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
