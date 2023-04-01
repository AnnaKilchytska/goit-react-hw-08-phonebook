import { createSlice } from '@reduxjs/toolkit';
import { logOut } from './auth/operations';
import {
  addContact,
  deleteContact,
  editContact,
  fetchContacts,
} from './operations';

const handlePending = state => {
  // state.isLoading = true;
  return {
    ...state,
    isLoading: true,
  };
};

const handleRejected = (state, action) => {
  // state.isLoading = false;
  // state.error = action.payload;
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
        // state.isLoading = false;
        // state.error = null;
        // state.items = action.payload;
        console.log('fetching', action.payload);
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
        // state.isLoading = false;
        // state.error = null;
        // state.items = [...state.items, action.payload];
        // state.items.push(action.payload);
        return {
          ...state,
          isLoading: false,
          items: [action.payload, ...state.items],
        };
      })
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(deleteContact.fulfilled, (state, action) => {
        // state.isLoading = false;
        // state.error = null;
        console.log('payload on delete', action.payload);
        // const index = state.items.findIndex(
        //   contact => contact.id === action.payload.id
        // );
        // state.items.splice(index, 1, action.payload);
        // state.items = state.items.filter(item => item.id !== action.payload.id);

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
        console.log('payload editing', action.payload);
        state.items[action.payload.id].name = action.payload.name
          ? action.payload.name
          : state.items[action.payload.id].name;
        state.items[action.payload.id].number = action.payload.number
          ? action.payload.number
          : state.items[action.payload.id].number;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
