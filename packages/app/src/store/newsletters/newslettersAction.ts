import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchNewsletters = createAsyncThunk<string[], void, { rejectValue: string }>(
  'newsletters/fetchNewsletters',
  async (_, thunkAPI) => {
    try {
      const response = await  axios.get('http://localhost:3001/newsletters');
      return response.data;

    } catch (error) {
      return thunkAPI.rejectWithValue('Failed to fetch newsletters.');
    }
  }
);

export const createNewsletter = createAsyncThunk<string[], void, { rejectValue: string }>(
  'newsletters/createNewsletter',
  async (data, thunkAPI) => {
    try {
      const response = await  axios.post('http://localhost:3001/newsletters', data);
      return response.data;

    } catch (error) {
      return thunkAPI.rejectWithValue('Failed to add newsletter.');
    }
  }
);

export const updateNewsletter = createAsyncThunk<string[], void, { rejectValue: string }>(
  'newsletters/updateNewsletter',
  async (data, thunkAPI) => {
    try {
      const response = await  axios.patch('http://localhost:3001/newsletters', data);
      return response.data;

    } catch (error) {
      return thunkAPI.rejectWithValue('Failed to update newsletter.');
    }
  }
);

export const deleteNewsletter = createAsyncThunk<string[], void, { rejectValue: string }>(
  'newsletters/deleteNewsletter',
  async (data, thunkAPI) => {
    try {
      const response = await  axios.patch('http://localhost:3001/newsletters', data);
      return response.data;

    } catch (error) {
      return thunkAPI.rejectWithValue('Failed to delete newsletter.');
    }
  }
);
