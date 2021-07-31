import { toast } from 'react-toastify';
import { apiCallFailed } from '../api';

const toaster = (store) => (next) => (action) => {
  if (action.type === apiCallFailed.type)
    toast.error(
      'Oops, a network error occurred. Please, verify your network and try again'
    );

  next(action);
};

export default toaster;
