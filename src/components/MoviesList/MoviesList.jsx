import React from 'react'
import { Link } from "react-router-dom";
import css from './MoviesList.module.css'
function MoviesList({ moviesList, location }) {
  return (
    <ul className={css.movies__list}>
            {moviesList?.map((movie) => (
                <li key={movie.id}>
                    <Link to={`/movies/${movie.id}`} state={{ from: location }}>{movie.title ?? movie.name}</Link>
                </li>
            ))}
        </ul> 
  )
}

export default MoviesList