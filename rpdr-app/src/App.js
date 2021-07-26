import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import QueensList from './components/QueensList';
import './App.css'
import GetOneQueen from "./components/OneQueen";
import Navbar from "./components/Navbar";
import EliminatedList from "./components/EliminatedList";
import FavoriteList from "./components/FavoriteList";

<head>
<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100&display=swap');
</style>
</head>

function App() {
  return (
    <Router>
      <nav>
   <Navbar />
      </nav>
      <Switch>
          <Route exact path="/">
            <QueensList />
          </Route>
          <Route path="/queens/name/:queenName">
            <GetOneQueen />
          </Route>
          <Route path="/eliminated">
            <EliminatedList />
          </Route>
          <Route path="/favorites">
            <FavoriteList />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
