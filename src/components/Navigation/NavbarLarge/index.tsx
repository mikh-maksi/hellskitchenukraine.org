import React from 'react';

import { NAVIGATION_MENU } from '../constants';
import { NavLink } from '../NavLink';

import styles from './styles.module.css';

interface NavbarLargeProps {}

export const NavbarLarge: React.FC<NavbarLargeProps> = () => (
  <nav className={styles.component}>
    <ul className={styles.list}>
      {NAVIGATION_MENU.map((path) => (
        <li key={path} className={styles.listItem}>
          <NavLink path={path} />
        </li>
      ))}
    </ul>
  </nav>
);
