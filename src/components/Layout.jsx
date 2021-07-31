import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = (props) => {
  return (
    <BrowserRouter>
      <Navbar />
      {props.children}
      <Footer />
    </BrowserRouter>
  );
};

export default Layout;
