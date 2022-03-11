//import  ThunkMiddleware from "redux-thunk";
import {createLogger} from 'redux-logger';
import  CreateSagaMiddleware from 'redux-saga';
import {createStore,applyMiddleware} from 'redux';
import rootReducer from "../_reducers";
import RootSaga from '../_saga/rootSaga';


const loggerMiddleware = createLogger();
const SagaMiddleware = CreateSagaMiddleware();
export const store = createStore(
    rootReducer,
    applyMiddleware(
       SagaMiddleware,
       loggerMiddleware, 
    )
)

SagaMiddleware.run(RootSaga);