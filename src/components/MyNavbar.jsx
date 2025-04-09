import { Navbar, Nav, Form, FormControl, Button, ListGroup } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function NavBar() {
  const [searchInput, setSearchInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [allPokemon, setAllPokemon] = useState([]);
  const navigate = useNavigate();

  // Recuperiamo tutti i Pokémon solo una volta per i suggerimenti
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(res => res.json())
      .then(data => setAllPokemon(data.results));
  }, []);

  // Aggiorna suggerimenti in base all’input
  const handleChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchInput(value);

    if (value.length > 0) {
      const filtered = allPokemon.filter(p =>
        p.name.includes(value)
      );
      setSuggestions(filtered.slice(0, 5)); // Mostra solo i primi 5 risultati
    } else {
      setSuggestions([]);
    }
  };

  // Gestione della ricerca
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      navigate(`/pokemon/${searchInput.toLowerCase()}`);
      setSuggestions([]);
      setSearchInput('');
    }
  };

  const handleSuggestionClick = (name) => {
    navigate(`/pokemon/${name}`);
    setSuggestions([]);
    setSearchInput('');
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="px-3">
      <Navbar.Brand as={Link} to="/">Pokédex</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/types">Tipi</Nav.Link>
      </Nav>
      <Form className="d-flex position-relative" onSubmit={handleSearch}>
        <FormControl
          type="search"
          placeholder="Cerca Pokémon"
          className="me-2"
          value={searchInput}
          onChange={handleChange}
        />
        <Button variant="outline-info" type="submit">Cerca</Button>

        {suggestions.length > 0 && (
          <ListGroup className="position-absolute w-100" style={{ top: '100%', zIndex: 999 }}>
            {suggestions.map(p => (
              <ListGroup.Item
                action
                key={p.name}
                onClick={() => handleSuggestionClick(p.name)}
              >
                {p.name}
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Form>
    </Navbar>
  );
}

export default NavBar;
