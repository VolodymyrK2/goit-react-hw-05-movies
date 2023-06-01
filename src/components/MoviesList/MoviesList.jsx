import React from 'react'
import { Link} from "react-router-dom";
function MoviesList({ moviesList, location }) {
  return (
    <ul>
            {moviesList?.map((movie) => (
                <li key={movie.id}>
                    <Link to={`/movies/${movie.id}`} state={{ from: location }}>{movie.title ?? movie.name}</Link>
                </li>
            ))}
        </ul> 
  )
}

export default MoviesList