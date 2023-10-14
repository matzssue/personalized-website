type MoviesData = {
  title: string;
  id: number;
  description: string;
};

export const getMovies = async () => {
  try {
    const response = await fetch("https://swapi.dev/api/films");
    const data = await response.json();
    console.log(data);
    const moviesData: MoviesData[] = data.results.map((ele: any) => {
      return {
        title: ele.title,
        id: ele.episode_id,
        description: ele.opening_crawl,
      };
    });

    return moviesData;
  } catch (err) {
    if (err instanceof Error) {
      throw new Error();
    }
  }
};
