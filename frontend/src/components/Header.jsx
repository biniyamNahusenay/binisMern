import { FaSignInAlt,FaUser} from "react-icons/fa"
import {Link} from "react-router-dom"
import "./header.css"

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">GoalSetter</Link>
      </div>
      <ul>
        <li>
          <Link to="/login" className="Link">
             <FaSignInAlt className="fa"/>login
          </Link>
        </li>
        <li>
           <Link to="/register" className="Link">
              <FaUser className="fa"/>register
           </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
