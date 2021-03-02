import React from 'react'
import {connect} from 'react-redux'
import {FaPlusCircle} from 'react-icons/fa'

import { updateTask } from '../actions'
import { editTask } from '../api'

class TaskEdit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: props.task.name,
            user_id: props.task.user_id     
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
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

    submit = () => {
        let {id} = this.props.task
        let {name} = this.state 
        let {user_id} = this.state
        console.log(this.state)
        editTask(id, name, user_id)
            .then(() => {
                this.props.dispatch(updateTask(id, name, user_id))
                if (this.props.onEscape) this.props.onEscape()
            })
        }

    render(){
        let style = {color: 'green', marginLeft: '7px', cursor: 'pointer'}
        return (
            <>
                <input 
                    name='name'
                    autoFocus={true}
                    value={this.state.name}
                    onKeyDown={this.listenForKeys}
                    onChange={this.handleChange}
                />

                <FaPlusCircle onClick={this.submit} role='button' style={style}/>
            </>
        )
    }
}

export default connect()(TaskEdit)