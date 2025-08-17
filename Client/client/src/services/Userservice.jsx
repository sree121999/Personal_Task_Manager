import { axiosinstance } from "../Axios/AxiosInstance"



export const userregister=(data)=>{
    return axiosinstance.post('/userregister',data)
}

export const userlogin=(data)=>{
    return axiosinstance.post('/loginuser',data)
}


export const listtasks=()=>{
    return axiosinstance.get("/api/getallTask")
}

export const taskcreation=(data)=>{
    return axiosinstance.post('/api/createTask',data)
    
}

export const getone=(id)=>{
    return axiosinstance.get(`/api/getonetask/${id}`)
}


export const updatetask=(id,updatedTask)=>{
    return axiosinstance.put(`/api/updateTask/${id}`,updatedTask)
}

export const deletetask=(id)=>{
    return axiosinstance.delete(`/api/deleteTask/${id}`)
}