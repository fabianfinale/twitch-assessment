import axios from 'axios';

export const clientId = 'gr3ec77j3qb925ypyh818j65dog7tw';
export const redirectUri = 'http://localhost:3000/channels';
export const responseType = 'token+id_token';

const twitchApi = axios.create({
  baseURL: 'https://api.twitch.tv/helix',
  headers: {
    'client-id': clientId,
  },
});

export const setAuthToken = (accessToken) => {
  twitchApi.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
};

export default twitchApi;
