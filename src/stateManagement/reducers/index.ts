import { applyMiddleware, combineReducers, createStore } from 'redux';
import reduxPromise from 'redux-promise';
import TemplateReducer from './templates';
import WishReducer from './wishes';

const rootReducer = combineReducers({
  templates: TemplateReducer,
  wishes: WishReducer
});

// console.log(store.getState());
const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore);

export default createStoreWithMiddleware(rootReducer);