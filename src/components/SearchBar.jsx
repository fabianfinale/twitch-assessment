import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SearchBar = ({
  value,
  error,
  onChange: handleChange,
  onClick: handleSearch,
}) => {
  return (
    <React.Fragment>
      <div className='input-group'>
        <input
          className='form-control form-control-lg search-bar__input'
          type='search'
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          onKeyPress={(e) => (e.key === 'Enter' ? handleSearch() : null)}
          placeholder='Search'
        />

        <button className='btn btn-custom' onClick={handleSearch}>
          <FontAwesomeIcon icon='search' className='me-2' />
        </button>
      </div>
      {error && (
        <div className='alert alert-danger' role='alert'>
          {error}
        </div>
      )}
    </React.Fragment>
  );
};

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SearchBar;
