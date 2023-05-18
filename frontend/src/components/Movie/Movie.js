import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ModalMovie from '../ModalMovie/ModalMovie';
import { useState } from 'react';
import './Movie.css'


function Movie(props) {
    const [show, setShow] = useState(false);
    const [movieData, setMovieData] = useState({});
    const showModal = (item) => {
        setShow(true);
        setMovieData(item);
    }
    const closeModal = () => {
        setShow(false);
    }
    return (
        <>
            <Card className='card' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original${props.cardData.poster_Path}`} />
                <Card.Body>
                    <Card.Title>{props.cardData.title}</Card.Title>
                    <Card.Text>
                        <span>{props.cardData.release_date}</span><br/>
                        <span>{props.cardData.overview}</span>
                    </Card.Text>
                    <Button variant="primary" onClick={() => { showModal(props.cardData) }}>Add to Favorites</Button>
                </Card.Body>
            </Card>

            <ModalMovie handleShow={show} handleClose={closeModal} movieData={movieData} />
        </>
    );
}
export default Movie;