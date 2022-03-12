import "../styles/navbar.scss"
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar bg-dark">
        <h1>
            <a href="dashboard"><i className="fas fa-code"></i> DevConnector</a>
        </h1>
        <ul>
            <li><Link to="profile">Developers</Link></li>
            <li><Link to="register">Register</Link></li>
            <li><Link to="login">Login</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar