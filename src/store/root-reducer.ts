import { categoriesReducer } from './category/category.reducer';
import { combineReducers } from 'redux';
import { userReducer } from '@store/user/user.reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer
});