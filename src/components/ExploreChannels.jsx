import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadChannels, selectChannel } from '../store/channels';
import { useHistory } from 'react-router-dom';
import SearchBar from './SearchBar';
import ChannelList from './ChannelList';
import Loader from './Loader';

const ExploreChannels = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [searchCriteria, setSearchCriteria] = useState('');
  const [error, setError] = useState('');

  const channels = useSelector((state) => state.entities.channels.list);
  const loading = useSelector((state) => state.entities.channels.loading);

  const handleSearch = (searchCriteria) => {
    setError('');
    setSearchCriteria(searchCriteria);
  };

  const handleClick = () => {
    if (!searchCriteria)
      return setError('Please, insert a valid criteria on the search box');
    dispatch(loadChannels(searchCriteria));
  };

  const handleSelect = (id) => {
    dispatch(selectChannel(id));
    history.push('/channel-info');
  };

  return (
    <div className='container'>
      <h1 className='display-5 lh-1 my-3'>Find your favorite Twitch Channel</h1>
      <SearchBar
        value={searchCriteria}
        error={error}
        onChange={handleSearch}
        onClick={handleClick}
      />
      {loading ? (
        <Loader />
      ) : (
        <ChannelList channels={channels} onClick={handleSelect} />
      )}
    </div>
  );
};

export default ExploreChannels;
