import React from "react";

class BuggyCounter extends React.Component {
    constructor() {
        super()
        this.state = {
            counter: 0
        }
    }
    handleClick = ()=>{
        this.setState({counter: this.state.counter +1})
    }
    render (){
        if(this.state.counter === 5) {
            throw Error ('I crashed!')
        }

        return (
            < div id='counter'>
                <button onClick={this.handleClick}>Add</button>
                <>
                {this.state.counter}
                </>
            </div>
        )
    }
}

export default BuggyCounter;