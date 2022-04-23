import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Nav from './components/Nav';
import Mountain from './components/Mountain';
import Beach from './components/Beach';
import Bird from './components/Bird';
import Food from './components/Food';
import SearchBox from './components/SearchBox';
import './App.css';

class App extends React.Component {

  render(){

    return (

      <div>
      <h1 style={{fontFamily: "Josefin Sans, Helvetica, sans-serif", fontSize: "70px", margin: "30px", textAlign: "center"}}>Snap Shot</h1>

      <SearchBox />

      <Nav />

      <Routes>
        <Route path='/' element={<Mountain />} />
        <Route path='/mountain' element={<Mountain />} />
        <Route path='/beach' element={<Beach />} />
        <Route path='/bird' element={<Bird />} />
        <Route path='/food' element={<Food />} />
      </Routes> 
     </div>

      );

  }
  
}

export default App;
