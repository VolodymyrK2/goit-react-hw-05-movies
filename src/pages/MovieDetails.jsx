import React, { useEffect, useState } from 'react'
import Api from '../api/Api'
import { Link, Outlet, useParams } from 'react-router-dom'

function MovieDetails() {
  const [details, setDetails]=useState(null)
  const { movieId } = useParams();
  useEffect(() => {
    Api.getDetails(movieId).then(result => {
      const { title, overview, vote_average: userScore, genres,backdrop_path: imgUrl} = result;
      const genresList = genres.map(el => el.name)
      setDetails({ title, overview, userScore, genresList,imgUrl });
    })
   
  }, [])
        
  return (
    <>
      <Link to = '/'>Go back</Link>
    <div>
      <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${details?.imgUrl}`} alt="" />
      <h1>{details?.title}</h1>
      <p>User score: {(details?.userScore * 10).toFixed()} %</p>
      <h2>Owerview</h2>
      <p>{details?.overview}</p>
      <h2>Genres</h2>
      <p>{details?.genresList.join(' ')}</p>
      </div>
      <h3>Additional information</h3>
      <ul>
        <li>
          <Link to = 'cast'>Cast</Link>
        </li>
        <li>
          <Link to = 'reviews'>Reviews</Link>
        </li>
      </ul>
      <Outlet/>
      </>
  )
  
}

export default MovieDetails;