import React, {Component} from 'react';
import {connect} from 'react-redux';
import './App.css';
import Child from './component/Child'

import 

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      propOne: 'one',
      propTwo: 'Two'
    }
  }

  handlChange = (e) => {
    this.setState({propOne: e.target.value})
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
         <div>{this.state.propOne}</div>
         <div>{this.props.a}</div>
        <div>
        <input type='text' onChange={this.props.handleChangePropOne}></input>
        <div>{this.props.c}</div>
        <button>Add</button>
        </div>

         <Child/> 
        </header>
      </div>
    );
  }

  }

  const mapStateToPorps = (state) => {
    return {
      a: state.propOne,
    }
}
  const mapDispatchToProps = (dispatch) => {
    return {
      handleInput: (e)=> dispatch(changePropOne(e.target.value))
    }
  }

export default connect(mapStateToPorps,mapDispatchToProps,null)(App);
