import React from 'react';
import Forum from '../components/Forum';
import SearchBar from '../components/SearchBar';

function DashboardPage() {
  return (
    <div className="dashboard-page">
      <SearchBar />
      <Forum />
    </div>
  );
}

export default DashboardPage;
