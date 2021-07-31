import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { clientId, setAuthToken } from '../twitchApi';

const slice = createSlice({
  name: 'auth',
  initialState: {
    accessToken: '',
    user: {},
  },
  reducers: {
    userAuthenticated: (auth, action) => {
      const accessToken = localStorage.getItem('accessToken');
      const idToken = localStorage.getItem('idToken');
      auth.accessToken = accessToken;
      auth.user = jwtDecode(idToken);
      setAuthToken(accessToken);
    },
    userLoggedOut: () => {
      localStorage.removeItem('token');
    },
  },
});

export default slice.reducer;

export const { userAuthenticated } = slice.actions;

export const logout = async (accessToken) => {
  await axios.post(
    `https://id.twitch.tv/oauth2/revoke?client_id=${clientId}&token=${accessToken}`
  );
};
