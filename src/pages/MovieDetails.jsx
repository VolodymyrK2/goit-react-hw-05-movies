import React, { useEffect, useState, Suspense, useRef } from 'react'
import { ImArrowLeft2 } from "react-icons/im";
import Api from '../api/Api'
import { Link, Outlet, useParams, useLocation } from 'react-router-dom'
import Loader from 'components/Loader/Loader';
import css from './MovieDetails.module.css'

function MovieDetails() {
  const [details, setDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
   const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? "/").current;
  useEffect(() => {
     setIsLoading(true);
    Api.getDetails(movieId).then(result => {
     
      const { title, overview, vote_average: userScore, genres,backdrop_path: imgUrl} = result;
      const genresList = genres.map(el => el.name)
      setDetails({ title, overview, userScore, genresList, imgUrl })      
    }).catch(error=>setError(error)).finally(()=>setIsLoading(false))
   
  }, [movieId])
        
  return (
    <>
      <Link className={css.link__goback} to={backLinkHref}><ImArrowLeft2/> Go back</Link>
      {error && alert("Something went wrong, please try again")}
      {isLoading && <Loader />}
        {details && <div className={css.details__wrapper}>
        <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${details?.imgUrl}`} alt="" />
        <div className={css.details__description}>
        <h1>{details?.title}</h1>
        <p>User score: {(details?.userScore * 10).toFixed()} %</p>
        <h2>Owerview</h2>
        <p>{details?.overview}</p>
        <h2>Genres</h2>
          <p>{details?.genresList.join(' ')}</p>
          </div>
      </div>}
      <h3>Additional information</h3>
      <ul className={css.addInfo__list}>
        <li>
          <Link to='cast' >Cast</Link>
        </li>
        <li>
          <Link to='reviews' >Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
        </Suspense>
      </>
  )
  
}

export default MovieDetails;