import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    return (
        <div>
            <Navbar className='NavBar' bg="dark" variant="dark" fixed="top">
                <Container>
                    <Navbar.Brand href="/">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/favorites">Favorites</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}
export default NavBar;