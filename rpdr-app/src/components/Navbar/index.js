import './styles.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
<header className="header">

  <input className="menu-btn" type="checkbox" id="menu-btn" />
  <label className="menu-icon" for="menu-btn"><span className="navicon"></span></label>
  <ul className="menu">
  <li><Link to="/" className="nav-link">AS6 Cast</Link></li>
    <li> <Link className="nav-link"to ="/eliminated">Eliminated Queens</Link></li>
    <li> <Link className="nav-link"to="/favorites">Favorite Queens</Link></li>
  </ul>
</header>

  )
}

export default Navbar
