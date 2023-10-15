import { useQuery } from '@tanstack/react-query';

import { LoadingSpinner } from '../../../common/LoadingSpinner/LoadingSpinner';
import { NavButton } from '../../../common/NavButton/NavButton';
import { getMovies } from '../../../utils/getMovies';

import styles from './MoviesList.module.scss';

export const MoviesList = () => {
  const { data: movies, isError, isLoading } = useQuery(['movies'], async () => await getMovies());

  return (
    <section id={styles.movies}>
      <h2>Favorite movies</h2>
      {isError && <p>Sorry, something went wrong. Please try again later</p>}
      <ul>
        {!isLoading && movies ? (
          movies.map(({ description, id, title }) => (
            <li key={id} className={styles.movie}>
              <p className={styles.title}>{title}</p>
              <span className={styles.description}>{description}</span>
              <NavButton text='Read more' to={`/movies/${id}`} />
            </li>
          ))
        ) : (
          <LoadingSpinner />
        )}
      </ul>
    </section>
  );
};
