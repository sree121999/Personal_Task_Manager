import { useNavigate } from "react-router-dom"

const Createtaskbtn=()=>{
    const navigate=useNavigate()

    const createHandler=()=>{
        navigate('/newtask')
    }


    return(
        <>
        
        <button onClick={createHandler} className="btn btn-primary mt-7 ms-11">Create New Task</button>
        
    
        
        </>
    )
}

export default Createtaskbtn