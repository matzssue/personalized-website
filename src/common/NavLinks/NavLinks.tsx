import { NavLink } from 'react-router-dom';

import { NavigationLinks } from '../../constants/navigationLinks';

import styles from './NavLinks.module.scss';

export const NavLinks = ({ navigationLinks }: { navigationLinks: NavigationLinks[] }) => (
  <ul className={styles['link-list']}>
    {navigationLinks.map(({ link, linkName }) => (
      <li key={linkName}>
        <NavLink to={`${link}`} className={({ isActive }) => (isActive ? styles.active : '')}>
          {linkName}
        </NavLink>
      </li>
    ))}
  </ul>
);
