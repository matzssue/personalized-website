type MoviesData = {
  title: string;
  id: number;
  description: string;
  director: string;
  releaseDate: string;
  producer: string;
};

export const getMovieDetails = async (id: string | undefined) => {
  if (!id) return;
  try {
    const response = await fetch(`https://swapi.dev/api/films/${id}`);
    const data = await response.json();
    console.log(data);
    const movieData: MoviesData = {
      id: data.episode_id,
      title: data.title,
      director: data.director,
      producer: data.producer,
      releaseDate: data.release_date,
      description: data.opening_crawl,
    };

    return movieData;
  } catch (err) {
    if (err instanceof Error) {
      throw new Error();
    }
  }
};
