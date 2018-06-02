import { applyMiddleware, combineReducers, createStore } from 'redux';
import reduxPromise from 'redux-promise';
import SetSelectedWishReducer from './setWish';
import TemplateReducer from './templates';
import WishReducer from './wishes';


const rootReducer = combineReducers({
  selectedWish: SetSelectedWishReducer,
  templates: TemplateReducer,
  wishes: WishReducer
});

// console.log(store.getState());
const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore);

export default createStoreWithMiddleware(rootReducer);