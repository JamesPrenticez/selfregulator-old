import React from 'react'
import { connect } from 'react-redux'
import { addTask } from '../api'

class JobAdd extends React.Component {
    state = {
		task: 'New Task',
		boxes: [],		
    }

    submit = () => {
		addTask(this.state.task, this.state.boxes)
    }
    
    render() {
		return (
			<>
                {/* Change this */}
                <form className="registrationForm">
                    <fieldset>
                        <legend>Add Task</legend>

                        <label for='task'>New Task:</label>
                        <input type='text' role='task' name='task' placeholder='meditate' onChange={console.log()}></input>
                        <br>
                        </br>

                        <input type="submit" value="Submit" onClick={this.submit()}></input>

                    </fieldset>
                </form>
            </>
        )
    }
}

export default connect()(JobAdd) 