import { Categories } from '@models/category';
import { createSelector } from 'reselect';

const selectCategoryReducer = (state: any) => state.categories;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc: any, category: Categories) => {
      const { title, items } = category;
      acc[title.toString().toLowerCase()] = items;
      return acc;
    }, [])
);

export const selectIsCategoriesLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
)