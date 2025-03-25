import { useEffect, useState } from 'react';
import PokemonCard from './PokemonCard';
import { Container, Row } from 'react-bootstrap';

function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(response => response.json())
      .then(data => {
        const pokemonData = data.results.map((p, index) => ({
          id: index + 1,
          name: p.name,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
        }));
        setPokemonList(pokemonData);
      })
      .catch(error => console.error("Errore nel recupero dei Pokémon:", error));
  }, []);

  return (
    <Container>
      <Row className="justify-content-center">
        {pokemonList.map(pokemon => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </Row>
    </Container>
  );
}

export default PokemonList;
