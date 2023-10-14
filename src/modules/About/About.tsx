import styles from "./About.module.scss";
import { Technologies } from "./Technologies/Technologies";
import { MoviesList } from "./MoviesList/MoviesList";
import { Gallery } from "./Gallery/Gallery";
import { AboutMe } from "./AboutMe/AboutMe";
export const About = () => {
  return (
    <div className={styles["about-container"]}>
      <AboutMe />
      <Gallery />
      <Technologies />
      <MoviesList />
    </div>
  );
};
