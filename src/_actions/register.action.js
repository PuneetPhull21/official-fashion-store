import { userConstants } from "../_constants";

const REGISTERREQUEST = (user) => {
  return {
    type: userConstants.REGISTER_REQUEST,
    payload: user,
  };
};

const REGISTERSUCCESS = (result) => {
  return {
    type: userConstants.REGISTER_SUCCESS,
    payload: result,
  };
};

const REGISTERFAILURE = (error) => {
  return {
    type: userConstants.REGISTER_FAILURE,
    payload: error,
  };
};

export const RegisteAction = {
  REGISTERSUCCESS,
  REGISTERFAILURE,
  REGISTERREQUEST,
};
