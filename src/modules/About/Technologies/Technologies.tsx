import { technologies } from '../../../constants/technologies';

import styles from './Technologies.module.scss';
export const Technologies = () => (
  <section id={styles.technologies}>
    <h2>Technologies</h2>
    <ul>
      {technologies.map(({ icon, name }) => (
        <li key={name}>
          {icon}
          <span>{name}</span>
        </li>
      ))}
    </ul>
  </section>
);
