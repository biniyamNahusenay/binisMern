import { Routes, Route} from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
function App() {
  return (
    <>
   
       <div className="Container">
        <Header/>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </div>
     <ToastContainer/>
   </>
  );
}

export default App;
