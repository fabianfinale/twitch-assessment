import React, { useCallback, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import words from 'lodash/words';
import SearchBar from './SearchBar';
import ChannelList from './ChannelList';
import { useDispatch, useSelector } from 'react-redux';
import { userAuthenticated } from '../store/auth';
import { loadChannels, selectChannel } from '../store/channels';

const Home = () => {
  const [searchCriteria, setSearchCriteria] = useState('');

  const { hash } = useLocation();
  const hashArray = words(hash, /[^&=]+/g);
  const accessToken = hashArray[hashArray.indexOf('#access_token') + 1];
  const idToken = hashArray[hashArray.indexOf('id_token') + 1];

  const dispatch = useDispatch();
  const history = useHistory();

  const fetchLoginData = useCallback(() => {
    localStorage.setItem('idToken', idToken);
    localStorage.setItem('accessToken', accessToken);
    console.log('I was called');
  }, [accessToken, idToken]);

  useEffect(() => {
    fetchLoginData();
    dispatch(userAuthenticated());
  }, [dispatch, fetchLoginData]);

  const channels = useSelector((state) => state.entities.channels.list);

  const handleSearch = async (searchCriteria) => {
    setSearchCriteria(searchCriteria);
  };

  const handleClick = () => {
    dispatch(loadChannels(searchCriteria));
  };

  const handleSelect = (id) => {
    dispatch(selectChannel(id));
    history.push('/channel-info');
  };

  return (
    <div className='container'>
      <h1>Hi there</h1>
      <SearchBar
        value={searchCriteria}
        onChange={handleSearch}
        onClick={handleClick}
      />
      <ChannelList channels={channels} onClick={handleSelect} />
    </div>
  );
};

export default Home;
