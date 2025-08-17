import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { userregister } from "../services/Userservice"
import { toast } from "react-toastify"




const Register=()=>{

    const[name,setname]=useState('')
    const[email,setemail]=useState('')
     const[password,setpassword]=useState('')
     console.log(name,email,password)

     const navigate=useNavigate()

     const onsubmit=()=>{
        userregister({name,email,password}).then((res)=>{
            console.log(res)
            toast.success('signup  successfull')
            navigate('/')

        }).catch(err=>{console.log(err,'error')
          toast.error(err.response.data.error,{position:'top-center'})
        }
      )

     }






    return(
        <>
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Sign Up now!</h1>
      <p className="py-6 text-gray-500">
       Sign Up to create your personal account and unlock all features of the Task Manager. With your account, you can securely save tasks, access them from any device, and keep your progress synced. Joining is quick and easy — just enter your basic details and start managing your goals today.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">
            <label className="label">Name</label>
          <input type="text" className="input" placeholder="Name" required onChange={(e)=>setname(e.target.value)} />
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" required onChange={(e)=>setemail(e.target.value)} />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" required onChange={(e)=>setpassword(e.target.value)} />
          
          <button onClick={onsubmit} className="btn btn-neutral mt-4">Register</button>
          <div className="mt-2 text-lg">
           Already you have an account? <Link to={"/"} className="text-blue-700 underline font-medium ">Login</Link></div>
        </fieldset>
      </div>
    </div>
  </div>
</div>
        </>
    )
}
export default Register