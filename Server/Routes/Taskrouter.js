const express=require('express')


const { createtask, getallTask, updateTask, deleteTask, getoneTask } = require('../Controllers/Taskcontroller')
const router=express.Router()

const authmiddleware=require('../Middleware/webtoken')







router.post('/createTask',authmiddleware,createtask)
router.get('/getallTask',authmiddleware, getallTask)
router.put('/updateTask/:id',authmiddleware,updateTask)
router.delete('/deleteTask/:id',authmiddleware,deleteTask)
router.get('/getonetask/:id',authmiddleware,getoneTask)





module.exports=router