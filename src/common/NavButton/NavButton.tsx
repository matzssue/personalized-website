import { NavLink } from 'react-router-dom';

import styles from './NavButton.module.scss';
type NavButton = {
  text: string;
  to: string;
};

export const NavButton = ({ text, to }: NavButton) => (
  <NavLink className={styles['nav-button']} to={to}>
    {text}
  </NavLink>
);
