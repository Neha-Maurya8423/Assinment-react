// src/components/Widget.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeWidget } from '../redux/dashboardSlice';
import { FaTimes } from 'react-icons/fa';

const Widget = ({ widget, categoryId }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeWidget({ categoryId, widgetId: widget.id }));
  };

  return (
    <div style={styles.widgetContainer}>
      <div style={styles.widgetHeader}>
        <h4 style={styles.widgetTitle}>{widget.name}</h4>
        <FaTimes style={styles.removeIcon} onClick={handleRemove} title="Remove Widget" />
      </div>
      <p>{widget.text}</p>
    </div>
  );
};

const styles = {
  widgetContainer: {
    border: '1px solid #ccc',
    borderRadius: '6px',
    padding: '15px',
    marginBottom: '15px',
    backgroundColor: '#fdfdfd',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    
  },
  widgetHeader: {
    display: 'flex',
    flex_dirction:'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px'
  },
  widgetTitle: {
    margin: 0,
    fontSize: '18px',
    color: '#333'
  },
  removeIcon: {
    cursor: 'pointer',
    color: '#e74c3c',
    fontSize: '18px'
  }
};

export default Widget;
