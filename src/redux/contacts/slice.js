import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
  },
  reducers: {
    addContactAction: {
      prepare: (name, number) => {
        const contacts = {
          name,
          number,
          id: nanoid(),
        };
        return { payload: contacts };
      },
      reducer: (state, { payload }) => {
        state.contacts.push(payload);
      },
    },
    removeContactAction: (state, { payload }) => {
      state.contacts = state.contacts.filter(el => el.id !== payload);
    },
  },
});

export const { addContactAction, removeContactAction } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
