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
            {/* Bootstrap Carousel for Posts */}
            <div id="postCarousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                {posts.map((post, index) => (
                  <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
                    <div className="d-flex justify-content-center align-items-center" style={{ height: "200px", background: "#f8f9fa" }}>
                      <div>
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#postCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#postCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
              </button>
            </div>

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