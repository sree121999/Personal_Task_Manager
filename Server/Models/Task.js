const mongoose=require('mongoose')

const taskSchema=new mongoose.Schema({
   
    title:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        default:""
    },
    status:{
        type:String,
        required:true,
        enum:["pending","inprogress","done"],
        default:"pending"
    },
    dueDate:{
        type:String,
        required:true
    }
},{timestamps:true})

module.exports=mongoose.model('Task',taskSchema)