import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';

import {
  fetchNewsletters,
  createNewsletter,
  updateNewsletter,
  deleteNewsletter,
} from './newslettersAction';

/*
interface Newsletter {
  title: String;
}
*/

interface NewslettersState {
  // newsletters: Newsletter[];
  newslettersList: any;
  loading: boolean;
  error: string | null;
}

const initialState: NewslettersState = {
  newslettersList: null,
  loading: false,
  error: null,
};

const newslettersSlice = createSlice({
  name: 'newsletters',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetch newsletters list
      .addCase(fetchNewsletters.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNewsletters.fulfilled, (state, action) => {
        state.loading = false;
        state.newslettersList = action.payload;
      })
      .addCase(fetchNewsletters.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      })
      // create newsletter
      .addCase(createNewsletter.fulfilled, (state, action) => {
        state.loading = false;
        state.newslettersList = action.payload;
      })
      // update newsletter
      .addCase(updateNewsletter.fulfilled, (state, action) => {
        state.loading = false;
        state.newslettersList = action.payload;
      })
      // delete newsletter
      .addCase(deleteNewsletter.fulfilled, (state, action) => {
        state.loading = false;
        state.newslettersList = action.payload;
      });
  },
});

export default newslettersSlice.reducer;