import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, Container } from 'react-bootstrap';

function TypeList() {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/type')
      .then(response => response.json())
      .then(data => setTypes(data.results))
      .catch(error => console.error("Errore nel recupero dei tipi:", error));
  }, []);

  return (
    <Container>
      <h2 className="my-4">Tipi di Pokémon</h2>
      <ListGroup>
        {types.map(type => (
          <ListGroup.Item key={type.name} action as={Link} to={`/type/${type.name}`}>
            {type.name.toUpperCase()}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}

export default TypeList;
