import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ background: '#333', color: '#fff', padding: '10px' }}>
      <h1>
        <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>
          SkillBridge
        </Link>
      </h1>
      <ul style={{ listStyle: 'none', display: 'flex' }}>
        <li style={{ margin: '0 10px' }}>
          <Link to="/courses" style={{ color: '#fff', textDecoration: 'none' }}>Courses</Link>
        </li>
        <li style={{ margin: '0 10px' }}>
          <Link to="/login" style={{ color: '#fff', textDecoration: 'none' }}>Login</Link>
        </li>
        <li style={{ margin: '0 10px' }}>
          <Link to="/register" style={{ color: '#fff', textDecoration: 'none' }}>Register</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;