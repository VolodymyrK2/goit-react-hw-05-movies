import { Routes, Route, NavLink } from 'react-router-dom';
import css from './App.module.css'
import Home from '../pages/Home';
import MovieDetails from 'pages/MovieDetails';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
export  const App = () => {
  return (
    <>
      <header>
      <nav>
        <NavLink to='/'> Home </NavLink>
        <NavLink to='/movies'> Movies </NavLink>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home />}/>
          <Route path='/movies/:movieId' element={<MovieDetails />}>
            <Route path='cast' element={<Cast />} />
            <Route path='reviews' element={<Reviews/>}/>
         </Route>
      <Route path='/movies' element={<MovieDetails/> } />
      </Routes>
      
    </>
  );
};
