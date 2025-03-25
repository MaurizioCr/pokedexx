import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Container } from 'react-bootstrap';

function PokemonDetail() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(response => response.json())
      .then(data => {
        setPokemon({
          name: data.name,
          image: data.sprites.front_default,
          height: data.height,
          weight: data.weight,
          types: data.types.map(t => t.type.name)
        });
      })
      .catch(error => console.error("Errore nel recupero dei dettagli del Pokémon:", error));
  }, [id]);

  if (!pokemon) return <p>Caricamento...</p>;

  return (
    <Container className="text-center">
      <Card style={{ width: '18rem', margin: '2rem auto' }}>
        <Card.Img variant="top" src={pokemon.image} />
        <Card.Body>
          <Card.Title>{pokemon.name.toUpperCase()}</Card.Title>
          <p>Altezza: {pokemon.height} | Peso: {pokemon.weight}</p>
          <p>Tipo: {pokemon.types.join(', ')}</p>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default PokemonDetail;
