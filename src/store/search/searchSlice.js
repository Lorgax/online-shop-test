import { createSlice } from '@reduxjs/toolkit'

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    search: ''
  },
  reducers: {
    savingSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { savingSearch } = searchSlice.actions
