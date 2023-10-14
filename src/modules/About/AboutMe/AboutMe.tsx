import styles from "./AboutMe.module.scss";

export const AboutMe = () => {
  return (
    <section id={styles["about-me"]}>
      <h1 className={styles.name}>Mateusz Kluska</h1>
      <p className={styles.description}>
        <span>
          I'am a self-taught individual with aspirations of becoming a front-end
          developer. Currently, I am working on my largest project, the
          Freight-Ex platform. Upon completing this project, I plan to continue
          expanding my skill set. My current job has enhanced my abilities in
          both team collaboration and individual work. I have also learned how
          to handle stressful situations effectively
        </span>
      </p>
    </section>
  );
};
