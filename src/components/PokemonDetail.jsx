import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';

function PokemonDetail() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id.toLowerCase()}`)
      .then(res => res.json())
      .then(data => {
        setPokemon({
          name: data.name,
          image: data.sprites.front_default,
          height: data.height,
          weight: data.weight,
          types: data.types.map(t => t.type.name)
        });
      })
      .catch(err => console.error("Errore nel caricamento dettagli Pokémon", err));
  }, [id]);

  if (!pokemon) return <div>Caricamento...</div>;

  return (
    <Container className="text-center mt-4">
      <Card style={{ width: '18rem', margin: '0 auto' }}>
        <Card.Img variant="top" src={pokemon.image} />
        <Card.Body>
          <Card.Title>{pokemon.name.toUpperCase()}</Card.Title>
          <p>Altezza: {pokemon.height}</p>
          <p>Peso: {pokemon.weight}</p>
          <p>Tipo: {pokemon.types.join(', ')}</p>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default PokemonDetail;
