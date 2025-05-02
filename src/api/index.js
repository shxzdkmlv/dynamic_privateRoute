import axios from "axios";

const request = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
})

request.interceptors.request.use((config)=>{
    let token = "fake" //localStorage.getItem("access_token")
    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

request.interceptors.response.use((config) => {
    // code..
    return config
})

export {request}