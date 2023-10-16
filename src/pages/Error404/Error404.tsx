import { NavLink } from 'react-router-dom';

import styles from './Error404.module.scss';

export const Error404 = () => (
  <div className={styles['error404-container']}>
    <h1>404</h1>
    <p>Page not found</p>
    <NavLink to={'/'}>Back to home page</NavLink>
  </div>
);
