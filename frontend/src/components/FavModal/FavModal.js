import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

function FavModal(props) {
    const [updated, setupdated] = useState('');
    function updateMovie() {
        console.log(props.updateData)
        const movie = {
            title:props.updateData.title,
            release_date:props.updateData.release_date,
            poster_path:props.updateData.poster_Path,
            overview:updated
        }
        const url = `${process.env.REACT_APP_SERVER_URL}UPDATE/${props.updateData.id}`;
        axios.put(url,movie).then((movieData) => {
            props.dataUpdated(movieData.data);
        });
        props.closeModal(props.updateData);
    }
    return (
        <>
            <Modal show={props.show} onHide={props.closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.updateData.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original${props.updateData.poster_Path}`} alt='movie poster' />
                    <Form onSubmit={updateMovie} method='POST'>
                        <Form.Group as={Col} >
                            <Form.Label>Comment</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Comment"
                                defaultValue={props.updateData.overview}
                                onChange={(event) => {
                                    event.preventDefault();
                                    setupdated(event.target.value)
                                }}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.closeModal}>
                        Close
                    </Button>
                    <Button type="submit" variant="primary" onClick={updateMovie}>
                        Update
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default FavModal;