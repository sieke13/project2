import React from 'react';
import LoginForm from '../../components/Login/LoginForm.jsx';
import RegisterForm from '../../components/Register/RegisterForm.jsx';
import '../../styles/styles.css';
import logo from '../../assets/logo.svg'; 


function HomePage() {
  return (
    <div className="home-page">
      <div className="logo-container">
        <img src={logo} alt="Logo" />
      </div>
      <h2>"Connect. Learn. Succeed. Together."</h2>
      <main>
        <LoginForm />
        <RegisterForm />
      </main>
    </div>
  );
}

export default HomePage;
