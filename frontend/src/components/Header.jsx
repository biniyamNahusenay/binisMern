import { FaSignInAlt,FaUser,FaSignOutAlt} from "react-icons/fa"
import {Link} from "react-router-dom"
import "./header.css"
import { useNavigate } from "react-router-dom"
import {useDispatch,useSelector} from "react-redux"
import {Logout,reset} from "../features/authSlice"

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user }= useSelector((state)=>state.auth)

  const onLogout = ()=>{
    dispatch(Logout())
    dispatch(reset())
     navigate("/")
  }
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">GoalSetter</Link>
      </div>
      <ul>
        {
          user?(<li>
           <button onClick={onLogout}>
              <FaSignOutAlt className="fa"/>logout
           </button>
          </li>):(
             <>
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
             </>
            )
        }
      </ul>
     
    </header>
  )
}

export default Header
