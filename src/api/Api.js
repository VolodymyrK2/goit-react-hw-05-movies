const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNDlkODE5MmVjNTRkZGNmZGY3MmU4M2JiMThlYTlhMyIsInN1YiI6IjY0NzBmYTZkYTE5OWE2MDBmOTQxYjAzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N6g8pnpZseSkJPe0Eh6_Ge8oq9CHUNHtXvQM4ROvOUg'
  }
};
const getTrending = () => {
 return   fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', options)
   .then(response => response.json())
        .catch(err => console.error('error: '+err));
}

const getDetails = (movieId) => {
  return   fetch(`https://api.themoviedb.org/3/movie/${movieId}`, options)
   .then(response => response.json())
        .catch(err => console.error('error: '+err));
}

const getCast = (movieId) => {
  return   fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits`, options)
   .then(response => response.json())
        .catch(err => console.error('error: '+err));
}
const getReviews = (movieId) => {
  return   fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews`, options)
   .then(response => response.json())
        .catch(err => console.error('error: '+err));
}
const getSearchMovies = (query) => {
  return   fetch(`https://api.themoviedb.org/3/search/movie?query=${query}`, options)
   .then(response => response.json())
        .catch(err => console.error('error: '+err));
}

const Api = { getTrending, getDetails, getCast, getReviews,getSearchMovies };
export default Api;