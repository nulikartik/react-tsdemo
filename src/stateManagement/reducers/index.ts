import { applyMiddleware, combineReducers, createStore } from 'redux';
import reduxPromise from 'redux-promise';
import WishReducer from './wishes';
import TemplateReducer from './templates';

const rootReducer = combineReducers({
  wishes: WishReducer,
  templates: TemplateReducer
});

// console.log(store.getState());
const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore);

export default createStoreWithMiddleware(rootReducer);