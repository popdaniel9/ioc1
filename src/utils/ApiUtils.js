

import axios from
        'axios';





export function userLogin(username, password)
{


    return axios.post('/user/login',
        ({username: username,
            password: password}));


}