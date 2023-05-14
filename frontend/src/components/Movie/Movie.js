import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ModalMovie from '../ModalMovie/ModalMovie';
import { useState } from 'react';

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
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.cardData.poster_path} alt='movie poster' />
                <Card.Body>
                    <Card.Title>{props.cardData.title}</Card.Title>
                    <Card.Text>
                        <p>{props.cardData.release_date}</p>
                        <p>{props.cardData.overview}</p>
                    </Card.Text>
                    <Button variant="primary" onClick={()=>{showModal(props.cardData)}}>Add to Favorites</Button>
                </Card.Body>
            </Card>

            <ModalMovie handleShow={show} handleClose={closeModal} movieData={movieData} />
        </div>
    );
}
export default Movie;