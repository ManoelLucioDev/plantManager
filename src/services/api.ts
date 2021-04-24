import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.15.5:19002',
});

export default api;