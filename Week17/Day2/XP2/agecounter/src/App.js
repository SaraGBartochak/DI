import React from 'react';
import {connect} from 'react-redux';
import {onAgeUp, onAgeDown} from './redux/actions'

class App extends React.Component {
  render() {

    return (
      
      <>
      <div style={{textAlign: "center"}}>
      <span>Your age: {this.props.age} </span>
      <button onClick={this.props.onAgeUp}>Age Up</button>
      <button onClick={this.props.onAgeDown}>Age Down</button>

      </div>
      </>

      );
  }
}
const mapStateToProps = (state) => {
return {
  age: state.age}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAgeUp: ()=> dispatch(onAgeUp()),
    onAgeDown: ()=> dispatch(onAgeDown())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
