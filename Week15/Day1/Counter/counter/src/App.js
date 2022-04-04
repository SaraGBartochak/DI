import logo from './logo.svg';
import './App.css';
import React from 'react';
import Counter from './Counter';
import ErrorBoundry from './ErrorBoundry'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ErrorBoundry />
        <Counter />
        <ErrorBoundry />
      </header>
    </div>
  );
}

export default App;
