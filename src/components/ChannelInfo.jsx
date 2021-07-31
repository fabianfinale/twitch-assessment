import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import Loader from './Loader';

const ChannelInfo = () => {
  const channel = useSelector(
    (state) => state.entities.channels.selectedChannel
  );

  const loading = useSelector((state) => state.entities.channels.loading);

  return (
    <div className='container d-flex flex-column justify-content-center align-items-center text-center my-3 px-3 px-lg-5 py-3 bg-light border rounded-3 shadow-sm channel'>
      {loading ? (
        <Loader />
      ) : (
        <React.Fragment>
          <ReactTooltip />
          <div className='w-100 d-flex flex-column flex-md-row justify-content-between align-items-center pb-3 mb-4 border-bottom'>
            <h1 className='display-5 lh-1 my-3'>
              <FontAwesomeIcon
                icon={['fab', 'twitch']}
                fixedWidth
                className='me-2'
              />
              Channel Info
            </h1>
            <Link className='btn btn-lg btn-custom' to='/channels'>
              <FontAwesomeIcon icon='search' fixedWidth className='me-2' />
              Explore channels again
            </Link>
          </div>

          <div className='mb-4'>
            <img
              className='img-fluid img-thumbnail rounded-circle'
              src={channel.thumbnail_url}
              alt={`Thumbnail of ${channel.broadcaster_name}`}
            />
          </div>
          <h2
            className='display-6'
            data-tip='Twitch user display name of this channel owner'>
            <FontAwesomeIcon icon='at' fixedWidth className='me-2' />
            {channel.broadcaster_name}
          </h2>
          <p className='text-muted fs-4' data-tip='Title of the stream'>
            <FontAwesomeIcon
              icon='broadcast-tower'
              size='lg'
              fixedWidth
              className='me-2'
            />
            {channel.title}
          </p>
          <div className='g-4 align-self-stretch d-flex justify-content-evenly align-items-center border-top pt-2'>
            <div>
              <p className='text-muted fs-4' data-tip='Language of the channel'>
                <FontAwesomeIcon
                  icon='comment-dots'
                  size='lg'
                  fixedWidth
                  className='me-2'
                />
                {channel.broadcaster_language}
              </p>
            </div>
            <div>
              <p
                className='text-muted fs-4'
                data-tip='Name of the game being played on the channel'>
                <FontAwesomeIcon
                  icon='gamepad'
                  size='lg'
                  fixedWidth
                  className='me-2'
                />
                {channel.game_name ? channel.game_name : 'N/A'}
              </p>
            </div>
            <div>
              <p className='text-muted fs-4' data-tip='Stream delay in seconds'>
                <FontAwesomeIcon
                  icon='stopwatch'
                  size='lg'
                  fixedWidth
                  className='me-2'
                />
                <span>{channel.delay}</span>
              </p>
            </div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default ChannelInfo;
