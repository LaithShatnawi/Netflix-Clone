import Movie from '../Movie/Movie';
import './MovieList.css';

function MovieList(props) {
    return (
        <div className='cards'>
            {
                props.movieList.map((item, idx) => {
                    return (
                        <Movie key={idx} cardData={item} />
                    )
                })
            }
        </div>
    );
}
export default MovieList;