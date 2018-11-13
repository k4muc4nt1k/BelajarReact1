import {getToken, setUser} from '../../storage/login_storage';

export const getList = () => {
    
    var params = {};
    return fetch("http://10.0.2.2:6022/public/transusers/list",
        {
            method: 'post',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization':'Bearer '+getToken()
            }
            ,
            body: JSON.stringify(params)
        })
        .then(res => res.json())
}