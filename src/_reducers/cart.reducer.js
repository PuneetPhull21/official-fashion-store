import { CartConstant } from "../_constants";

const initialState = {};

export function CartProcess(state = initialState, action) {
  switch (action.type) {
    case CartConstant.ADD_CART_REQUEST:
      return {
        payload: action.payload,
      };
    case CartConstant.ADD_CART_SUCCESS:
      return {
        payload: action.payload,
      };
    case CartConstant.ADD_CART_FAILURE:
      return {};
    case CartConstant.REMOVE_CART_REQUEST:
      return {
        payload: action.payload,
      };
    case CartConstant.REMOVE_CART_SUCCESS:
      return {
        payload: action.payload,
      };
    case CartConstant.REMOVE_CART_FAILURE:
      return {};

    default:
      return state;
  }
}
