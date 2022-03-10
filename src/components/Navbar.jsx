import "../styles/navbar.scss"


function Navbar() {
  return (
    <nav className="navbar bg-dark">
        <h1>
            <a href="dashboard"><i class="fas fa-code"></i> DevConnector</a>
        </h1>
        <ul>
            <li><a href="profile">Developers</a></li>
            <li><a href="register">Register</a></li>
            <li><a href="login">Login</a></li>
        </ul>
    </nav>
  )
}

export default Navbarborder-bottom: solid 1px $primary-color;