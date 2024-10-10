import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav style={navbarStyle}>
    <ul style={navListStyle}>
      <li style={navItemStyle}>
        <Link to="/" style={linkStyle}>Home</Link>
      </li>``
      <li style={navItemStyle}>
        <Link to="/search" style={linkStyle}>Search Products</Link>
      </li>
    </ul>
  </nav>
);


const navbarStyle = {
  backgroundColor: '#333',
  padding: '10px',
};

const navListStyle = {
  listStyleType: 'none',
  margin: 0,
  padding: 0,
  display: 'flex',
};

const navItemStyle = {
  marginRight: '20px',
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '16px',
};

export default Navbar;
