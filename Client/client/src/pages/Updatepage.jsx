import { useEffect,useState } from "react"
import { getone, updatetask } from "../services/Userservice";
import {  useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";


const Updatepage = () => {
    const navigate=useNavigate()
    const { id } = useParams();
    console.log(id)
  
  
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("pending");
  const [dueDate, setDueDate] = useState("");

useEffect(()=>{
    if (id) {
      getone(id)
        .then((res) => {
            console.log("Task fetched:", res.data.getone)
          const task = res?.data?.getone
          setTitle(task.title);
          setDescription(task.description);
          setStatus(task.status);
          setDueDate(task.dueDate);
        })
        .catch((error) => console.log(error));
    }
  }, [id]);

  


  const onupdate=()=>{

     const updatedTask = {
    title,
    description,
    status,
    dueDate,
  };

    updatetask(id,updatedTask).then((res)=>{
        console.log(res)
        toast.success('Task updated successfully')
        navigate('/dashboard')

    }).catch(error=>{console.log(error)
toast.error(error?.response?.data?.error,{position:'top-center'})})

  }


    return(
        <>
         <div className="bg-base-200 h-screen pt-8">
      <h2 className="text-4xl font-bold text-center mb-5">Update Your Task</h2>
      <div className="flex justify-center items-center">
     
      
  
   
    <div className=" bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Title</label>
          <input type="text" className="input"required placeholder="Title" value={title}  onChange={(e)=>setTitle(e.target.value)} />
          <label className="label">Description</label>
          <input type="text" required className="input" placeholder="Description"   value={description}  onChange={(e)=>setDescription(e.target.value)} />
          <label className="label">Status</label>
          <select className="input" required value={status}  onChange={(e)=>setStatus(e.target.value)}>
            <option>pending</option>
             <option>inprogress</option>
          
            <option>done</option>

          </select>
          <label className="label">Duedate</label>
          <input type="text" required value={dueDate}  className="input" onChange={(e)=>setDueDate(e.target.value)}/>
          
          <button onClick={onupdate}  className="btn btn-neutral mt-4">Save Changes</button>
        </fieldset>
      </div>
    </div>
    </div>
    </div>
  

        </>
    )
}

export default Updatepage