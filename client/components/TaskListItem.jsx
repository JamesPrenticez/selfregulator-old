import React from 'react'
import {connect} from 'react-redux'
import {FaMinusCircle, FaEdit} from 'react-icons/fa'

import {removeTask} from '../actions'
import {deleteTask} from '../api'

import TaskEdit from './TaskEdit'
import TaskListItemBoxes from './TaskListItemBoxes'

class TaskListItem extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            showControls: false,
            editing: false
        }
    }

    showControls = () => {
        if (this.state.editing) return
        this.setState({showControls: true})
    }

    hideControls = () => {
        this.setState({showControls: false})
    }

    deleteTask = () => {
        let {id} = this.props.task
        deleteTask(id)
            .then(() => {
                this.props.dispatch(removeTask(id))
        })
    }

    editTask = () => {
        this.setState({
            showControls: false,
            editing: true
        })
    }

    hideEditForm = () => {
        this.setState({
            showControls: true,
            editing: false,
        })
    }

    render(){
    const {task} = this.props
    const {showControls, editing} = this.state
    const editStyle = {color: 'orange', marginLeft: '7px', cursor: 'pointer'}
    const deleteStyle = {color: 'red', marginLeft: '7px', cursor: 'pointer'}
        return(
            <li className='row'
                onMouseEnter={this.showControls}
                onMouseLeave={this.hideControls}
            >
                { editing ? <TaskEdit task={task} onEscape={this.hideEditForm}/> : <TaskListItemBoxes task={task}/>}

                { showControls ? <>
                    <FaEdit
                        style={editStyle}
                        onClick={this.editTask}
                        role='button'  
                    />
                    <FaMinusCircle
                        style={deleteStyle}
                        onClick={this.deleteTask}
                        role='button'
                    />
                </> : ''}
            </li>
        )
    }
}
export default connect()(TaskListItem)