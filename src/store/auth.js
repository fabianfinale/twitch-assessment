import { createSlice } from '@reduxjs/toolkit';
import jwtDecode from 'jwt-decode';
import { setAuthToken } from './middleware/api';

const slice = createSlice({
  name: 'auth',
  initialState: {
    accessToken: '',
    user: {},
  },
  reducers: {
    userAuthenticated: (auth) => {
      try {
        const accessToken = localStorage.getItem('accessToken');
        const idToken = localStorage.getItem('idToken');

        auth.accessToken = accessToken;
        auth.user = jwtDecode(idToken);
        setAuthToken(accessToken);
      } catch (error) {}
    },
    userLoggedOut: (auth) => {
      auth.accessToken = '';
      auth.user = {};
      localStorage.removeItem('accessToken');
      localStorage.removeItem('idToken');
      window.location = '/';
    },
  },
});

export default slice.reducer;

export const { userAuthenticated, userLoggedOut } = slice.actions;
