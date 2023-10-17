import { Layout } from '../../common/Layout/Layout';
import { AboutMe } from '../../modules/About/AboutMe/AboutMe';
import { Gallery } from '../../modules/About/Gallery/Gallery';
import { MoviesList } from '../../modules/About/MoviesList/MoviesList';
import { Technologies } from '../../modules/About/Technologies/Technologies';

import styles from './AboutPage.module.scss';

const AboutPage = () => (
  <Layout>
    <div className={styles['about-container']}>
      <AboutMe />
      <Gallery />
      <Technologies />
      <MoviesList />
    </div>
  </Layout>
);
export default AboutPage;
