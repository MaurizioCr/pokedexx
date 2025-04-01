import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">Pokédex</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/list">Pokémon</Nav.Link>
        <Nav.Link as={Link} to="/types">Tipi</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default NavBar;
