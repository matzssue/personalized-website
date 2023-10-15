type MoviesData = {
  description: string;
  director: string;
  id: number;
  producer: string;
  releaseDate: string;
  title: string;
};

export const getMovieDetails = async (id: string | undefined) => {
  if (!id) return;
  try {
    const response = await fetch(`https://swapi.dev/api/films/${id}`);
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
      throw new Error();
    }
  }
};
