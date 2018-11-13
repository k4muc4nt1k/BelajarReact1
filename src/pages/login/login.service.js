// import { API_ROOT } from 'api-config';

export const LoginService = (p_username, p_password) => {
    var params = { username: p_username, password: p_password };
    return fetch("http://10.0.2.2:6022/public/users/login",
        {
            method: 'post',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(params)
        })
        .then(res => res.json())
}