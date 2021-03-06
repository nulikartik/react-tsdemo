import { applyMiddleware, combineReducers, createStore } from 'redux';
import reduxPromise from 'redux-promise';
import SetSelectedTEMPLATEReducer from './setTemplate';
import SetSelectedWishReducer from './setWish';
import TemplateReducer from './templates';
import WishReducer from './wishes';


const rootReducer = combineReducers({
  selectedTemplate: SetSelectedTEMPLATEReducer,
  selectedWish: SetSelectedWishReducer,
  templates: TemplateReducer,
  wishes: WishReducer
});

// console.log(store.getState());
const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore);

export default createStoreWithMiddleware(rootReducer);