import { ReactNode } from 'react';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';

import bb8Character from '../../assets/bb8.webp';
import { navigationLinks } from '../../constants/navigationLinks';
import { useThemeContext } from '../../context/ThemeSelectorContext';
import { NavLinks } from '../NavLinks/NavLinks';

import styles from './Layout.module.scss';
import { NavLink } from 'react-router-dom';

export const Layout = ({ children }: { children: ReactNode }) => {
  const { isImageHidden, toggleHideImage } = useThemeContext();

  return (
    <div className={styles.box}>
      <header>
        <NavLink to={'/'}>Mateusz K. Portfolio</NavLink>
        <nav>
          <NavLinks navigationLinks={navigationLinks} />
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p>Mateusz Kluska 2023 @ All rights reserved</p>
      </footer>
      <div className={`${styles['bb8-container']} ${isImageHidden ? styles.hidden : ''}`}>
        <img
          alt={'bb8-character'}
          src={bb8Character}
          className={`${styles['bb8-image']} ${isImageHidden ? styles.hidden : ''}`}
        />
      </div>
      <button
        className={`${styles['toggle-image-button']} ${isImageHidden ? styles.hidden : ''}`}
        onClick={toggleHideImage}
      >
        {isImageHidden ? <BsFillArrowRightCircleFill /> : <BsFillArrowLeftCircleFill />}
      </button>
    </div>
  );
};
