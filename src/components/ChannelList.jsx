import React from 'react';
import PropTypes from 'prop-types';
import Channel from './Channel';

const ChannelList = (props) => {
  const { channels, onClick: handleClick } = props;
  return (
    <div>
      {channels.map((channel) => (
        <Channel key={channel.id} channel={channel} onClick={handleClick} />
      ))}
    </div>
  );
};

ChannelList.propTypes = {
  channels: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ChannelList;
