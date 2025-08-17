import {  useNavigate } from "react-router-dom";
import { deletetask } from "../services/Userservice";
import { toast } from "react-toastify";

const Card = ({ task,taskid }) => {

  const navigate=useNavigate()
  const updateHandler=()=>{
    navigate(`/updatepage/${taskid}`)

  }


  const deleteHandler = () => {
  
  

  deletetask(taskid)
    .then((res) => {
      console.log(res);
      alert('deleted successfully')
       window.location.reload()
    })
    .catch((error) => {
      console.log(error);
      toast.error(error.response?.data?.error || "Something went wrong", {
        position: "top-center",
      });
    });
};


  return (
    


    <div className="card bg-neutral text-neutral-content w-96 m-10">
      
      
      <div className="items-center text-center p-5 leading-9">
        
        <h2 className=" text-center font-bold">Title:  {task.title || "No Title"}</h2>
        <p>Description:  {task.description || "No Description"}</p>
        <p>Status:  {task.status || "Pending"}</p>
        <p>Duedate:  {task.dueDate ? new Date(task.dueDate).toLocaleDateString() : "No Due Date"}</p>
        <div className="card-actions justify-center mb-3 mt-2">
          <button onClick={updateHandler} className="btn btn-primary">Update</button>
          <button onClick={deleteHandler} className="btn bg-red-500 ">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Card
