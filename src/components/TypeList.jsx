import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';

function TypeList() {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/type')
      .then(response => response.json())
      .then(data => setTypes(data.results))
      .catch(error => console.error("Errore nel recupero dei tipi:", error));
  }, []);

  return (
    <Container className="text-center mt-4">
      <h2>Seleziona un Tipo</h2>
      {types.map(type => (
        <Link to={`/type/${type.name}`} key={type.name}>
          <Button variant="secondary" className="m-2">{type.name.toUpperCase()}</Button>
        </Link>
      ))}
    </Container>
  );
}

export default TypeList;
