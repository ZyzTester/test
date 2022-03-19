import jwtDecode from "jwt-decode";
const authProvider = {
    login: ({ email, password }) =>  {
        const request = new Request('https://beautify-mobile.pl/authentication_token', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        });
        return fetch(request)
        .then(response => {
            if (response.status < 200 || response.status >= 300) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(({ token }) => {
            
            localStorage.setItem('token', token);
        });
    },
    checkError: (error) => { /* ... */ },
    checkAuth: () => {
        return localStorage.getItem('token') ? Promise.resolve() : Promise.reject();
    },
    logout: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('permissions');
        return Promise.resolve();
    },
    getIdentity: () => { /* ... */ },
    getPermissions: () => {
        const token = localStorage.getItem('token');
        const request = new Request('https://beautify-mobile.pl/greetings', {
            method: 'GET',
            headers: new Headers({ 'Authorization': `Bearer ${token}` }),
        });
        return fetch(request)
        .then(response => {
            if (response.status < 200 || response.status >= 300) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
    }
};

export default authProvider;