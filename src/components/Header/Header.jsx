import React from 'react';
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li className={styles.li}><a className={styles.a} href="#qui-sommes-nous">Qui sommes-nous ?</a></li>
          <li className={styles.li}><a className={styles.a} href="#nos-services">Nos services</a></li>
          <li className={styles.li}><a className={styles.a} href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;