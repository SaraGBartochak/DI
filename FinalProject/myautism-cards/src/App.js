import React from 'react';
import {Routes, Route} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
      </header>
    </div>
  );
}

export default App;
