import {takeEvery,call,put} from 'redux-saga/effects';
import {userActions,alertActions,RegisteAction} from '../_actions';
import {userService} from '../_services';
import {userConstants} from '../_constants'; 
import {history} from '../_helpers'; 


 function* login(user){
        console.log(user.payload);
        const result = yield  call(()=>{ return userService.login(user.payload.username,user.payload.password)});
        console.log(result)
        if(result.status === 200){
        yield put(userActions.LOGINSUCCESS(result));
       const details =  yield call(()=>{ return userService.userDetails(result.data)});
       const token  = result.data
       const userdetails = JSON.stringify(details.data);
       const user =  {token,userdetails};  
        localStorage.setItem('user',JSON.stringify(user));
        yield put(alertActions.success("Login is SucceesFully"))
        history.push('/');
        }
        else{
         yield put(userActions.LOGINFAILURE(result.data.message.toString()));
         yield put(alertActions.error(result.data.message.toString()));
        } 
}

function* register(user){
   
     const result = yield call( ()=>{ return userService.register(user.payload)});
     console.log(result)
     if(result.status === 200){
     yield put (RegisteAction.REGISTERSUCCESS(result.data));
     yield put(alertActions.success("Successfully Registered on Fashion Store"));
     history.push('/login');
     }
    else{ 
    yield put(RegisteAction.REGISTERFAILURE(result.data.message.toString()));
    yield put(alertActions.error(result.data.message.toString()))
    }
}

function* Logout(){
 yield put(userService.logout());
}


export function* fetchLogin(){
    yield takeEvery(userConstants.LOGIN_REQUEST,login)
    yield takeEvery(userConstants.REGISTER_REQUEST,register);
    yield takeEvery(userConstants.LOGOUT,Logout);
}