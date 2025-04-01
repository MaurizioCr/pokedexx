import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Card } from 'react-bootstrap';

function TypePage() {
  const { type } = useParams();
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/type/${type}`)
      .then(response => response.json())
      .then(data => {
        const updatedPokemonList = [];

        data.pokemon.slice(0, 12).forEach(p => {
          fetch(p.pokemon.url)
            .then(response => response.json())
            .then(details => {
              updatedPokemonList.push({
                id: details.id,
                name: details.name,
                image: details.sprites.front_default,
              });

              if (updatedPokemonList.length === 12) {
                setPokemonList([...updatedPokemonList]);
              }
            })
            .catch(error => console.error("Errore nel recupero del Pokémon:", error));
        });
      })
      .catch(error => console.error("Errore nel recupero dei Pokémon per tipo:", error));
  }, [type]);

  return (
    <Container>
      <h2 className="my-4">Pokémon di tipo {type.toUpperCase()}</h2>
      <Row className="justify-content-center">
        {pokemonList.map(pokemon => (
          <Card key={pokemon.id} style={{ width: '18rem', margin: '10px' }}>
            <Card.Img variant="top" src={pokemon.image} />
            <Card.Body>
              <Card.Title>{pokemon.name.toUpperCase()}</Card.Title>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </Container>
  );
}

export default TypePage;
