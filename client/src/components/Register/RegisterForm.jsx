
import React, { useState } from 'react';
import axios from 'axios';
import  { useNavigate } from 'react-router-dom';
import '../../styles/styles.css';

function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // State for error messages

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Password confirmation validation
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match. Please try again.");
      return;
    }

    try {
      const response = await axios.post('/api/auth/register', { email, password });
      console.log('Registration successful:', response);
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setErrorMessage(''); // Clear previous errors
    } catch (error) {
      console.error('Registration failed:', error);

      // Handling different errors
      if (error.response) {
        if (error.response.status === 400) {
          setErrorMessage("This email is already in use. Try another one.");
        } else {
          setErrorMessage("Registration failed. Please check your details and try again.");
        }
      } else {
        setErrorMessage("Server error. Please try again later.");
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
          required 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
          required 
        />
        <input 
          type="password" 
          placeholder="Confirm Password" 
          value={confirmPassword} 
          onChange={(e) => setConfirmPassword(e.target.value)}
          required 
        />
        <button type="submit">Register</button>
      </form>

      {/* Show error message if registration fails */}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}



export default RegisterForm;


