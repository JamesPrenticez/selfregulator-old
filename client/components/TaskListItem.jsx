import React from 'react'
import {connect} from 'react-redux'

class TaskListItem extends React.Component {
    render(){
    const {task} = this.props

        return(
            <>
                <li>
                    {task.name}
                    {task.boxes}
                </li>
            </>
        )
    }
}
export default connect()(TaskListItem)