import React from 'react';
import LoginForm from '../../components/Login/LoginForm.jsx';
import RegisterForm from '../../components/Register/RegisterForm.jsx';
import '../../styles/styles.css';

function HomePage() {
  return (
    <div className="home-page">
      <LoginForm />
      <RegisterForm />
    </div>
  );
}

export default HomePage;
