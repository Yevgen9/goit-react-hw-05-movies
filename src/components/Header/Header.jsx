import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.scss';

const Header = () => {
  return (
    <header>
      {/* <Link to="/"> */}
      {/* <div>Logo</div> */}
      <nav className={s.nav}>
        <NavLink className={s.navLink} to="/">
          Home
        </NavLink>
        <NavLink className={s.navLink} to="/movies">
          Movies
        </NavLink>
      </nav>
      {/* </Link> */}
    </header>
  );
};

export default Header;
