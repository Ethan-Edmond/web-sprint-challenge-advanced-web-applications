//Task List:
//1. Build a PrivateRoute component that redirects if user is not logged in
import React from 'react';
import { Route } from 'react-router-dom';

function PrivateRoute(props){
  return (
    <Route {...props}/>
  )
};

export default PrivateRoute;
