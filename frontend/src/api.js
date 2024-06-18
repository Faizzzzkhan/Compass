import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000'
})

// Add Custom Headers For all requests
api.interceptors.request.use((config) => {
    let headerToken = localStorage.getItem('accessToken');
    if(headerToken){
        config.headers['FBase-Token'] = headerToken;
    }
    return config
}, (error) => {
    console.log('Response interceptor error', error)
    return Promise.reject(error)
})

export default api;