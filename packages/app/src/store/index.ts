import createSagaMiddleware from '@redux-saga/core';
import { configureStore } from '@reduxjs/toolkit';
import rootReducers from './root-reducers';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {},
  middleware: [sagaMiddleware],
});

export default store;