import { interestingFacts } from '../../constants/InterestingFacts';

import styles from './InterestingFacts.module.scss';

export const InterestingFacts = () => (
  <section id={styles['interesting-facts']}>
    <h2>Three things you should known about star wars </h2>
    <ul>
      {interestingFacts.map(({ content, title }) => (
        <li key={title}>
          <p>{title}</p>
          <span>{content}</span>
        </li>
      ))}
    </ul>
  </section>
);
