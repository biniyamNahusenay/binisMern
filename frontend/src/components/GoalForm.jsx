import { useState } from "react"
import { UseSelector ,useDispatch} from "react-redux"
import "./GoalForm.css"
import {createGoal} from "../features/goals/goalSlice"
const Goalform = () => {
    const [text,setText] = useState('')
    
    const dispatch = useDispatch()
    const onSubmit = (e)=>{
      e.preventDefault()

      dispatch(createGoal({text}))
      setText('')
    }
  return (
    <div className='goalForm'>
       <form onSubmit={onSubmit}>
         <div className="form-group">
            <label htmlFor="text">goal</label>
            <input type="text" name="text" id="text" value={text} onChange={(e)=>setText(e.target.value)}/>
         </div>
         <div className="form-group">
           <button type="submit" className="btn btn-block">AddGoal</button>
        </div>
       </form>
    </div>
  )
}

export default Goalform
