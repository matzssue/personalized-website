import styles from "./LoadingSpinner.module.scss";

export const LoadingSpinner = () => {
  return (
    <div className={styles["loader-container"]}>
      <span className={styles.loader}></span>;
    </div>
  );
};
