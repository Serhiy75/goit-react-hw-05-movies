// import { getTrending } from 'service/movieApi';
import { Layout } from './Layout/Layout';
import { MovieDetails } from 'pages/MovieDetails';
import { Movies } from 'pages/Movies';
import { Home } from 'pages/Home';
import { Route, Routes } from 'react-router-dom';
export const App = () => {
  // getTrending().then(res => console.log(res));
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        {/* <Route path="cocktails/:cocktailId" element={<CocktailDetails />} /> */}
        <Route path="movieDetails" element={<MovieDetails />} />
      </Route>
    </Routes>
  );
};
