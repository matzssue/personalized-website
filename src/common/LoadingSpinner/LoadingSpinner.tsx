import styles from './LoadingSpinner.module.scss';

export const LoadingSpinner = () => (
  <div className={styles['loader-container']}>
    <span className={styles.loader} />;
  </div>
);
