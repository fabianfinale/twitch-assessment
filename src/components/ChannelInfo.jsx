import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useSelector } from 'react-redux';

const ChannelInfo = () => {
  const channel = useSelector(
    (state) => state.entities.channels.selectedChannel
  );

  return (
    <div className='container text-center my-3 px-3 px-lg-5 py-3 bg-light border rounded-3 shadow-sm channel'>
      <div className='mb-4'>
        <img
          className='img-fluid img-thumbnail rounded-circle'
          src={channel.thumbnail_url}
          alt={`Thumbnail of ${channel.broadcaster_name}`}
        />
      </div>
      <div className='text-center'>
        <h2 className='display-6'>
          <FontAwesomeIcon icon='at' fixedWidth className='me-2' />
          {channel.broadcaster_name}
        </h2>
        <p className='text-muted fs-4'>
          <FontAwesomeIcon
            icon='broadcast-tower'
            size='lg'
            fixedWidth
            className='me-2'
          />
          {channel.title}
        </p>
        <p className='text-muted fs-4'>
          <FontAwesomeIcon
            icon='language'
            size='lg'
            fixedWidth
            className='me-2'
          />
          {channel.broadcaster_language}
          <FontAwesomeIcon
            icon='gamepad'
            size='lg'
            fixedWidth
            className='ms-5 me-2'
          />
          {channel.game_name}
        </p>
      </div>
    </div>
  );
};

export default ChannelInfo;

// broadcaster_id: '501281';
// broadcaster_language: 'en';
// broadcaster_login: 'callofduty';
// broadcaster_name: 'Call of Duty';
// delay: 0;
// game_id: '512710';
// game_name: 'Call of Duty: Warzone';
// title: '$25,000 Warzone Tournament | Toronto Ultra $25k Payout Ft Aydan, Huskerrs, Tommey and more!';
