import { create } from "zustand";
import axiosClient from './../plugins/axiosClient';
const useAuthorStore = create((set)=>({
    authors:[],
    getAuthor: async()=>{
        try{
            const response = await axiosClient.get("/author")
            set({authors:response.data})
            console.log(response);
        }catch(error){
            console.error(error)
        }
    },
    postAuthor: async(payload)=>{
        try{
            const response = await axiosClient.post("/author",payload)
            if (response?.tokens?.access_token) {
                localStorage.setItem('token',response?.tokens?.access_token)}
        }catch(error){
            console.error(error)
        }
    },
    uploadImage: async (payload) => {
        try {
          const response = await axiosClient.post("/files/upload", payload);
          console.log(response);
        } catch (error) {
          console.error(error);
        }
      },
}))
export default useAuthorStore