import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import bookReducer from './books/books';
import categoriesReducer from './categories/categories';

const rootReducer = combineReducers({ bookReducer, categoriesReducer });
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
