import axios from 'axios';
import { getSession } from './session';
import User from '../../user/user.model';

export const api = axios.create({
    baseURL: 'http://localhost:5000/',
    headers: { 'content-type': 'application/json' }
});

api.interceptors.request.use(
    async options => {
        const session: User = await getSession();
        if (session) 
            options.headers['Authorization'] = `Bearer ${session.accessKey}`;
        
        return options;
    }, error => {
        console.log('Request error: ', error);
        return Promise.reject(error);
});