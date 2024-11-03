import React, { useState } from 'react';

const TestApi = () => {
  const [signupData, setSignupData] = useState({
    username: '',
    firstName: '',
    lastName: '',
    gender: 'male',
    email: '',
    password: '',
    allergies: '',
  });

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleSignup = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signupData),
      });

      const data = await response.json();
      console.log('Signup Response:', data);
    } catch (error) {
      console.error('Signup Error:', error);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();
      console.log('Login Response:', data);
    } catch (error) {
      console.error('Login Error:', error);
    }
  };

  return (
    <div>
      <h2>Test API</h2>
      <h3>Signup</h3>
      {/* Signup Form */}
      <input placeholder="Username" onChange={(e) => setSignupData({ ...signupData, username: e.target.value })} />
      <input placeholder="First Name" onChange={(e) => setSignupData({ ...signupData, firstName: e.target.value })} />
      <input placeholder="Last Name" onChange={(e) => setSignupData({ ...signupData, lastName: e.target.value })} />
      <select onChange={(e) => setSignupData({ ...signupData, gender: e.target.value })}>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <input placeholder="Email" onChange={(e) => setSignupData({ ...signupData, email: e.target.value })} />
      <input placeholder="Password" type="password" onChange={(e) => setSignupData({ ...signupData, password: e.target.value })} />
      <input placeholder="Allergies" onChange={(e) => setSignupData({ ...signupData, allergies: e.target.value })} />
      <button onClick={handleSignup}>Sign Up</button>

      <h3>Login</h3>
      {/* Login Form */}
      <input placeholder="Email" onChange={(e) => setLoginData({ ...loginData, email: e.target.value })} />
      <input placeholder="Password" type="password" onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} />
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
};

export default TestApi;
