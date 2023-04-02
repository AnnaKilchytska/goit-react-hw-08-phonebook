import { createSlice } from '@reduxjs/toolkit';
import { logOut } from './auth/operations';
import {
  addContact,
  deleteContact,
  editContact,
  fetchContacts,
} from './operations';

const handlePending = state => {
  return {
    ...state,
    isLoading: true,
  };
};

const handleRejected = (state, action) => {
  return {
    ...state,
    isLoading: false,
    error: action.payload,
  };
};

const contactsSlice = createSlice({
  // Ім'я слайсу
  name: 'contacts',
  // Початковий стан редюсера слайсу
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          error: null,
          items: [...action.payload.sort((a, b) => b.id - a.id)],
        };
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.rejected, handleRejected)
      .addCase(addContact.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          items: [action.payload, ...state.items],
        };
      })
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(deleteContact.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          error: null,
          items: state.items.filter(item => item.id !== action.payload.id),
        };
      })
      .addCase(logOut.fulfilled, state => {
        state.items = [];
        state.error = null;
        state.isLoading = false;
      })
      .addCase(editContact.fulfilled, (state, action) => {
        const current = state.items.find(item => item.id === action.payload.id);
        current.name = action.payload.name ? action.payload.name : current.name;
        current.number = action.payload.number
          ? action.payload.number
          : current.number;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
