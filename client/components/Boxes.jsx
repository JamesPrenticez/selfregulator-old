import React from 'react'
import {connect} from 'react-redux'
import {fetchBoxes} from '../api'
import {receiveBoxes} from '../actions'

class Boxes extends React.Component {     
    state = {
            boxState: [],
            boxColor: 'yellow',
        }

    componentDidMount() {
        fetchBoxes()
            .then(boxes => {
                this.props.dispatch(receiveBoxes(boxes))
            })
            .then(()=>{
                let boxArray = this.state.boxState.slice
                boxArray = this.props.boxes
                this.setState({boxState: boxArray})

                // var array = JSON.parse('[' + this.props.boxes[0].boxes + ']')
                // console.log(array)

            })
    }

    handelClick (rowIndex, columnIndex) {
        let rc = `${rowIndex+ '' + columnIndex}` //wdf is this math..?
        let currentBox = document.getElementById(rc)
        let boxStateSelector = `this.state.boxState[${+rowIndex+']'+'?.boxes'+'['+columnIndex+']'}`

        let dog = [...this.state.boxState] //1
        let cat = {...dog[rowIndex].boxes}//2
        let item = cat[columnIndex]

        console.log(this.state.boxState)


        // console.log(currentBox.style)
        // console.log(this.state.boxState[rowIndex]?.boxes[columnIndex])
        // console.log(rc)
        // console.log(eval(boxStateSelector))
        // console.log(ref)
        // should use window.Function for security purposes

        if (eval(boxStateSelector) == 'neutral'){
            item = 'pass'
            cat[columnIndex] = item
            dog[rowIndex] = cat
            this.setState({boxState: dog})
            currentBox.style.backgroundColor = 'green'

        // } else if (eval(boxStateSelector) == 'pass'){
        //     this.item = 'fail'
        //     items[rowIndex]?.boxes[columnIndex] = item
        //     this.setState({items})
        //     currentBox.style.backgroundColor = 'red'

        // } else if (eval(boxStateSelector) == 'fail'){
        //     item = 'neutral'
        //     items[rowIndex]?.boxes[columnIndex] = item
        //     this.setState({items})
        //     currentBox.style.backgroundColor = 'white'

        // } else  console.log("error")
        // }
        }
    }

    render() {
        // console.log(this.props.boxes)
        // console.log(this.state.boxState[1])
         return (
            <>
            <div>

                <ul>
                
                {this.props.boxes.map((list, rowIndex) =>
                  <li key={rowIndex}>

                        <ul style={{display: 'flex'}}>
                            {list.boxes.map((item, columnIndex) =>
                                <li key={columnIndex}>
                                    
                                    <button 
                                        id =  {rowIndex+ '' + columnIndex}
                                        onClick={() => {this.handelClick(rowIndex, columnIndex)}} 
                                        style={{backgroundColor: `${this.state.boxColor}`}}>
                                        {item}                          
                                    </button>
                                </li>)}
                            </ul>  

                    </li>)}
                </ul>
            </div>
            </>
        )
    }
}
function mapStateToProps(state){
    return {
        boxes: state.boxes,
        boxState: state.boxState,
        boxColor: state.boxColor
    }
}
export default connect(mapStateToProps)(Boxes)