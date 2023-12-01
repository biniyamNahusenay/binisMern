import { useEffect } from "react"
import {useNavigate} from "react-router-dom"
import {useSelector,useDispatch} from "react-redux"
import Goalform from "../components/GoalForm"
import GoalItem from "../components/GoalItem"
import "./Dashboard.css"
import Spinner from "../components/Spinner"
import { getGoal, reset } from "../features/goals/goalSlice"
const Dashboard = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user} = useSelector((state)=>state.auth)
  const {goal,isLoading,isError,message} = useSelector((state)=>state.goal)

  useEffect(()=>{
    if(isError){
      console.log(message)
    }
    if(!user){
      navigate("/login")
    }
    dispatch(getGoal())

    return ()=>{
      dispatch(reset())
    }
  },[user,navigate,isError,dispatch,message])

  if(isLoading){
    return <Spinner/>
  }
  return (
   <>
   <div className="container"> 
    <div className="dashboard">
       <h1>welcome {user && user.name}</h1>
       <p>Goals Dashboard</p>
    </div>
    <Goalform/>

    <div className="content">
      {goal.length > 0 ? (
        <div className="goals">
          {goal.map((goal)=>(
             <GoalItem key={goal._id} goal = {goal}/>
          ))}
        </div>
      ) : (<h3>not a goal</h3>)}
    </div>
   </div>
   </>
  )
}

export default Dashboard
