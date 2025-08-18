import { useEffect, useState } from "react"
import Card from "../componants/Card"

import { listtasks } from "../services/Userservice"
import createtaskbtn from "../componants/Createtaskbtn"
import Createtaskbtn from "../componants/Createtaskbtn"

const Dashboard=()=>{

    const[tasks,settasks]=useState([])



    useEffect(()=>{
      listtasks().then((res)=>{
            
            console.log("🔎 Raw response from listtasks:", res);
      console.log("🔎 Response data:", res?.data);
      console.log("🔎 alltask:", res?.data?.alltask);



            settasks(res?.data?.alltask ||[])
        }).catch(err=>console.log(err))

    },[])

 


    return(
        <>
        <div className="min-h-screen bg-base-200">
            <Createtaskbtn/>
            
            

        <div className="bg-base-200 grid grid-cols-1 md:grid-cols-3 gap-3  ">
           {Array?.isArray(tasks) && tasks.length > 0 ? (
    tasks.map((task) => (
      <Card key={task._id} task={task} taskid={task._id} />
    ))
  ) : (
    <p className="text-center col-span-3">No tasks found</p>
  )}
        </div>
        </div>
        </>

    )
}

export default Dashboard