import styles from "./Gallery.module.scss";
import { spaceshipImages } from "../../../constants/spaceshipsImages";

export const Gallery = () => {
  return (
    <section id={styles["spaceships-gallery"]}>
      <h2>Gallery</h2>
      <div className={styles.images}>
        {spaceshipImages.map(({ alt, img, title }) => (
          <figure>
            <img loading="lazy" height={"200px"} src={img} alt={alt} />
            <figcaption>{title}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};
