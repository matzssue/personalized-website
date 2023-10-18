import { starWarsUrl } from '../constants/stawWarsUrl';

type MoviesData = {
  description: string;
  id: number;
  title: string;
};

export const getMovies = async () => {
  try {
    const response = await fetch(`${starWarsUrl}/films`);
    const data = await response.json();
    const moviesData: MoviesData[] = data.results.map((ele: any) => ({
      description: ele.opening_crawl,
      id: ele.episode_id,
      title: ele.title,
    }));

    return moviesData;
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(`Error while fetching movie details: ${err.message}`);
    }
  }
};
