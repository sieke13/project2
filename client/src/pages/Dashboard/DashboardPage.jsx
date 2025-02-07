import React, { useState } from 'react';
import Forum from '../../components/Forum/Forum.jsx';
import SearchBar from '../../components/SearchBar/SearchBar.jsx';
import '../../styles/styles.css';
import "bootstrap/dist/css/bootstrap.min.css";
import logo from '../../assets/logo.svg'; //

const posts = [
  { title: "First Post", content: "This is the first post content." },
  { title: "Second Post", content: "This is the second post content." },
  { title: "Third Post", content: "This is the third post content." },
];

const DashboardPage = () => {
  const [activeSection, setActiveSection] = useState('posts');

  return (
    <div className="dashboard-page">
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg" style={{ background: 'linear-gradient(rgba(106, 13, 173, 0.8), rgba(250, 247, 247, 0.6))' }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="Classm8 Logo" style={{ height: '40px' }} />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item me-2">
                <button className="nav-link btn btn-primary text-white" onClick={() => setActiveSection('posts')}>Posts</button>
              </li>
              <li className="nav-item">
                <button className="nav-link btn btn-primary text-white" onClick={() => setActiveSection('wikipedia')}>Wikipedia Search</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mt-5">
        {activeSection === 'posts' && (
          <>

            {/* Forum Component */}
            <Forum />
          </>
        )}

        {activeSection === 'wikipedia' && (
          <SearchBar />
        )}
      </div>
    </div>
  );
};

export default DashboardPage;