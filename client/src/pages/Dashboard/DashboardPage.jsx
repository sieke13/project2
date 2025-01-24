import React from 'react';
import Forum from '../../components/Forum/Forum.jsx';
import SearchBar from '../../components/SearchBar/SearchBar.jsx';

function DashboardPage() {
  return (
    <div className="dashboard-page">
      <SearchBar />
      <Forum />
    </div>
  );
}

export default DashboardPage;
