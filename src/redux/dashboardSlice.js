// src/redux/dashboardSlice.js
import { createSlice } from '@reduxjs/toolkit';
import dashboardData from '../data/dashboardData.json';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  categories: dashboardData.categories
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    addWidget: (state, action) => {
      const { categoryId, name, text } = action.payload;
      const category = state.categories.find(cat => cat.id === categoryId);
      if (category) {
        category.widgets.push({
          id: uuidv4(),
          name,
          text
        });
      }
    },
    removeWidget: (state, action) => {
      const { categoryId, widgetId } = action.payload;
      const category = state.categories.find(cat => cat.id === categoryId);
      if (category) {
        category.widgets = category.widgets.filter(widget => widget.id !== widgetId);
      }
    },
    // Optional: Add reducers for adding/removing categories
  }
});

export const { addWidget, removeWidget } = dashboardSlice.actions;
export default dashboardSlice.reducer;

