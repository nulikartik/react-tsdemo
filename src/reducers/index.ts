import { applyMiddleware, combineReducers, createStore } from 'redux';
import reduxPromise from 'redux-promise';
import WishReducer from './wishes';

const rootReducer = combineReducers({
  wishes: WishReducer
});

// console.log(store.getState());
const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore);

export default createStoreWithMiddleware(rootReducer);