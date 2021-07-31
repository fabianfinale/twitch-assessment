import React from 'react';
import PropTypes from 'prop-types';

const Loader = (props) => {
  const { message } = props;

  return <div className='loader'>{message}...</div>;
};

Loader.propTypes = {
  message: PropTypes.string.isRequired,
};

Loader.defaultProps = {
  message: 'Loading',
};

export default Loader;
