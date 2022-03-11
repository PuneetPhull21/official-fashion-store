import {WishListConstant} from '../_constants';
const AddToWishListRequested = (sku_name)=>{
    return {
        type:WishListConstant.ADD_WISHLIST_REQUEST,
        payload:sku_name
    }
}
  const AddToWishListFailure = (failure)=>{
      return {
          type:WishListConstant.ADD_WISHLIST_FAILURE,
          payload:failure
      }
}
 const AddToWishListSuccess = (success)=>{
     return {
         type:WishListConstant.ADD_WISHLIST_SUCCESS,
         payload:success
     }
 }
 const RemoveToWishListRequest = (sku_name)=>{
   return {
     type:WishListConstant.REMOVE_WISHLIST_REQUEST,
     payload:sku_name
   }
 }

 const RemoveToWishListSuccess = (success)=>{
     return {
         type:WishListConstant.REMOVE_WISHLIST_SUCCESS,
         payload:success
     }
 }
 const RemoveToWishListFailure = (failure)=>{
     return {
         type:WishListConstant.REMOVE_WISHLIST_FAILURE,
         payload:failure
     }
 }

 export const wishlistActions = {
     AddToWishListRequested,
     AddToWishListSuccess,
     AddToWishListFailure,
     RemoveToWishListRequest,
     RemoveToWishListSuccess,
     RemoveToWishListFailure
 }