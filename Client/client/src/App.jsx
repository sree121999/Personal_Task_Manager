import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"
import Newtask from "./pages/Newtask"
import Updatepage from "./pages/Updatepage"


const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}></Route>
       <Route path="/register" element={<Register/>}></Route>
       <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/newtask" element={<Newtask/>}></Route>
          <Route path="/updatepage/:id" element={<Updatepage/>}></Route>
    </Routes>
    </BrowserRouter>
    
    
    </>
  )
}
export default App