import { combineReducers, createStore } from 'redux';
import WishReducer from './wishes';


const rootReducer = combineReducers({
  wishes: WishReducer
});

const store = createStore(rootReducer);
console.log(store.getState());
export default store;