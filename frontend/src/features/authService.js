import axios from "axios"

const API_URL = '/api/users/'

const register = async (userData)=>{
    const response = await axios.post(API_URL,userData)
    if(response.data){
        localStorage.setItem('user',JSON.stringify(response.data))   
    }
    return response.data
}

const Login = async (userData) => {
    const response = await axios.post(API_URL + 'login', userData)
  
    console.log(response.data)
    if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data))
    }
  
    return response.data
  }

const Logout = ()=>{
    localStorage.removeItem('user')
}
const authService = {
    register,
    Login,
    Logout,
}

export default authService