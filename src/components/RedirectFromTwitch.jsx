import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import words from 'lodash/words';
import { userAuthenticated } from '../store/auth';
import Loader from './Loader';

const RedirectFromTwitch = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { hash } = useLocation();

  const fetchLoginData = useCallback(() => {
    if (
      !localStorage.getItem('idToken') &&
      !localStorage.getItem('accessToken')
    ) {
      const hashArray = words(hash, /[^&=]+/g);
      if (hashArray.length > 0) {
        const accessToken = hashArray[hashArray.indexOf('#access_token') + 1];
        const idToken = hashArray[hashArray.indexOf('id_token') + 1];
        localStorage.setItem('idToken', idToken);
        localStorage.setItem('accessToken', accessToken);
      }
    }
  }, [hash]);

  useEffect(() => {
    fetchLoginData();
    dispatch(userAuthenticated());
    history.push('/channels');
  }, [dispatch, fetchLoginData, history]);

  return <Loader message='Redirecting' />;
};

export default RedirectFromTwitch;
