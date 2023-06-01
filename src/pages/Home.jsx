import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Api from "api/Api";
import MoviesList from "components/MoviesList/MoviesList";

const Home = () => {
    const [moviesTrendingList, setMoviesTrendingList] = useState(null);
    const location = useLocation();
    useEffect(() => {
        Api.getTrending().then((res) => {
            const { results } = res
            setMoviesTrendingList(results);
        })
       } 
    , []);
     return (
         <main>
             <h1>Trending today</h1>
             <MoviesList
                 moviesList={moviesTrendingList}
                 location ={location}
             />
            <Outlet />  
     </main>       
    )
}
export default Home;