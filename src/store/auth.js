import { create } from "zustand";
import axiosClient from './../plugins/axiosClient';
const useAuthStore = create((set)=>({
    register: async(payload)=>{
        try{
            const response = await axiosClient.post("/auth/signup",payload)
            console.log(response);
            if (response?.data?.tokens?.access_token) {
                localStorage.setItem('token',response.data.tokens.access_token)}
        }catch(error){
            console.error(error)
        }
    },
    login:async(payload)=>{
        try{
        const response = await axiosClient.post("/auth/signin",payload)
        if (response?.data?.tokens?.access_token) {
            localStorage.setItem('token',response.data.tokens.access_token)}
        }catch(error){
            console.error(error)
        }
    }
}))
export default useAuthStore