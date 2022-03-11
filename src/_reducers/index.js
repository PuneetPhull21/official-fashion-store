import {combineReducers} from 'redux';
import {alert} from './alert.reducer';
import {registering} from './registeruser.reducer';
import { authentication } from './authentication.reducer';
import {CartProcess} from './cart.reducer';
import { WishListProcess } from './wishList.reducer';
const rootReducer = combineReducers({
       alert,
       registering,
       authentication,
       CartProcess,
       WishListProcess,
})

export default rootReducer;