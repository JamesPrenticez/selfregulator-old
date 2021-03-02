import React from 'react'
import {connect} from 'react-redux'
import {FaMinusCircle, FaEdit} from 'react-icons/fa'

import {removeTask} from '../actions'
import {deleteTask} from '../api'

import TaskEdit from './TaskEdit'

class TaskListItem extends React.Component {
    state = {
        showControls: false,
        editing: false,
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
    console.log(task)
    const {showControls, editing} = this.state
    const editStyle = {color: 'orange', marginLeft: '7px', cursor: 'pointer'}
    const deleteStyle = {color: 'red', marginLeft: '7px', cursor: 'pointer'}
        return(
            <tr
                onMouseEnter={this.showControls}
                onMouseLeave={this.hideControls}
                style={{height: '45px'}}
            >
                {/* { editing ? <TaskEdit task={task} onEscape={this.hideEditForm}/> : task.name + ' ' + task.boxes} */}

                { editing ? <TaskEdit task={task} onEscape={this.hideEditForm}/> : 
                <>     
                        <td><div className='taskName' onClick={this.editTask}>{task.name}</div></td>
                        <td><div className='box'>{task.boxes[0]}</div></td>
                        <td><div className='box'>{task.boxes[1]}</div></td>
                        <td><div className='box'>{task.boxes[2]}</div></td>
                        <td><div className='box'>{task.boxes[3]}</div></td>
                        <td><div className='box'>{task.boxes[4]}</div></td>
                        <td>                
                    { showControls ? <>
                        {/* <FaEdit
                            style={editStyle}
                            onClick={this.editTask}
                            role='button'  
                        /> */}
                        <FaMinusCircle
                            style={deleteStyle}
                            onClick={this.deleteTask}
                            role='button'
                        />
                    </> : ''}</td>
                </>
                }
            </tr>
        )
    }
}
export default connect()(TaskListItem)