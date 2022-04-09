import logo from './logo.svg';
import './App.css';
import BuggyCounter from './components/BuggyCounter'
import ErrorBoundary from './components/ErrorBoundary'


function App() {
  return (
    <div className="App">
      <header className="App-header">
      {/* Expected to crash both */}
       <ErrorBoundary>
         <BuggyCounter/>
         <br/>
         <BuggyCounter/>
       </ErrorBoundary>
      {/* end here */}

    {/* Part 2 */}
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>

      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      {/* End part 2 */}

      {/* Part 3 */}

      <BuggyCounter/>

      
      </header>
    </div>
  );
}

export default App;
