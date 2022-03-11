import { takeEvery, call, put } from "redux-saga/effects";
import { productactions, CartActions, wishlistActions,alertActions } from "../_actions";
import { product } from "../_services";
import { CartConstant, WishListConstant } from "../_constants";
import { history } from "../_helpers";
import {Notification} from '../_UI/Notification';


function* ProductList() {
  try {
    const result = yield call(() => {
      return product.ProductListApi();
    });
    yield put(productactions.ProductListSuccess(result));
  } catch (error) {
    yield put(productactions.ProductListRequest(error.toString()));
  }
}

function* AddToCart(productdetails) {
  const result = yield call(() => {
    return product.AddToCart(productdetails.payload);
    });
  if (result.status === 200) {
    yield put(CartActions.ADDCARTSUCCESS(result));
   Notification('success',"Product is added to Cart");  
  } else {
    yield put(CartActions.ADDCARTFAILURE(result.data));
    Notification('error',"There is Some Problem");
  }
}
function* DeleteFromCart(productdetails) {
  const { payload } = productdetails;
  console.log(payload);
  const result = yield call(() => {
    return product.DeleteProductFromCart(payload.item_id, payload.quote_id);
  });
  console.log(result);
}

function* AddToWishList(productdetails) {
  const user = JSON.parse(localStorage.getItem("user"));
  if ( user &&  user.token && user.userdetails) {
    const { id } = JSON.parse(user.userdetails);
    const Customer_id = {
      customerId: id,
    };
    const result = yield call(() => {
      return product.AddToWishList(productdetails.payload, Customer_id);
    });
    if (result.status === 200) {
      yield put(wishlistActions.AddToWishListSuccess(result.data[0].message));
      Notification('success',"Product is Added in Wishlist ")
    } else {
      yield put(wishlistActions.AddToWishListFailure(result.data[0].message));
      Notification('error',"SomeThing Want Wrong");
    }
  } else {
    yield put(wishlistActions.AddToWishListFailure("Please Login First"));
    Notification('warning',"Login First");
  }
}

function* RemoveFromWishList(payload){
  const user = JSON.parse(localStorage.getItem("user"));
  const { id } = JSON.parse(user.userdetails);
  console.log(payload);
  const result = yield call(()=>{
    return product.RemoveWishList(payload.payload,id);
  })
  console.log(result);
}

export function* fetchProductApi() {
  yield takeEvery("Product_List_Api", ProductList);
  yield takeEvery(CartConstant.ADD_CART_REQUEST, AddToCart);
  yield takeEvery(CartConstant.REMOVE_CART_REQUEST, DeleteFromCart);
  yield takeEvery(WishListConstant.ADD_WISHLIST_REQUEST, AddToWishList);
  yield takeEvery(WishListConstant.REMOVE_WISHLIST_REQUEST,RemoveFromWishList);
}
