import { useEffect, useState } from 'react';

import lightsaber from '../../../assets/lightsaber.png';
import { useThemeContext } from '../../../context/ThemeSelectorContext';

import styles from './Hero.module.scss';

export const Hero = () => {
  const { isFirstClick, setIsFirstClick, themeName, toggleTheme } = useThemeContext();
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setButtonDisabled(false);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [isButtonDisabled]);

  const handleButtonClick = () => {
    setIsFirstClick(false);
    toggleTheme();
    setButtonDisabled(true);
  };

  const currentMode = `Switch to ${themeName === 'dark' ? 'light' : 'dark'} force`;

  return (
    <section id={styles.hero}>
      <h1>Mateusz Kluska</h1>
      <img
        alt='lightsaber'
        className={`${styles.lightsaber} ${!isFirstClick && styles[themeName]}`}
        src={lightsaber}
      />
      <h2>FrontEnd Developer</h2>
      <button
        className={styles['toggle-button']}
        disabled={isButtonDisabled}
        onClick={() => handleButtonClick()}
      >
        {isButtonDisabled ? 'Loading force . . . ' : currentMode}
      </button>
    </section>
  );
};
