import styles from "./Hero.module.scss";
import lightsaber from "../../assets/star-wars-2369317_1280.png";
import { useState, useEffect } from "react";
import { useThemeContext } from "../../context/ThemeSelectorContext";
export const Hero = () => {
  const { toggleTheme, themeName } = useThemeContext();
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const [isFirstClick, setIsFirstClick] = useState(true);

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

  const currentMode = `Switch to ${
    themeName === "dark" ? "light" : "dark"
  } force`;

  return (
    <section id={styles.hero}>
      <h1>Mateusz Kluska</h1>
      <p>FrontEnd Developer</p>
      <button
        className={styles["toggle-button"]}
        disabled={isButtonDisabled}
        onClick={() => handleButtonClick()}
      >
        {isButtonDisabled ? "Loading force . . . " : currentMode}
      </button>
      <img
        alt="lightsaber"
        className={`${styles.lightsaber} ${!isFirstClick && styles[themeName]}`}
        src={lightsaber}
      ></img>
    </section>
  );
};
