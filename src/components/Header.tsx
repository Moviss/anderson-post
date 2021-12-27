import React from 'react';
import styles from './Header.module.scss';
import hamburger from '../images/hamburger.svg';
import logo from '../images/logo.png';
import search from '../images/search-icon.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__hamburger}>
        <img src={hamburger} alt="Menu button"/>
      </div>
      <div className={styles.header__logo}>
        <img src={logo} alt="Logo"/>
      </div>
      <nav className={styles.header__menu}>
        <ul className={styles.nav}>
          <li className={styles.nav__item}>Newsletter</li>
          <li className={styles.nav__item}>Sign In</li>
          <li className={`${styles.nav__item} ${styles['nav__item--subscribe']}`}>Subscribe</li>
        </ul>
      </nav>
      <div className={styles.header__search}>
        <img src={search} alt="Looking glass"/>
      </div>
    </header>
  );
};

export default Header;
