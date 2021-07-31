import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Channel = (props) => {
  const { channel, onClick: handleClick } = props;
  return (
    <div className='d-flex flex-column flex-lg-row justify-content-between align-items-center my-3 px-3 px-lg-5 py-3 bg-light border rounded-3 shadow-sm channel'>
      <div className='me-4 mb-4 mb-lg-0'>
        <img
          className='img-fluid img-thumbnail rounded-circle'
          src={channel.thumbnail_url}
          width='80px'
          alt={`Thumbnail of ${channel.display_name}`}
        />
      </div>
      <div className='d-flex flex-column align-items-start flex-grow-1'>
        <h2 className='display-6'>
          <FontAwesomeIcon icon='at' fixedWidth className='me-2' />
          {channel.display_name}
        </h2>
        <p className='text-muted fs-5'>
          <FontAwesomeIcon icon='broadcast-tower' fixedWidth className='me-2' />
          {channel.title}
        </p>
      </div>
      <button
        className='btn btn-custom btn-lg'
        onClick={() => handleClick(channel.id)}>
        <FontAwesomeIcon icon='check' fixedWidth className='me-2' />
        Select
      </button>
    </div>
  );
};

Channel.propTypes = {
  channel: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Channel;
