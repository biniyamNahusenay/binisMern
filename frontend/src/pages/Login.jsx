import { useState,useEffect } from "react"
import { FaSignInAlt} from "react-icons/fa"
import "./register.css"
import "./login.css"
const Login = () => {
   const [formData,setFormData] = useState({
    email:'',
    password:''
   })
   const {email,password} = formData

   const onChange = (e)=>{
    setFormData((prevState)=>({
      ...prevState,
       [e.target.name]:e.target.value
   }))}
   
   const onSubmit = (e)=>{
     e.preventDefault()
   }
  return (
    <>
      <div className="heading">
         <h1>
          <FaSignInAlt/>Login
        </h1>
        <p>Login and start setting goals</p>
      </div>

      <div className="form">
        <form onSubmit={onSubmit}>
        <div className="form-group">
          <input type="email" className="form-control" id="email" name="email" 
          value={email} placeholder="enter your email" onChange={onChange}/>
        </div>
        <div className="form-group">
          <input type="password" className="form-control" id="password" name="password" 
          value={password} placeholder="enter your password" onChange={onChange}/>
        </div>
        <div className="form-group">
           <button type="submit" className="btn btn-block">Submit</button>
        </div>
        </form>
      </div>
  </>
  )
}

export default Login
