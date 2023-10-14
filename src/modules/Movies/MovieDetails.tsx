import styles from "./MovieDetails.module.scss";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getMovieDetails } from "../../utils/getMovieDetails";
import { LoadingSpinner } from "../../common/LoadingSpinner/LoadingSpinner";

export const MovieDetails = () => {
  const { movieId } = useParams();
  console.log(movieId);

  const {
    data: movie,
    isLoading,
    isError,
  } = useQuery(["movie", movieId], async () => await getMovieDetails(movieId));

  if (isLoading)
    return (
      <div className={styles.loading}>
        <LoadingSpinner />
      </div>
    );
  if (!movie) return;
  const { description, director, producer, releaseDate, title } = movie;
  return (
    <div className={styles["movie-container"]}>
      {isLoading && <LoadingSpinner />}
      {isError && <p>Sorry, something went wrong. Please try again later</p>}
      <h1>{title}</h1>
      <p>
        <strong>Director:</strong> {director}
      </p>
      <p>
        <strong>Producer:</strong> {producer}
      </p>
      <p>
        <strong>Release date:</strong> {releaseDate}
      </p>
      <p className={styles.description}>
        <strong>Opening crawl:</strong> {description}
      </p>
    </div>
  );
};
