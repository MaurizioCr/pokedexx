import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PokemonCard from '../components/PokemonCard';
import { Container, Row } from 'react-bootstrap';

function TypePage() {
  const { type } = useParams();
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/type/${type}`)
      .then(response => response.json())
      .then(data => {
        const filteredPokemon = data.pokemon.slice(0, 12).map(p => ({
          id: p.pokemon.url.split('/')[6],
          name: p.pokemon.name,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.pokemon.url.split('/')[6]}.png`
        }));
        setPokemonList(filteredPokemon);
      })
      .catch(error => console.error("Errore nel recupero dei Pokémon per tipo:", error));
  }, [type]);

  return (
    <Container>
      <h2 className="my-4">Pokémon di tipo {type.toUpperCase()}</h2>
      <Row className="justify-content-center">
        {pokemonList.map(pokemon => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </Row>
    </Container>
  );
}

export default TypePage;
