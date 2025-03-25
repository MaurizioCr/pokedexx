import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Container className="text-center mt-5">
      <h1>Benvenuto nel Pokédex!</h1>
      <p>Scopri tutti i Pokémon e i loro tipi.</p>
      <Link to="/pokemon">
        <Button variant="primary">Vedi tutti i Pokémon</Button>
      </Link>
    </Container>
  );
}

export default Home;
