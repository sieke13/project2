import React from 'react';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import './HomePage.css';


function HomePage() {
  return (
    <div className="home-page">
      <LoginForm />
      <RegisterForm />
    </div>
  );
}

export default HomePage;
