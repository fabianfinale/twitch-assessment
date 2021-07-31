import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SearchBar = ({
  value,
  onChange: handleChange,
  onClick: handleSearch,
}) => {
  return (
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
  );
};

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SearchBar;
