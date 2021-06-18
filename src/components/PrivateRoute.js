//Task List:
//1. Build a PrivateRoute component that redirects if user is not logged in
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute(props){
  return (
    localStorage.getItem('token') ?
      <Route {...props}/> :
      <Redirect to='/'/>
  )
};

export default PrivateRoute;
