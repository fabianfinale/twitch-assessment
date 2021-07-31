import twitchApi from '../../twitchApi';
import { apiCallBegan, apiCallFailed, apiCallSucceed } from '../api';

const api = (store) => (next) => async (action) => {
  if (action.type !== apiCallBegan.type) return next(action);

  const { method, url, data, onStart, onSuccess, onError } = action.payload;
  const { dispatch } = store;

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
