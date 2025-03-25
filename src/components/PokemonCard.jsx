import { Card } from 'react-bootstrap';

function PokemonCard({ pokemon }) {
  return (
    <Card style={{ width: '12rem', margin: '1rem' }}>
      <Card.Img variant="top" src={pokemon.image} />
      <Card.Body>
        <Card.Title>{pokemon.name.toUpperCase()}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default PokemonCard;
