import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import api from './middleware/api';
import toaster from './middleware/toaster';
import reducer from './reducer';

const store = () =>
  configureStore({
    reducer,
    middleware: [...getDefaultMiddleware(), api, toaster],
  });

export default store;
