import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { userlogin } from "../services/Userservice"
import { toast } from "react-toastify"

const Login=()=>{
  const navigate=useNavigate()

  const[email,setemail]=useState('')
  const[password,setpassword]=useState('')
  console.log(email,password)

  const onlogin=()=>{
    userlogin({email,password}).then((res)=>{
      console.log(res)
      toast.success('login successful')
      navigate('/dashboard')


    }).catch(err=>{console.log('error',err)
      toast.error(err.response.data.error,{position:'top-center'})
    })

  }




    return(
        <>
        <div className="bg-base-200 text-center min-h-screen ">
       < h1 className="font-bold text-4xl pt-10">PERSONAL TASK MANAGER</h1>
        <div className="hero bg-base-200 ">
            
         
           
  <div className="hero-content flex-col lg:flex-row-reverse pt-30 gap-x-6">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6 text-gray-600">
        Personal Task Manager is your all-in-one productivity companion, designed to help you organize, track, and complete your daily goals with ease. Whether it’s work deadlines, personal errands, or long-term projects, this tool keeps everything in one place, so you never miss an important task. With a clean interface, reminders, and progress tracking, you can focus on what truly matters and stay on top of your schedule effortlessly.


        </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" required onChange={(e)=>setemail(e.target.value)} />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" required onChange={(e)=>setpassword(e.target.value)} />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button onClick={onlogin} className="btn btn-neutral mt-4">Login</button>
          <div className="mt-2 text-lg">
          Dont't have an account? <Link to={"/register"} className="text-blue-700 underline font-medium ">Sign up</Link>
          </div>
        </fieldset>
      </div>
    </div>
  </div>
</div>
</div>
        
        </>
    )
}

export default Login