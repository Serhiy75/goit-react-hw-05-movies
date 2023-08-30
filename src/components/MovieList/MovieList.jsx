import { MovieItem } from 'components/MovieItem/MovieItem';

export const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map((el, i) => (
        <MovieItem key={i} movie={el} />
      ))}
    </ul>
  );
};
