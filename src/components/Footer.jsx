import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer mt-auto py-3 bg-light text-center'>
      <div className='container'>
        <span className='text-black-50'>
          Copyright &copy; {new Date().getFullYear()} -{' '}
          <Link
            to={{
              pathname: 'https://github.com/fabianfinale',
            }}
            target='_blank'>
            Fabian Finalé Franqui
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
