import axios from 'axios';
import { apiCallBegan, apiCallFailed, apiCallSucceed } from '../api';

export const clientId = 'gr3ec77j3qb925ypyh818j65dog7tw';
export const redirectUri = 'http://localhost:3000/redirect';
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

const api = (store) => (next) => async (action) => {
  if (action.type !== apiCallBegan.type) return next(action);

  const { dispatch } = store;
  const { method, url, data, onStart, onSuccess, onError } = action.payload;

  if (onStart) dispatch({ type: onStart });
  next(action);

  try {
    const { data: responseData } = await twitchApi.request({
      url,
      method,
      data,
    });

    dispatch(apiCallSucceed(responseData));
    if (onSuccess) dispatch({ type: onSuccess, payload: responseData });
  } catch (error) {
    dispatch(apiCallFailed(error.message));
    if (onError) dispatch({ type: onError, payload: error.message });
  }
};

export default api;
