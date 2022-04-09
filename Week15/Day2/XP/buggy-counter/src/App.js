import logo from './logo.svg';
import './App.css';
import BuggyCounter from './components/BuggyCounter'
import ErrorBoundary from './components/ErrorBoundary'
import FavColor from './components/FavColor'
import Child from './components/Child';


function App() {
  return (
   <>
      {/* Expected to crash both */}
       {/* <ErrorBoundary>
         <BuggyCounter/>
         <br/>
         <BuggyCounter/>
       </ErrorBoundary> */}
      {/* end here */}

    {/* Part 2 */}
      {/* <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>

      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary> */}
      {/* End part 2 */}

      {/* Part 3 */}

      {/* <BuggyCounter/> */}

      {/* Color */}
      {/* <FavColor /> */}
      {/* End Color */}

      {/* Part 3 */}
      <Child />
      </>

  );
}

export default App;
