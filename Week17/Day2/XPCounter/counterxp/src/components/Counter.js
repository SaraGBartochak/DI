import React from "react";
import {connect} from 'react-redux';
import {decrement, increment} from '../redux/actions'


class Counter extends React.Component { 

    incrementIfOdd = ()=>{
        if(this.props.count % 2 !== 0) {
            this.props.increment()
        }
    }

    incrementAsync = ()=> {
        setTimeout(this.props.increment(), 1000)
    };      

    render (){
        
        return (
            <>
            <div>
                {this.props.count}
            </div>
            <div>
                <button onClick={this.props.decrement}>-</button>
                <button onClick={this.props.increment}>+</button>
            </div>
            <div>
                <button onClick={this.props.incrementIfOdd}>Increment if odd</button>
            </div>
            <div>
                <button onClick={this.props.incrementAsync}>Increment if Async</button>
            </div>
            </>
)
    }
}

const mapStateToProps = (state) => {
    return {
        counter_value: state.count
    }

}

const mapDispatchToProps = (dispatch) => { 

    return {
        decrement: () => dispatch(decrement()),
        increment: () => dispatch(increment())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)