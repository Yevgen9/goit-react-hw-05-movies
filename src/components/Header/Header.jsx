import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.scss';
import Logo from '../../images/logo-header.png';

const Header = () => {
  return (
    <header>
      {/* <Link to="/"> */}
      <nav className={s.nav}>
        <div className={s.logo}>
          <img src={Logo} alt={Logo} width="70" />
        </div>
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
