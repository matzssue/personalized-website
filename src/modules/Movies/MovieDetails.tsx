import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';

import { LoadingSpinner } from '../../common/LoadingSpinner/LoadingSpinner';
import { NavButton } from '../../common/NavButton/NavButton';
import { getMovieDetails } from '../../utils/getMovieDetails';

import styles from './MovieDetails.module.scss';

export const MovieDetails = () => {
  const { movieId } = useParams();

  const {
    data: movie,
    isError,
    isLoading,
  } = useQuery(['movie', movieId], async () => await getMovieDetails(movieId));

  if (isLoading)
    return (
      <div className={styles.loading}>
        <LoadingSpinner />
      </div>
    );
  if (!movie) return;
  const { description, director, producer, releaseDate, title } = movie;
  return (
    <div className={styles['movie-container']}>
      {isError && <p>Sorry, something went wrong. Please try again later</p>}
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.information}>
        <strong>Director:</strong> {director}
      </p>
      <p className={styles.information}>
        <strong>Producer:</strong> {producer}
      </p>
      <p className={styles.information}>
        <strong>Release date:</strong> {releaseDate}
      </p>
      <p className={styles.description}>
        <strong>Opening crawl:</strong> {description}
      </p>
      <NavButton text='Back' to={'/about'} />
    </div>
  );
};
