import { combineReducers } from 'redux';
import WishReducer from './wishes';
import { createStore } from 'redux';

const rootReducer = combineReducers({
  wishes: WishReducer
});

var store = createStore(rootReducer);
console.log(store.getState());
export default store;