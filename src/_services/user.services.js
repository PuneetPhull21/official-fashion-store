//import config from 'config';
import request from './http_axios';
export const userService = {
    register,logout,login,userDetails
}

const token = "jnztsl452zn753eq0znr6bxzmnupvdu9";

//register function 

function register(user){
    const customer = {
        "customer": {
            "group_id": 1,
            "email": user.email,
            "firstname": user.firstname,
            "lastname": user.lastname,
            "store_id": 2,
            "website_id": 3
            },
            "password": user.password
}  
return request('/rest/V1/customers',JSON.stringify(customer),'post','',token);
}//function login 

function login(username,password){
    return request('fashion_store_view/rest/V1/integration/customer/token',JSON.stringify({username,password}),"post","",token);
}

function userDetails(user_token){
    return request('fashion_store_view/rest/V1/customers/me','',"get","",user_token);
}

//logout function 
function logout (){
    localStorage.removeItem('user');
}

