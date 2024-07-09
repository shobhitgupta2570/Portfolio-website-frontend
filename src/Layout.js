import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './features/navbar/Navbar1';
// import Navbar from './components/Navbar'; // Adjust the import based on your Navbar component location

const Layout = ({ children }) => {
  const location = useLocation();
  const isNotFoundPage = location.pathname === '*';

  return (
    <>
      {!isNotFoundPage && <Navbar />}
      {children}
    </>
  );
};

export default Layout;
