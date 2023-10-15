import { AboutMe } from './AboutMe/AboutMe';
import { Gallery } from './Gallery/Gallery';
import { MoviesList } from './MoviesList/MoviesList';
import { Technologies } from './Technologies/Technologies';

import styles from './About.module.scss';

export const About = () => (
  <div className={styles['about-container']}>
    <AboutMe />
    <Gallery />
    <Technologies />
    <MoviesList />
  </div>
);
