import { useState,useEffect } from "react"
import { FaUser } from "react-icons/fa"
import "./register.css"

const Register = () => {
   const [formData,setFormData] = useState({
    name:'',
    email:'',
    password:'',
    password2:''
   })
   const {name,email,password,password2} = formData

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
          <FaUser/>Register
        </h1>
        <p>please create an account</p>
      </div>

      <div className="form">
        <form onSubmit={onSubmit}>
         <div className="form-group">
          <input type="text" className="form-control" id="name" name="name" 
           value={name} placeholder="enter your name" onChange={onChange}/>
        </div>
        <div className="form-group">
          <input type="email" className="form-control" id="email" name="email" 
          value={email} placeholder="enter your email" onChange={onChange}/>
        </div>
        <div className="form-group">
          <input type="password" className="form-control" id="password" name="password" 
          value={password} placeholder="enter your password" onChange={onChange}/>
        </div>
        <div className="form-group">
          <input type="password" className="form-control" id="password2" name="password2" 
          value={password2} placeholder="confirm your password" onChange={onChange}/>
        </div>
        <div className="form-group">
           <button type="submit" className="btn btn-block">Submit</button>
        </div>
        </form>
      </div>
  </>
  )
}

export default Register