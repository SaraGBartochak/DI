import React, {useState} from 'react';
import './App.css';

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
  <p>{counter}</p>
  <button onClick={() => setCounter(counter + 1)}>Add</button>
  <button onClick={() => setCounter(counter - 1)}>Subtract</button>
</div>

  );
}

export default App;
