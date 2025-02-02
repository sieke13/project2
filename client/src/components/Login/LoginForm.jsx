import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../styles/styles.css';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const clickHandler = () => navigate ("/dashboard");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Logging',email,password)
    try {
      const response = await axios.post('/api/auth/login', { email, password }); //ERRORRRRR
      localStorage.setItem('token', response.data.token);
      console.log('Login successful:', response);
      setEmail('');
      setPassword('');
      await navigate('/dashboard');
      
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button type="submit" >Login</button>
    </form>
  );
}

export default LoginForm;


