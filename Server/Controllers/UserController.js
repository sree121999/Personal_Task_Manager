const User = require("../Models/User")
const bcrypt=require('bcrypt')

const jwt=require('jsonwebtoken')
require('dotenv').config()


const register=async(req,res)=>{
    try{
        console.log(req.body);
        
const {name,email,password}=req.body
if(!name || !email || !password){
    return res.status(400).json({error:'All fields are required'})
}
const userExist=await User.findOne({email})
if(userExist){
    return res.status(400).json({error:"Email already exist"})
}

const hashespassword=await bcrypt.hash(password,10)

const registeruser= await User.create({name,email,password:hashespassword})
res.status(200).json({message:"User created",registeruser})



    }catch(error){
        console.log(error)
        res.status(error.status || 500).json({error:error.message || "internal server error"})

    }
}


const login=async(req,res)=>{
    try{
const{email,password}=req.body
if(!email || !password){
    return res.status(400).json({error:"fields are required"})
}

const userExist=await User.findOne({email})
if(!userExist){
    return res.status(400).json({error:"user not found"})
}

const ismatch= await bcrypt.compare(password,userExist.password)
if(!ismatch){
    return res.status(400).json({error:'password does not match'})
}

const payload={userExist:{id:userExist._id}}
const token=jwt.sign(payload,process.env.TOKEN,{expiresIn:'1h'})

  


res.status(200).json({message:"login successfully",userExist,token})

    }catch(error){
        console.log(error)
        res.status(error.status || 500).json({error:error.message || "internal server error"})

    }

}

module.exports={register,login}