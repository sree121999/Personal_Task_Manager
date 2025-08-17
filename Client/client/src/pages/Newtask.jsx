import { useState } from "react"
import {  taskcreation } from "../services/Userservice"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"


const Newtask=()=>{
  const navigate=useNavigate()

  const[title,settitle]=useState('')
  const[description,setdescription]=useState('')
  const[status,setstatus]=useState('')
  const[dueDate,setduedate]=useState('')

  console.log(title,description,status,dueDate)


  const oncreatetask=()=>{
    taskcreation({title,description,status,dueDate}).then((res)=>{
      console.log(res)
      toast.success('New Task Created Successfully')
      navigate('/dashboard')

    }).catch(error=>{console.log(error)
  toast.error(error.response.data.error,{position:'top-center'})})

  }

    return(
        <>
         
    <div className="bg-base-200 h-screen pt-8">
      <h2 className="text-4xl font-bold text-center mb-5">Create Your New Task</h2>
      <div className="flex justify-center items-center">
     
      
  
   
    <div className=" bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Title</label>
          <input type="text" className="input"required placeholder="Title" onChange={(e)=>settitle(e.target.value)} />
          <label className="label">Description</label>
          <input type="text" required className="input" placeholder="Description" onChange={(e)=>setdescription(e.target.value)} />
          <label className="label">Status</label>
          <select className="input" required onChange={(e)=>setstatus(e.target.value)}>
            <option>pending</option>
             <option>inprogress</option>
          
            <option>done</option>

          </select>
          <label className="label">Duedate</label>
          <input type="text" required className="input" onChange={(e)=>setduedate(e.target.value)}/>
          
          <button onClick={oncreatetask} className="btn btn-neutral mt-4">Create</button>
        </fieldset>
      </div>
    </div>
    </div>
    </div>
  

        
        </>
    )
}

export default Newtask