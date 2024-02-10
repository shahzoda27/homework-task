import axios from "axios";

const axiosClient = axios.create({
    baseURL:'http://34.143.212.163:3000/api'
})

axiosClient.interceptors.request.use((config)=>{
    let token = localStorage.getItem('token')
    if (token) {
        config.headers['Authorization']  = `Bearer ${token}`
    }
    return config
},function (err) {
    return Promise.reject(err)
}
)
axiosClient.interceptors.response.use((res)=>{
    return res
},function (err) {
    return Promise.reject(err)
}
)
export default axiosClient