import React from 'react'
import {connect} from 'react-redux'

class Task extends React.Component {
    render(){
        const {task} = this.props
        return (
            <li>
                {task.name}
            </li>
        )
    }
}

export default connect ()(Task)