import React, { useState, useEffect } from 'react'
import css from './SearchBox.module.css'
import {useLocation, useSearchParams  } from 'react-router-dom'
import Api from 'api/Api';
import MoviesList from 'components/MoviesList/MoviesList';
function SearchBox() {
const [moviesList, setMovieList] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("query");
    const location = useLocation();
useEffect(() => {
    
    if (query===''||query===null) return;

    async function fetchMovies() {
      const {results} = await Api.getSearchMovies(query);
      setMovieList(results);
    }

    fetchMovies();
  }, [query]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        setSearchParams({ query: form.elements.query.value.trim() });
        form.reset();
}
  return (
     <>
      <form className={css.form} onSubmit ={handleSubmit}>
        <input
          type="text"
          name="query"
          value ={query}
        />
        <button type="submit">Search</button>
      </form>
      
      {moviesList && <MoviesList
        moviesList={moviesList}
        location={location}
      /> }
          </>
  )
}

export default SearchBox