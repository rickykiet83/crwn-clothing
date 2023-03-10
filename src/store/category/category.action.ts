import { Categories, mapCategories } from '@models/category';

import { CATEGORIES_ACTION_TYPES } from './category.types';
import { createAction } from '@utils/reducer/reducer.utils';
import { getCategoriesAndDocuments } from '@utils/firebase/firebase.utils';

export const setCategories = (categoriesArray: Categories[]) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray);

export const fetchCategoriesStart = () => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);
export const fetchCategoriesSuccess = (categoriesArray: Categories[]) => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArray);
export const fetchCategoriesFailed = (error: any) => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);

export const fetchCategoriesAsync = (): any => async (dispatch: any) => {
  dispatch(fetchCategoriesStart());

  try {
    const categoriesArray = await getCategoriesAndDocuments();
    const categories = mapCategories(categoriesArray);
    dispatch(fetchCategoriesSuccess(categories));
  } catch (error) {
    dispatch(fetchCategoriesFailed(error));
  }
}
