// src/components/AddWidgetModal.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addWidget } from '../redux/dashboardSlice';

const AddWidgetModal = ({ isOpen, onClose, categoryId }) => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (name.trim() === '' || text.trim() === '') {
      alert('Please fill in all fields.');
      return;
    }
    dispatch(addWidget({ categoryId, name, text }));
    setName('');
    setText('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div style={styles.modalOverlay}>
      <div style={styles.modalContent}>
        <h3>Add New Widget</h3>
        <input
          type="text"
          placeholder="Widget Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />
        <textarea
          placeholder="Widget Text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={styles.textarea}
        />
        <div style={styles.buttonContainer}>
          <button onClick={handleAdd} style={{ ...styles.button, ...styles.addButton }}>
            Add
          </button>
          <button onClick={onClose} style={{ ...styles.button, ...styles.cancelButton }}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    flex:'flex-wrap',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: '25px',
    borderRadius: '8px',
    width: '400px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px'
  },
  textarea: {
    width: '100%',
    padding: '10px',
    height: '80px',
    marginBottom: '15px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
    resize: 'vertical'
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  button: {
    padding: '10px 16px',
    marginLeft: '10px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px'
  },
  addButton: {
    backgroundColor: '#28a745',
    color: '#fff'
  },
  cancelButton: {
    backgroundColor: '#6c757d',
    color: '#fff'
  }
};

export default AddWidgetModal;
