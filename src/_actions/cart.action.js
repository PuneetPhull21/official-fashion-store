import {CartConstant} from '../_constants';


const ADDCARTREQUEST = (Product)=>{
   return {
       type:CartConstant.ADD_CART_REQUEST,
       payload:Product
   }   
}

const ADDCARTSUCCESS = (success)=>{
    return {
     type:CartConstant.ADD_CART_SUCCESS,
     payload:success
    }
}

const ADDCARTFAILURE = (error)=>{
    return {
        type:CartConstant.ADD_CART_FAILURE,
        payload:error

    }
}


const REMOVECARTREQUEST = (product)=>{
    return {
        type:CartConstant.REMOVE_CART_REQUEST,
        payload:product
    }
}

const REMOVECARTSUCCESS = (success)=>{
    return {
      type:CartConstant.REMOVE_CART_SUCCESS,
      paylaod:success
    }
}

const REMOVECARTFAILURE = (error)=>{
    return {
        type:CartConstant.REMOVE_CART_FAILURE,
        payload:error
    }
}


export const  CartActions = {
  ADDCARTREQUEST,
  ADDCARTSUCCESS,
  ADDCARTFAILURE,
  REMOVECARTREQUEST,
  REMOVECARTSUCCESS,
  REMOVECARTFAILURE,
}