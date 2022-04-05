import { createStore, combineReducers } from 'redux';
import bookReducer from './books/books';
import categoryReducer from './categories/categories';

const rootReducer = combineReducers({ bookReducer, categoryReducer });
const store = createStore(rootReducer);

export default store;
