const express=require('express')
const { register, login } = require('../Controllers/UserController')
const router=express.Router()





router.post('/userregister',register)
router.post('/loginuser',login)

module.exports=router