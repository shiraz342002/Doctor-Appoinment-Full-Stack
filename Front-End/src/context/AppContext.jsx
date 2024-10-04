import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import {toast} from "react-toastify"
import axios from "axios"


export const AppContext = createContext()
const AppContextProvider=(props)=>{
const [doctors,setDoctors]=useState([])
const [token,setToken]=useState(localStorage.getItem('token')?localStorage.getItem('token'):false)
const [userData,setUserData]=useState(false)

const currencySymbol='$'
const backendUrl=import.meta.env.VITE_BACKEND_URL
const getAllDoctors=async()=>{
    try {        
        // console.log("getDoctors");
        
        const {data} = await axios.get(backendUrl+'/api/doctor/list')
        if(data.success){
            setDoctors(data.doctors)
            // console.log(data.doctors);
        }else{
            toast.error(data.message)
        }
    } catch (error) {
        toast.error(error.message)
        console.log(error);
        
    }
}
const loadUserProfileData=async()=>{
    try {
        // console.log(token);
        const {data} = await axios.get(backendUrl+'/api/user/get-profile',{headers:{token}})
        // console.log(data);
        if(data.success){
            setUserData(data.userData)
        }
        else{
            toast.error(data.message)
        }
    } catch (error) {
        toast.error(error.message)
        console.log(error);
    }
}
useEffect(()=>{
    if(token){
        
        loadUserProfileData()
    }else{
        setUserData(false)
    }
},[token])

useEffect(()=>{
    getAllDoctors()
},[])


    const value ={
        currencySymbol,
        doctors,
        getAllDoctors,
        token,
        setToken,
        backendUrl,
        userData,
        setUserData,
        loadUserProfileData
    }
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider