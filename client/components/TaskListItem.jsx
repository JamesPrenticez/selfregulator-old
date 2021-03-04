import React, { useState } from 'react';
import {connect} from 'react-redux'

import {FaMinusCircle} from 'react-icons/fa'

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

    updateBoxesState = (i) => {
        let boxes = [...this.state.boxes]
        if(boxes[i] === 'neutral'){
            boxes[i] = 'pass'
            this.setState({
                boxes: boxes
            })
        }  else if(boxes[i] === 'pass'){
            boxes[i] = 'fail'
            this.setState({
                boxes: boxes
            })
        } else if(boxes[i] === 'fail'){
            boxes[i] = 'neutral'
            this.setState({
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
        console.log('submit success')
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
    const {editing} = this.state
    const deleteStyle = {color: 'red', marginLeft: '7px', cursor: 'pointer'}
        return(
            <div
                style={{height: '45px'}}
            >
                { editing ? <TaskEdit task={task} onEscape={this.hideEditForm}/> :

                <>
                <div className='taskName' onClick={this.editTask}>{this.state.name}</div>

                {/*Box 0*/}
                <input 
                    className='box'
                    name='name'
                    id={0}
                    value={this.state.boxes[0]}
                    onChange={() => this.handleChange()}
                    onClick={() => this.updateBoxesState(0)}
                />
                {/*Box 1*/}
                <input 
                    className='box'
                    name='name'
                    id={1}
                    value={this.state.boxes[1]}
                    onChange={() => this.handleChange()}
                    onClick={() => this.updateBoxesState(1)}
                />
                {/*Box 2*/}
                <input 
                    className='box'
                    name='name'
                    id={2}
                    value={this.state.boxes[2]}
                    onChange={() => this.handleChange()}
                    onClick={() => this.updateBoxesState(2)}
                />
                {/*Box 3*/}
                <input 
                    className='box'
                    name='name'
                    id={3}
                    value={this.state.boxes[3]}
                    onChange={() => this.handleChange()}
                    onClick={() => this.updateBoxesState(3)}
                />
                {/*Box 4*/}
                <input 
                    className='box'
                    name='name'
                    id={4}
                    value={this.state.boxes[4]}
                    onChange={() => this.handleChange()}
                    onClick={() => this.updateBoxesState(4)}
                />

                <button onClick={() => this.submit()}>submit</button>

                <FaMinusCircle
                    style={deleteStyle}
                    onClick={() => this.deleteTask()}
                    role='button'
                />

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