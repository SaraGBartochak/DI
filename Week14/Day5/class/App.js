import React from 'react';
import './App.css'
import User from './components/User'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      name: 'Ziv',
      email:'zivuch@gmail.com'
    }
  }
  componentDidMount(){
    // database -> count how many someone init my App
    // calc about
    alert('hello');
  }
  handleClick = () => {
    
  }
  render(){
    console.log(this.state.name,this.state.email);
    return(
      <div className="App">
        <header className="App-header">
         <User name={this.state.name} email={this.state.email}/>
         <button onClick={this.handleClick}>Click Me!</button>
        </header>
      </div>
    )
  }
}
export default App;