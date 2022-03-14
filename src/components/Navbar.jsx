import "../styles/navbar.scss"
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const {pathname} = useLocation();
  const [user, setUser] = useState(null)

  useEffect(() => {
    if(pathname === "/dashboard" || pathname === "/posts") {
      setUser("user")
    } else{
      setUser(null)
    }
  }, [pathname])

  return (
    <nav className="navbar bg-dark">
        <h1>
            <Link to="/dashboard"><i className="fas fa-code"></i> DevConnector</Link>
        </h1>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/profiles">Developers</Link></li>
            <li><Link to="/register">Register</Link></li>
            {!user &&<li><Link to="/login">Login</Link></li>}
            {user && <li><Link to="/dashboard"><i className="fas fa-user"></i> <span className="hide-sm"> Dashboard</span></Link></li>}
            {user && <li><Link to="/posts"><i className="fas fa-sign-out-alt"></i> <span className="hide-sm"> Logout</span></Link></li>}
        </ul>
    </nav>
  )
}

export default Navbar