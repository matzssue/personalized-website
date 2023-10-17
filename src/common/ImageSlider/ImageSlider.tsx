import { useState } from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

import { SpaceShip } from '../../constants/spaceshipsImages';

import styles from './ImageSlider.module.scss';

export const ImageSlider = ({ sliderData }: { sliderData: SpaceShip[] }) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === sliderData.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? sliderData.length - 1 : current - 1);
  };

  return (
    <div className={styles.slider}>
      <FaArrowAltCircleLeft className={styles['left-arrow']} onClick={prevSlide} />
      <FaArrowAltCircleRight className={styles['right-arrow']} onClick={nextSlide} />
      {sliderData.map(({ alt, img, title }, index) => (
        <div key={index} className={`${styles.slide} ${index === current ? styles.active : ''}`}>
          {index === current && (
            <>
              <p className={styles.title}>{title}</p>
              <img alt={alt} className={styles.image} src={img} />
            </>
          )}
        </div>
      ))}
    </div>
  );
};
