import { NavLink } from "react-router-dom";
import styles from "./MoviesList.module.scss";
import { useQuery } from "@tanstack/react-query";
import { getMovies } from "../../../utils/getMovies";
import { LoadingSpinner } from "../../../common/LoadingSpinner/LoadingSpinner";

export const MoviesList = () => {
  const {
    data: movies,
    isLoading,
    isError,
  } = useQuery(["movies"], async () => await getMovies());

  return (
    <section id={styles.movies}>
      <h2>Favorite movies</h2>
      {isError && <p>Sorry, something went wrong. Please try again later</p>}
      <ul>
        {!isLoading && movies ? (
          movies.map(({ title, description, id }) => (
            <li key={id} className={styles.movie}>
              <p className={styles.title}>{title}</p>
              <span className={styles.description}>{description}</span>
              <NavLink to={`/movies/${id}`}>Read more</NavLink>
            </li>
          ))
        ) : (
          <LoadingSpinner />
        )}
      </ul>
    </section>
  );
};
