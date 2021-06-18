import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import axiosWithAuth from './helpers/axiosWithAuth';
import Login from "./components/Login";
import PrivateRoute from './components/PrivateRoute';
import BubblePage from './components/BubblePage';
import "./styles.scss";

function App() {
  const logout = (e) => {
    e.preventDefault();
    window.localStorage.removeItem('token');
    window.location.href = '/';
  }
    
  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <button data-testid="logoutButton" onClick={logout}>logout</button>
        </header> 

        <Route exact path="/" component={Login} />
	<PrivateRoute exact path='/bubbles' component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute
//2. Build the logout button to remove the localStorage Item.
