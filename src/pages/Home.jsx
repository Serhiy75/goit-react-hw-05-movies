import { MovieList } from 'components/MovieList/MovieList';
import { useEffect, useState } from 'react';
import { getTrending } from 'service/movieApi';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    // if (movies.length) return;
    getTrending().then(data => {
      // console.log(data);
      setMovies(data.results);
    });
  }, []);
  return (
    <>
      <h1>Trending Today</h1>
      <MovieList movies={movies} />
    </>
  );
};
