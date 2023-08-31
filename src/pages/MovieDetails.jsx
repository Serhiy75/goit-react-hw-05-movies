import { useEffect, useRef, useState } from 'react';
import { getMovieDetails } from '../service/movieApi.js';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

export const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
  const location = useLocation();
  const backLink = useRef(location.state?.from || '/');

  useEffect(() => {
    getMovieDetails(id).then(data => {
      setMovie(data);
    });
  }, [id]);
  if (!movie) return;

  return (
    <div style={{ padding: 20 }}>
      <hr />
      <Link to={backLink.current}>Go Back!</Link>
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : defaultImg
        }
        alt={movie.title}
        width="300px"
      />
      <h2>{movie.title}</h2>
      <p>Overview: {movie.overview}</p>
      <p>Genres: {movie.genres.map(el => el.name).join(',')}</p>
      <p>Popularity: {movie.popularity}</p>
      <hr />
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <hr />
      <Outlet />
    </div>
  );
};
// genres;
// original_title;overview;title;poster_path;popularity
