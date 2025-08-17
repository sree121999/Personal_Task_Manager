const express=require('express')
const app=express()
const cors=require('cors')
require('dotenv').config()
const mongoose=require('mongoose')
const userRouter=require('./Routes/UserRouter')
const cookieparser=require('cookie-parser')


const Taskrouter=require('./Routes/Taskrouter')

mongoose.connect('mongodb+srv://sree91336:fDAXsRhpRTkzVHUp@cluster0.onhd5ma.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then((res)=>{
    console.log('db connection successfull')
}).catch((err)=>{
    console.log(err)

})





app.use(cors({
  origin: 'http://localhost:5173',
   methods: ["GET", "POST", "PUT", "DELETE"],
   allowedHeaders: ["Content-Type"],
  credentials:true
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use(cookieparser())

app.use('/',userRouter)
app.use('/api',Taskrouter)





const PORT = process.env.PORT || 8000;




app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`)

})



