import { starWarsInformations } from '../../constants/starWarsInformations';

import styles from './Informations.module.scss';

export const Informations = () => (
  <section id={styles.informations}>
    <h2>Three things you should known about star wars </h2>
    <ul>
      {starWarsInformations.map(({ content, title }) => (
        <li key={title}>
          <p>{title}</p>
          <span>{content}</span>
        </li>
      ))}
    </ul>
  </section>
);
