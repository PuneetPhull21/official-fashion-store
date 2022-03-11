import { WishListConstant } from "../_constants";

const initialState = {};

export function WishListProcess(state = initialState, action) {
  switch (action.type) {
    case WishListConstant.ADD_WISHLIST_REQUEST:
      return {
        payload: action.payload,
      };
    case WishListConstant.ADD_WISHLIST_SUCCESS:
      return {
        type:'wishlist-success',
        payload: action.payload,
      };
    case WishListConstant.ADD_WISHLIST_FAILURE:
      return {};
    case WishListConstant.REMOVE_WISHLIST_REQUEST:
      return {
        payload: action.payload,
      };
    case WishListConstant.REMOVE_WISHLIST_SUCCESS:
      return {
        payload: action.payload,
      };
    case  WishListConstant.REMOVE_WISHLIST_FAILURE:
      return {};
    default:
      return state;
  }
}
