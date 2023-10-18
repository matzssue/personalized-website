import { starWarsUrl } from '../constants/stawWarsUrl';

type MoviesData = {
  description: string;
  director: string;
  id: number;
  producer: string;
  releaseDate: string;
  title: string;
};

export const getMovieDetails = async (id: string | undefined) => {
  try {
    const response = await fetch(`${starWarsUrl}/films/${id}`);
    const data = await response.json();
    console.log(data);
    const movieData: MoviesData = {
      id: data.episode_id,
      director: data.director,
      title: data.title,
      producer: data.producer,
      description: data.opening_crawl,
      releaseDate: data.release_date,
    };

    return movieData;
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(`Error while fetching movies: ${err.message}`);
    }
  }
};
