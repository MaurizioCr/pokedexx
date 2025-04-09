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
  );
}

export default PokemonDetail;
