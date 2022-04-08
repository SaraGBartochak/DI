import React from 'react';
// import NavLink from './Nav'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import ShopScreen from './ShopScreen';
import ErrorBoundary from './ErrorBoundary ';

function App() {
  return (
    <>
    <NavLink>
      <ErrorBoundary>
        <Route path='/' element={<HomeScreen/>} />
      </ErrorBoundary>
      
      <ErrorBoundary>
        <Route path='/' element={<ProfileScreen/>} />
      </ErrorBoundary>

      <ErrorBoundary>
        <Route path='/' element={<ShopScreen/>} />
      </ErrorBoundary> 
    </NavLink>

    </>
  );
}

export default App;
