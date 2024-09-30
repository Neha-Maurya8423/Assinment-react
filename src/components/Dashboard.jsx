// src/components/Dashboard.jsx
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Category from './Category';
import SearchBar from './SearchBar';

const Dashboard = () => {
  const categories = useSelector(state => state.dashboard.categories);
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div style={styles.dashboardContainer}>
      <h1 style={styles.title}>Dynamic Dashboard</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {categories.map(category => (
        <Category key={category.id} category={category} searchTerm={searchTerm} />
      ))}
    </div>
  );
};

const styles = {
  dashboardContainer: {
    
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '30px 20px'
  },
  title: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '30px'
  }
};

export default Dashboard;
