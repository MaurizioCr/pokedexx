import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/MyNavbar';
import Home from './components/Home';
import TypePage from './components/TypePage';
import PokemonDetail from './components/PokemonDetail';
import TypeList from './components/TypeList';


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/types" element={<TypeList />} />
        <Route path="/type/:type" element={<TypePage />} />
        <Route path="/pokemon/:id" element={<PokemonDetail />} />
      </Routes>
    </Router>
  );
}
export default App;