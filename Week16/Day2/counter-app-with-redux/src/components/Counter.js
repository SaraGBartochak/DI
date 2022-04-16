import React from 'react';
import {connect} from 'react-redux';
import  {decreaseCount, increaseCount} from '../actions/index';

class Counter extends React.Component { 
    render (){

        return (
            <>
            <button onClick={this.props.handleClickDec}>-</button>
            <h1>{this.props.counter_value}</h1>
            <button onClick={this.props.handleClickInc}>+</button>

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
        handleClickDec: () => dispatch(decreaseCount()),
        handleClickInc: () => dispatch(increaseCount())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)