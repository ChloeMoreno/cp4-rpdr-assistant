import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Challenges from './components/Challenges';
import QueensList from './components/QueensList';
import './App.css'

function App() {
  return (
    <Router>
      <nav>
        <ul className="onglets">
          <li className="route">
            <Link to="/">Queens</Link>
          </li>
          <li className="route">
            <Link to="/challenges">Runway Challenges</Link>
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
