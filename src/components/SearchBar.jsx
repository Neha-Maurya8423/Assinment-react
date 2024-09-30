// src/components/SearchBar.jsx
import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <input
      type="text"
      placeholder="Search widgets..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      style={styles.searchInput}
    />
  );
};

const styles = {
  searchInput: {
    padding: '10px',
    width: '100%',
    marginBottom: '20px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px'
  }
};

export default SearchBar;
