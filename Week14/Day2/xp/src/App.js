import logo from './logo.svg';
import './App.css';

import React from 'react';
import TextH1 from './Components/TextH1';
import DisplayHello from './Components/DisplayHello';
import UserFavoriteColors from './Components/UserFavoriteColors'
import Exercise4 from './Exercise4';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TextH1 />
        <DisplayHello />
        <UserFavoriteColors />
        <Exercise4 />
      </header>
    </div>
  );
}

export default App;
