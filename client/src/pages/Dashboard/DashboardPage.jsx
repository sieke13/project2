import React from 'react';
import Forum from '../Forum/Forum.jsx';
import SearchBar from '../../components/SearchBar/SearchBar.jsx';
import '../../styles/styles.css';

function DashboardPage() {
  return (
    <div className="dashboard-page">
      <SearchBar />
      <Forum />
    </div>
  );
}

export default DashboardPage;
