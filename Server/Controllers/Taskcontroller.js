const Task = require("../Models/Task")
const { create } = require("../Models/Task")

const createtask=async(req,res)=>{

    
    try{
        console.log("Received body:", req.body);


        let{title,description,status,dueDate}=req.body
        if( !title || !description || !status || !dueDate){
            return res.status(400).json({error:'fields are required'})
        }   
        
       

        const task=await Task.create({title,description,status,dueDate})
      
         
        res.status(201).json({message:'task created',task})

    }catch(error){
        console.log(error)
        res.status(error.status || 500).json({error:error.message || 'internal server error'})

    }
    }


    const getallTask=async(req,res)=>{
    try{
        const alltask=await Task.find()
        if(!alltask){
            return res.status(400).json({error:'Task not found'})
        }
        res.status(200).json({message:'All tasks',alltask})

    
    }catch(error){
        console.log(error)
        res.status(error.status || 500).json({error:error.message || 'internal server error'})

    }
    }



    const updateTask=async(req,res)=>{
    try{
        const taskId=req.params.id
        const {title,description,status,dueDate}=req.body
        if(!title || !description || !status || !dueDate){
            return res.status(400).json({error:'fields are required'})
        }
        const updated=await Task.findByIdAndUpdate(taskId,{title,description,status,dueDate},{new:true,runValidators:true})
        if(!updated){
            return res.status(400).json({error:'task not found'})
        }
        res.status(200).json({message:'task updated successfully',updated})
        

    
    }catch(error){
        console.log(error)
        res.status(error.status || 500).json({error:error.message || 'internal server error'})

    }
    }


    const deleteTask=async(req,res)=>{
    try{
        
        const taskId=req.params.id
        const deleted=await Task.findByIdAndDelete(taskId)
        res.status(200).json({message:'task deleted successfully',})
        

    
    }catch(error){
        console.log(error)
        res.status(error.status || 500).json({error:error.message || 'internal server error'})

    }
    }


    const getoneTask=async(req,res)=>{
    try{
        const taskId=req.params.id
        const getone =await Task.findById(taskId)
        res.status(200).json({message:'get task',getone})
       

    
    }catch(error){
        console.log(error)
        res.status(error.status || 500).json({error:error.message || 'internal server error'})

    }
    }

    








    module.exports={createtask,getallTask,updateTask,deleteTask,getoneTask}

