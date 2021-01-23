import React from 'react'
import {connect} from 'react-redux'

class TaskListItemBoxes extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            boxes: this.props.task.boxes
        }
    }

    editBoxes = () => {
        this.setState({
            boxes: ['1', '2', '3', '4', '5', '6'],
        })
    }

    render(){
    const {task} = this.props
        return(
            <>
                <h4>{task.name}</h4> {/*This doesn't work with editing*/}
                {task.boxes.map(box => <div className='box'>{box}</div>)}
            </>
        )
    }
}
export default connect()(TaskListItemBoxes)