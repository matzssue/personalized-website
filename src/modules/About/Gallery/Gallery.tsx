import { ImageSlider } from '../../../common/ImageSlider/ImageSlider';
import { spaceshipImages } from '../../../constants/spaceshipsImages';

import styles from './Gallery.module.scss';

export const Gallery = () => (
  <section id={styles['spaceships-gallery']}>
    <h2>Gallery</h2>
    <div className={styles.images}>
      <ImageSlider sliderData={spaceshipImages} />
    </div>
  </section>
);
