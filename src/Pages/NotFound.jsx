import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h1>Page Not Found</h1>
      <p>Sorry, but the page you were trying to view does not exist.</p>
      <p>Go to the main page!</p>
      <NavLink to="/">Home</NavLink>
    </div>
  );
};

export default NotFound;
