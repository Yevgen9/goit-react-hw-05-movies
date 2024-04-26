import React from 'react';
import s from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={s.footer}>
      <p className={s.text}>&copy; Copyright</p>
    </footer>
  );
};

export default Footer;
