import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { clientId, redirectUri, responseType } from '../store/middleware/api';

const Welcome = () => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center h-100 px-4 text-center'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='70'
        height='70'
        fill='currentColor'
        className='bi bi-code-slash me-3'
        viewBox='0 0 16 16'>
        <path d='M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z' />
      </svg>
      <h1 className='display-4 fw-bold lh-1 mb-3'>Welcome to our assessment</h1>
      <p className='fs-4'>
        In order to utilize our app, your Twitch credentials will be requested.
      </p>
      <a
        className='btn btn-custom btn-lg d-block fs-4'
        href={`https://id.twitch.tv/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=openid&claims={"id_token":{"preferred_username":null,"picture":null}}'`}
        target='_self'>
        <FontAwesomeIcon icon={['fab', 'twitch']} size='lg' fixedWidth /> Get
        started
      </a>
    </div>
  );
};

export default Welcome;
