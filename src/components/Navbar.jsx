import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { userLoggedOut } from '../store/auth';

const Navbar = () => {
  const dispatch = useDispatch();
  const { picture, preferred_username: username } = useSelector(
    (state) => state.auth.user
  );

  const handleLogout = () => {
    dispatch(userLoggedOut());
  };

  return (
    <header>
      <nav className='navbar navbar-expand-md fixed-top navbar-dark bg-dark'>
        <div className='container-fluid pe-4'>
          {username && (
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarCollapse'
              aria-controls='navbarCollapse'
              aria-expanded='false'
              aria-label='Toggle navigation'>
              <span className='navbar-toggler-icon'></span>
            </button>
          )}
          <div className='d-flex align-items-center fs-4 text-white mb-0'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='30'
              height='30'
              fill='currentColor'
              className='bi bi-code-slash me-3'
              viewBox='0 0 16 16'>
              <path d='M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z' />
            </svg>
            <Link className='navbar-brand' to='/channels'>
              Twitch Assessment
            </Link>
          </div>
          {username && (
            <div className='collapse navbar-collapse' id='navbarCollapse'>
              <ul className='navbar-nav ms-auto'>
                <li className='nav-item'>
                  <NavLink className='nav-link' exact to='/channels'>
                    Explore Channels
                  </NavLink>
                </li>

                <li className='nav-item dropdown'>
                  <Link
                    className='nav-link dropdown-toggle'
                    to='#'
                    id='navbarDropdown'
                    role='button'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'>
                    {username}
                    <img
                      className='rounded-circle ms-2'
                      src={picture}
                      alt='User avatar'
                      height='30px'
                    />
                  </Link>
                  <ul
                    className='dropdown-menu dropdown-menu-dark'
                    aria-labelledby='navbarDropdown'>
                    <li>
                      <button className='dropdown-item' onClick={handleLogout}>
                        <FontAwesomeIcon icon='sign-out-alt' /> Logout
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
