import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner';
import styles from './Loader.module.scss';
export const Loader = () => {
  return (
    <div className={styles['loading-container']}>
      <LoadingSpinner />
      <span className={styles['loader-text']}>Please wait, force loading...</span>
    </div>
  );
};
