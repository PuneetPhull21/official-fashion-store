import { userConstants } from "../_constants";

const LOGINREQUEST = (user) => {
  return {
    type: userConstants.LOGIN_REQUEST,
    payload: user,
  };
};

const LOGINSUCCESS = (result) => {
  return {
    type: userConstants.LOGIN_SUCCESS,
    payload: result,
  };
};

const LOGINFAILURE = (error) => {
  return {
    type: userConstants.LOGIN_FAILURE,
    payload: error,
  };
};
const LOGOUT = ()=>{
  return {
  type:userConstants.LOGOUT,
  }
}
export const userActions = {
  LOGINREQUEST,
  LOGINSUCCESS,
  LOGINFAILURE,
  LOGOUT,
};
