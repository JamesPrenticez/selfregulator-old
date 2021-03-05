import React from 'react'

import TaskList from './TaskList'
import TaskAdd from './TaskAdd'

export default class CourseContainer extends React.Component {
    render() {
        return (
            <>
                <div className="courseContainer">
                <TaskList/>
                <br />
                <hr />
                <br />
                <TaskAdd/>
                </div>
            </>
        )
    }
}