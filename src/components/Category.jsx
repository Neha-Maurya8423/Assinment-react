import React, { useState } from 'react';
import Widget from './Widget';
import AddWidgetModal from './AddWidgetModal';

const Category = ({ category, searchTerm }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredWidgets = category.widgets.filter(widget =>
    widget.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    widget.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={styles.categoryContainer}>
      <div style={styles.header}>
        <h2>{category.name}</h2>
        <button onClick={() => setIsModalOpen(true)} style={styles.addButton}>
          + Add Widget
        </button>
      </div>
      <div style={styles.widgetsList}>
        {filteredWidgets.length > 0 ? (
          filteredWidgets.map(widget => (
            <Widget key={widget.id} widget={widget} categoryId={category.id} />
          ))
        ) : (
          <p style={styles.noWidgetsText}>No widgets found.</p>
        )}
      </div>
      <AddWidgetModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        categoryId={category.id}
      />
    </div>
  );
};

const styles = {
  categoryContainer: {
   
    borderRadius: '8px',
    padding: '20px',
    marginBottom: '25px',
    backgroundColor: '#f0f8ff'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '15px'
  },
  addButton: {
    padding: '8px 14px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px'
  },
  widgetsList: {
    marginTop: '10px'
  },
  noWidgetsText: {
    color: '#555',
    fontStyle: 'italic'
  }
};

export default Category;
