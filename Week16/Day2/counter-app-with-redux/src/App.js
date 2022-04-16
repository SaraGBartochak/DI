import React from 'react';
import Counter from './components/Counter';
import {connect} from 'react-redux';
import './index.css';

class App extends React.Component{

  render(){

    return (
     <>
      <Counter />
     </>
    )
  }

}
export default App;
