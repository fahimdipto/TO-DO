import axios from "axios";
 const url ="http://localhost:5001/tasks"

export const getTasks = ()=>{
     return axios.get(url);
}
export const addTask=(data)=>{
     return axios.post(url,data);
}
export const updateTask = (id,data)=>{
    return axios.put(url+'/'+id,data);
}
export const deleteTask = (id)=>{
    return axios.delete(url+'/'+id);
}