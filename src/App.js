import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/MyNavbar';

function App() {
  return (
    <Router>
      <NavBar />
    </Router>
  );
}

export default App;
