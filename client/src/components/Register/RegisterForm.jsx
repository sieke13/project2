import React, { useState } from 'react';
import axios from 'axios';
import  { useNavigate } from 'react-router-dom';
import '../../styles/styles.css';

function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const clickHandler = () => navigate ("/dashboard");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/auth/register', { email, password }); 
      console.log('User registered:', response)
      setEmail('');
      setPassword('');
      await navigate('/dashboard');
    
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Register</button>
    </form>
  );
}



export default RegisterForm;


