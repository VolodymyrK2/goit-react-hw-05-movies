import { Routes, Route } from 'react-router-dom';
import { lazy } from "react";

import SharedLayout from './SharedLayout/SharedLayout';

const Home = lazy(() => import("../pages/Home"));
const MovieDetails = lazy(() => import("../pages/MovieDetails"));
const Cast = lazy(() => import("./Cast/Cast"));
const Reviews = lazy(() => import("./Reviews/Reviews"));
const SearchBox = lazy(() => import("./SearchBox/SearchBox"));

export  const App = () => {
  return (
    <>
       <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<Home />} />
              <Route path='/movies/:movieId' element={<MovieDetails />}>
                  <Route path='cast' element={<Cast />} />
                  <Route path='reviews' element={<Reviews/>}/>
              </Route>
              <Route path='/movies' element={<SearchBox />} />
            </Route>
        </Routes>
      
    </>
  );
};
