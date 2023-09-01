import { MovieList } from 'components/MovieList/MovieList';
import { SearchMovie } from 'components/SearchMovie/SearchMovie';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from 'service/movieApi';

const Movies = () => {
  const [movie, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('query');
    if (!query) return;
    searchMovies(query).then(data => {
      // console.log(data);
      setMovies(data.results);
    });
  }, [searchParams]);

  const handleSubmit = query => {
    setSearchParams({ query });
  };
  // console.log(movie);
  return (
    <>
      <SearchMovie onSubmit={handleSubmit} />
      <MovieList movies={movie} />
    </>
  );
};
export default Movies;
