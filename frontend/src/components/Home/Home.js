import MovieList from '../MovieList/MovieList'
import axios from 'axios';
import { useEffect, useState } from 'react';
function Home() {
        const [moviesData, setMoviesData] = useState([]);
        function serverdata() {
            const url = `${process.env.REACT_APP_SERVER_URL}trending`;
            axios.get(url).then((movieData) => {
                setMoviesData(movieData.data);
            });
        };
        useEffect(() => {
            serverdata();
        }, [])

        return (
        <>
            <MovieList movieList={moviesData}/>
        </>
    );
}
export default Home;