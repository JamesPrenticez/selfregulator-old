import React, { useState } from 'react';
import {connect} from 'react-redux'

import {removeTask} from '../actions'
import {deleteTask} from '../api'

import {updateBoxes} from '../actions'
import {editBoxes} from '../api'

import TaskEdit from './TaskEdit'

class TaskListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        showControls: false,
        editing: false,
        name: props.task.name,
        boxes: props.task.boxes,
    };
  }

    handleChange = (event) => {    
        this.setState({
            boxes: event.target.value
        })
    }

    changeColor = (i) => {
        let boxes = [...this.state.boxes]
        if(boxes[i] === 'neutral'){
            boxes[i] = 'pass'
            this.setState({
                // boxes: event.target.value
                boxes: boxes
            })
        }
    }

    submit = () =>{
        let {id} = this.props.task
        let {boxes} = this.state
            editBoxes(id, boxes)
            .then(() => {
                this.props.dispatch(updateBoxes(id, boxes))
                if (this.props.onEscape) this.props.onEscape()
            })
        }

    listenForKeys = (event) => {
        switch(event.keyCode){
            case 13:
                this.submit()
                break

            case 27:
                if (this.props.onEscape) this.props.onEscape()
                break
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
            <div
                // onMouseEnter={this.showControls}
                // onMouseLeave={this.hideControls}
                // style={{height: '45px'}}
            >
                {/* { editing ? <TaskEdit task={task} onEscape={this.hideEditForm}/> : task.name + ' ' + task.boxes} */}

                { editing ? <TaskEdit task={task} onEscape={this.hideEditForm}/> :
                <>
                <div className='taskName' onClick={this.editTask}>{task.name}</div>

                <input 
                    className='box'
                    name='name'
                    id={0}
                    value={this.state.boxes[0]}
                    onChange={this.handleChange}
                    onClick={() => this.changeColor(0)}
                />
<button onClick={()=> this.submit()}>Submit</button>

{/* 
                        <div className='taskName' onClick={this.editTask}>{task.name}</div>
                        <input type='button' className='box' id={0} name='name' value={this.state.boxes[0]} onChange={this.handleChange}>{task.boxes[0]}</input>
                        <input>fuckyou</input>
                        <div className='box' id={1} >{task.boxes[1]}</div>
                        <div className='box' id={2} >{task.boxes[2]}</div>
                        <div className='box' id={3} >{task.boxes[3]}</div>
                        <div className='box' id={4} >{task.boxes[4]}</div>

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
                    </> : ''} */}

                </>
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        boxes: state.boxes
    }
}

export default connect(mapStateToProps)(TaskListItem)