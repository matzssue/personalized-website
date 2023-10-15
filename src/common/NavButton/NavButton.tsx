import { NavLink } from 'react-router-dom';
import styles from './NavButton.module.scss';
type NavButton = {
  to: string;
  text: string;
};

export const NavButton = ({ to, text }: NavButton) => {
  return (
    <NavLink className={styles['nav-button']} to={to}>
      {text}
    </NavLink>
  );
};
