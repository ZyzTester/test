import axios from "axios";
import jwtDecode from "jwt-decode";
import { stringify } from "query-string";
import { fetchUtils } from "react-admin";

const apiUrl = 'https://beautify-mobile.pl/'
const httpClient = fetchUtils.fetchJson;

const authProvider = {
    login: ({ email, password }) =>  {
        const request = new Request('https://beautify-mobile.pl/authentication_token', {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json', 'Content-Type': 'application/json' }),
            body: JSON.stringify({ email, password })
        });
        return fetch(request)
        .then(response => {
            if (response.status < 200 || response.status >= 300) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(({ token }) => {            
            axios.get('https://beautify-mobile.pl/me?id=1', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then((res) => {
                if (res.status < 200 || res.status >= 300)
                    throw new Error(res.statusText);
                
                if(!res.data.roles.includes("ROLE_ADMIN")){
                    throw new Error("User is not permitted");
                }
                localStorage.setItem('token', token);
                localStorage.setItem('roles', JSON.stringify(res.data.roles))
                
            })
            .catch(err => {
                throw new Error(err);
            })
            
        })
        .catch(err => {
            throw new Error(err);
        })
        },
    checkError: (error) => { 
        if (401 === error.status || 403 === error.status) {
            localStorage.removeItem('token');
            localStorage.removeItem('roles');
    
            return Promise.reject();
          }
        return Promise.resolve()
     },
    checkAuth: () => {
        return localStorage.getItem('token') ? Promise.resolve() : Promise.reject();
    },
    logout: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('roles');
        return Promise.resolve();
    },
    getIdentity: () => { /* ... */ },
    getPermissions: () => {
        const roles = localStorage.getItem('roles');
        return roles ? Promise.resolve(roles) : Promise.reject();
    },

};

export default authProvider;