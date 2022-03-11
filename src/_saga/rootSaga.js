import { all} from 'redux-saga/effects'
import {fetchLogin} from './user.Saga';
import {fetchProductApi} from './Product.Saga';
export default function* rootSaga() {
    yield all([
       fetchLogin(),
       fetchProductApi(),
       
    ]);
}