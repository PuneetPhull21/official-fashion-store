import {userConstants} from '../_constants';

const user = localStorage.getItem('user');
const initialState = user ? { loggedIn: true, user } : {};

    export function authentication(state = initialState, action) {
        switch (action.type) {
          case userConstants.LOGIN_REQUEST:
            return {
              payload: action.payload
            };
          case userConstants.LOGIN_SUCCESS:
            return {
              loggedIn: true,
              payload: action.payload
            };
          case userConstants.LOGIN_FAILURE:
            return {};
          case userConstants.LOGOUT:
            return {};
          default:
            return state
        }
    }