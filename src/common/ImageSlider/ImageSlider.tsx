import { useState } from 'react';
import styles from './ImageSlider.module.scss';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { SpaceShip } from '../../constants/spaceshipsImages';

export const ImageSlider = ({ sliderData }: { sliderData: SpaceShip[] }) => {
  const [current, setCurrent] = useState(0);
  const length = sliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(sliderData) || sliderData.length <= 0) {
    return null;
  }

  return (
    <div className={styles.slider}>
      <FaArrowAltCircleLeft className={styles['left-arrow']} onClick={prevSlide} />
      <FaArrowAltCircleRight className={styles['right-arrow']} onClick={nextSlide} />
      {sliderData.map(({ img, title, alt }, index) => {
        return (
          <div className={`${styles.slide} ${index === current ? styles.active : ''}`} key={index}>
            {index === current && (
              <>
                <p className={styles.title}>{title}</p>
                <img src={img} alt={alt} className={styles.image} />
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};
