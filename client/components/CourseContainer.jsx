import React from 'react'

import TaskList from './TaskList'
import TaskAdd from './TaskAdd'

export default class CourseContainer extends React.Component {
    render() {
        return (
            <>
                <div className="courseContainer">
                <h1>Welcome to the 28 day challenge</h1>
                <TaskList/>
                <TaskAdd/>
                </div>
            </>
        )
    }
}