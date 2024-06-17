import React from 'react';
import { Link } from 'react-router-dom';
//import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/tasks">Task Manager</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
