import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyNavbar from './components/MyNavbar';
import Home from './components/Home';
import PokemonList from './components/PokemonList';
import TypeList from './components/TypeList';
import TypePage from './components/TypePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import PokemonDetail from './components/PokemonDetail';

function App() {
  return (
    <Router>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon" element={<PokemonList />} />
        <Route path="/types" element={<TypeList />} />
        <Route path="/type/:type" element={<TypePage />} />
        <Route path="/pokemon/:id" element={<PokemonDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
