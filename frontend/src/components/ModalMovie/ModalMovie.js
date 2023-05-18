import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function ModalMovie(props) {
    const [favData, setFavData] = useState('');
    const addToFavorite = (event) => {
        event.preventDefault();
        const url = `${process.env.REACT_APP_SERVER_URL}addMovie`;
        const movie = {
            title: props.movieData.title,
            release_date: props.movieData.release_date,
            poster_path: props.movieData.poster_Path,
            overview: favData
        }
        axios.post(url, movie).then((data) => data);
        props.handleClose();
    }

    return (
        <>
            <Modal show={props.handleShow} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.movieData.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original${props.movieData.poster_Path}`} alt='movie poster' />
                    <Form onSubmit={addToFavorite} method='POST'>
                        <Form.Group as={Col} md="4" controlId="validationCustom01">
                            <Form.Label>Comment</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Comment"
                                onChange={(event) => {
                                    setFavData(event.target.value)
                                }}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                    <Button type="submit" variant="primary" onClick={addToFavorite}>
                        Add to Favorites
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default ModalMovie;