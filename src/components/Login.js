import React, { useState, useEffect } from "react";
import axios from 'axios';

const Login = (props) => {
  const { push } = props.history;
  const [formVal, setFormVal] = useState({
    username: '',
    password: ''		// 
  });

  const [error, setError] = useState('');
  
  const handleChange = (e) => {
    setFormVal({
      ...formVal,
      [e.target.name]: e.target.value
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/login', formVal)
      .then(res => {
	setError('');
	window.localStorage.setItem('token', res.data.payload);
	push('/bubbles');
      })
      .catch(err => {
        setError('Username or Password are incorrect');
      });
  };
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route


  //replace with error state

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
	<form onSubmit={handleSubmit}>
	  <input
	    data-testid='username'	  
	    onChange={handleChange}
	    value={formVal.username}
	    type='text'
	    name='username'
	    placeholder='Username'
	  />
	  <input
	    data-testid='password'
	    onChange={handleChange}
	    value={formVal.password}
	    type='password'
	    name='password'
	    placeholder='Password'
	  />
	    <button>Login</button>
	</form>
      </div>
      <p data-testid="errorMessage" className="error">{error}</p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE data-testid="username" and data-testid="password"
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to Lambda / i<3Lambd4, save that token to localStorage.
