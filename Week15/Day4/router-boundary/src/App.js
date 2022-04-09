import React from 'react';
import NavLink from './Components/NavLink'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route, Routes } from "react-router-dom";
import HomeScreen from './Components/HomeScreen';
import ProfileScreen from './Components/ProfileScreen';
import ShopScreen from './Components/ShopScreen';
import ErrorBoundary from './Components/ErrorBoundary ';
import PostList from './Components/PostList';
import Example1 from './Components/Example1';

function App() {
  return (
    <>
    <NavLink/>
      <ErrorBoundary>
        <Routes>
        <Route path='/' element={<HomeScreen/>} />
    
        <Route path='/profile' element={<ProfileScreen/>} />

        <Route path='/shop' element={<ShopScreen/>} />
        </Routes>
      </ErrorBoundary>

      {/* Part 2 */}
      <PostList />
      {/* End part 2 */}

      {/* Example1 */}
        <Example1 />
    </>
  );
}

export default App;
