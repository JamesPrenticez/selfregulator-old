import React, { useState } from 'react';
import {connect} from 'react-redux'

import {FaMinusCircle} from 'react-icons/fa'

import {removeTask} from '../actions'
import {deleteTask} from '../api'

import { updateTask } from '../actions'
import { editTask } from '../api'

import {updateBoxes} from '../actions'
import {editBoxes} from '../api'

const yellow = '#FEDD01'
const green = '#39ff14'
const red = '#DD01FE'

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

    componentDidMount() {
        for(let i = 0; i < document.getElementsByClassName('box').length; i++){
        let id = document.getElementsByClassName('box')[i].id
        this.changeColor(i, id)
        }
    }

    handleChangeName = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleChangeBoxes = (event) => {    
        this.setState({
            boxes: event.target.value
        })
    }

    updateBoxesState = (i, id) => {
        let boxes = [...this.state.boxes]
           if(boxes[i] === 'neutral'){
            document.getElementById(id).style.backgroundColor=green;
            boxes[i] = 'pass'
            this.setState({
                boxes: boxes
            })
        }  else if(boxes[i] === 'pass'){
            document.getElementById(id).style.backgroundColor=red;
            boxes[i] = 'fail'
            this.setState({
                boxes: boxes
            })
        } else if(boxes[i] === 'fail'){
            document.getElementById(id).style.backgroundColor=yellow;
            boxes[i] = 'neutral'
            this.setState({
                boxes: boxes
            })
    }
        console.log(this.state.boxes)
    }

    changeColor = (i, id) => {
            if(document.getElementsByClassName('box')[i].value == 'pass'){
                document.getElementById(id).style.backgroundColor=green;
            } else if (document.getElementsByClassName('box')[i].value == 'neutral'){
                document.getElementById(id).style.backgroundColor=yellow;
            } else if (document.getElementsByClassName('box')[i].value == 'fail'){
                document.getElementById(id).style.backgroundColor=red;
            } else document.getElementById(id).style.backgroundColor='black';
    }

    submitTaskName = () =>{
        let {id} = this.props.task
        let {name} = this.state 
        editTask(id, name)
            .then(() => {
                this.props.dispatch(updateTask(id, name))
                if (this.props.onEscape) this.props.onEscape()
            })
        this.setState({
            editing: false
        })
        setTimeout(alert('submit success'),10)
        //Definatly an improvment to be had here https://codepen.io/lancebush/pen/zdxLE
    }

    submitBoxes = () =>{
        let {id} = this.props.task
        let {boxes} = this.state
        editBoxes(id, boxes)
            .then(() => {
                this.props.dispatch(updateBoxes(id, boxes))
                if (this.props.onEscape) this.props.onEscape()
            })
        this.setState({
            editing: false
        })
        setTimeout(alert('submit success'),10)
        //Definatly an improvment to be had here https://codepen.io/lancebush/pen/zdxLE
    }


    listenForKeys = (event) => {
        switch(event.keyCode) {
            case 13:
                this.submitTaskName()
                break
            
            case 27:
                this.hideEditForm()
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
            editing: true
        })
    }

    hideEditForm = () => {
        this.setState({
            editing: false,
        })
        // Reset this.state.name back to original before the user entered the TaskNameInputField thus giving them an option to use 'esc' key to exit with out saving changed to DB
        this.setState({
            name: document.getElementById('TaskNameInputField').value = this.props.task.name
        })
    }

    render(){
    const {id} = this.props.task
    const {editing} = this.state
    const submitStyle = {color: 'green', marginLeft: '7px', cursor: 'pointer'}
    const deleteStyle = {color: 'red', marginLeft: '7px', cursor: 'pointer'}
        return(
            <div className='row'>

                { editing ?  
            //If EDITING is true... Show Task Name Input Field and Boxes
            <>
                {/*Task Name Input Field*/}
                <input 
                    id='TaskNameInputField'
                    className='TaskName'
                    type='text'
                    name='name'
                    autoFocus={true}
                    onBlur={() => this.hideEditForm(), () => this.submitTaskName()}
                    value={this.state.name}
                    onKeyDown={(event) => this.listenForKeys(event)}
                    onChange={(event) => this.handleChangeName(event)}
                />

                {/*Box 0*/}
                <input 
                    className='box'
                    name='name'
                    id={id  + 'box0'}
                    value={this.state.boxes[0]}
                    onChange={(event) => this.handleChangeBoxes(event)}
                    onClick={() => this.updateBoxesState(0, id + 'box0')}
                />
                {/*Box 1*/}
                <input 
                    className='box'
                    name='name'
                    id={id + 'box1'}
                    value={this.state.boxes[1]}
                    onChange={(event) => this.handleChange(event)}
                    onClick={() => this.updateBoxesState(1, id + 'box1')}
                />
                {/*Box 2*/}
                <input 
                    className='box'
                    name='name'
                    id={id + 'box2'}
                    value={this.state.boxes[2]}
                    onChange={(event) => this.handleChange(event)}
                    onClick={() => this.updateBoxesState(2, id + 'box2')}
                />
                {/*Box 3*/}
                <input 
                    className='box'
                    name='name'
                    id={id + 'box3'}
                    value={this.state.boxes[3]}
                    onChange={(event) => this.handleChange(event)}
                    onClick={() => this.updateBoxesState(3, id + 'box3')}
                />
                {/*Box 4*/}
                <input 
                    className='box'
                    name='name'
                    id={id + 'box4'}
                    value={this.state.boxes[4]}
                    onChange={(event) => this.handleChange(event)}
                    onClick={() => this.updateBoxesState(4, id + 'box4')}
                />

                <button onClick={() => this.submitBoxes()}>submit</button>

                <FaMinusCircle
                    style={deleteStyle}
                    onClick={() => this.deleteTask()}
                    role='button'
                />
        </>


                //Else If EDITING is False ... show Name and Boxes
                :
                <>
                {/*Task Name*/}
                <div className='taskName' onClick={this.editTask}>{this.state.name}</div>

                {/*Box 0*/}
                <input 
                    className='box'
                    name='name'
                    id={id  + 'box0'}
                    value={this.state.boxes[0]}
                    onChange={(event) => this.handleChange(event)}
                    onClick={() => this.updateBoxesState(0, id + 'box0')}
                />
                {/*Box 1*/}
                <input 
                    className='box'
                    name='name'
                    id={id + 'box1'}
                    value={this.state.boxes[1]}
                    onChange={(event) => this.handleChange(event)}
                    onClick={() => this.updateBoxesState(1, id + 'box1')}
                />
                {/*Box 2*/}
                <input 
                    className='box'
                    name='name'
                    id={id + 'box2'}
                    value={this.state.boxes[2]}
                    onChange={(event) => this.handleChange(event)}
                    onClick={() => this.updateBoxesState(2, id + 'box2')}
                />
                {/*Box 3*/}
                <input 
                    className='box'
                    name='name'
                    id={id + 'box3'}
                    value={this.state.boxes[3]}
                    onChange={(event) => this.handleChange(event)}
                    onClick={() => this.updateBoxesState(3, id + 'box3')}
                />
                {/*Box 4*/}
                <input 
                    className='box'
                    name='name'
                    id={id + 'box4'}
                    value={this.state.boxes[4]}
                    onChange={(event) => this.handleChange(event)}
                    onClick={() => this.updateBoxesState(4, id + 'box4')}
                />

                <button onClick={() => this.submitBoxes()}>submit</button>

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