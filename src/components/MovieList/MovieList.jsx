import { MovieItem } from 'components/MovieItem/MovieItem';

export const MovieList = ({ movies }) => {
  // console.log(movies)
  return (
    <ul>
      {movies.map((el, i) => (
        <MovieItem key={i} movie={el} />
      ))}
    </ul>
  );
};
