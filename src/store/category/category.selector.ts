export const selectCategories = (state: any) => state.categories.categories
  .reduce((acc: any, category: any) => {
    const { title, items } = category;
    acc[title.toString().toLowerCase()] = items;
    return acc;
  }, {});
