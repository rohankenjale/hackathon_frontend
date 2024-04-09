import React from 'react';
import { Link } from 'react-router-dom'; 

function Navbar() {
  const navbarStyle = {
    backgroundColor: '#333',
    color: '#fff', 
  };
  return (
    <nav className="container-fluid" style={navbarStyle}>
      <ul>
        <li><strong>Frontend Fiesta</strong></li>
      </ul>
      <ul>
        <li><Link to="/users">Users</Link></li> 
        <li><Link to="/">Posts</Link></li> 
      </ul>
    </nav>
  );
}

export default Navbar;
