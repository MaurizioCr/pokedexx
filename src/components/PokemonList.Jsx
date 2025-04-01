import { useEffect, useState } from 'react';
import { Container, Row, Card } from 'react-bootstrap';

function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(response => response.json())
      .then(data => {
        const pokemonPromises = data.results.map((p, index) =>
          fetch(`https://pokeapi.co/api/v2/pokemon/${index + 1}`)
            .then(response => response.json())
            .then(details => ({
              id: index + 1,
              name: details.name,
              image: details.sprites.front_default,
              height: details.height,
              weight: details.weight,
              types: details.types.map(t => t.type.name),
            }))
        );

        Promise.all(pokemonPromises).then(results => setPokemonList(results));
      })
      .catch(error => console.error("Errore nel recupero dei Pokémon:", error));
  }, []);

  return (
    <Container>
      <Row className="justify-content-center">
        {pokemonList.map(pokemon => (
          <Card key={pokemon.id} style={{ width: '18rem', margin: '10px' }}>
            <Card.Img variant="top" src={pokemon.image} />
            <Card.Body>
              <Card.Title>{pokemon.name.toUpperCase()}</Card.Title>
              <p>ID: {pokemon.id}</p>
              <p>Altezza: {pokemon.height}</p>
              <p>Peso: {pokemon.weight}</p>
              <p>Tipo: {pokemon.types.join(', ')}</p>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </Container>
  );
}

export default PokemonList;
