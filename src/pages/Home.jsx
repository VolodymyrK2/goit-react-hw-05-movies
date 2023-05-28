import { useEffect, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Api from "api/Api";

const Home = () => {
    const [moviesTrendingList, setMoviesTrendingList] = useState(null);
    useEffect(() => {
        Api.getTrending().then((res) => {
        const { results }= res
        setMoviesTrendingList(results);
        })
    }
    , []);
    console.log('data: ' + moviesTrendingList);
    return (
        <main>
        <ul>
            {moviesTrendingList?.map((movie) => (
                <li key={movie.id}>
                    <Link to={`movies/${movie.id}`} >{movie.title ?? movie.name}</Link>
                </li>
            ))}
        </ul> 
            <Outlet />  
     </main>       
    )
}
export default Home;