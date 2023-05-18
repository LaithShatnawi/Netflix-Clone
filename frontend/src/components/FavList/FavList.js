import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useEffect, useState } from 'react';
import FavModal from '../FavModal/FavModal';

function FavList() {
    const [moviesData, setMoviesData] = useState([]);
    const [show, setShow] = useState(false);
    const [updateData, setUpdateData] = useState({});
    const showModal = (item) => {
        setShow(true);
        setUpdateData(item);
    }
    const closeModal = () => {
        setShow(false);
    }
    function serverdata() {
        const url = `${process.env.REACT_APP_SERVER_URL}getMovies`;
        axios.get(url).then((movieData) => {
            setMoviesData(movieData.data);
        });
    };
    function dataUpdated(item) {
        setMoviesData(item);
    }
    function DeleteMovie(item) {
        const url = `${process.env.REACT_APP_SERVER_URL}DELETE/${item.id}`;
        axios.delete(url).then((movieData) => {
            setMoviesData(movieData.data);
        });
    }
    useEffect(() => {
        serverdata();
    }, [])
    return (
        <div className='cards'>
            {
                moviesData.map((element, id) => {
                    return (
                        <Card key={id} className='card' style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original${element.poster_Path}`} />
                            <Card.Body>
                                <Card.Title>{element.title}</Card.Title>
                                <Card.Text>
                                    <span>{element.release_date}</span><br />
                                    <span>{element.overview}</span>
                                </Card.Text>
                                <Button variant="success" onClick={() => { showModal(element) }}>Update</Button>{' '}
                                <Button variant="danger" onClick={() => { DeleteMovie(element) }}>Delete</Button>
                            </Card.Body>
                        </Card>
                    )
                })
            }
            <FavModal show={show} updateData={updateData} closeModal={closeModal} dataUpdated={dataUpdated} />
        </div>
    );
}
export default FavList;