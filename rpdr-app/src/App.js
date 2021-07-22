import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Challenges from './components/Challenges';
import QueensList from './components/QueensList';
import './App.css'
import Searchbox from "./components/SearchBox";

<head>
<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100&display=swap');
</style>
</head>

function App() {
  return (
    <Router>
      <nav>
        <ul className="onglets">
          <li className="route">
            <Link to="/" className="nav-link">Queens</Link>
          </li>
          <li className="route">
            <Link to="/challenges" className="nav-link">Runway Challenges</Link>
          </li>
          <li className="route">
           <Searchbox />
          </li>
        </ul>
      </nav>
      <Switch>
          <Route exact path="/">
            <QueensList />
          </Route>
          <Route path="/challenges">
            <Challenges />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
