import axios from 'axios';
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text:''
    }
  }
  
  handleInput = (e) =>{
    this.setState({text:e.target.value})
  }

  submit = async ()=> {
    
    const {text} = this.state;

    try{
      const retdata = await axios.post('http://localhost:8000/insert',(req,res)=>{
        this.state
      })
      console.log(retdata.data)
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
    <div className="App">
      <header className="App-header">
        <input type='text' onChange={this.handleInput}></input>
        <button>Send</button>
      </header>
    </div>
  );}
}

export default App;
