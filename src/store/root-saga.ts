import { all, call, put } from 'typed-redux-saga';

import { categoriesSaga } from './category/category.saga';

export function* rootSaga() {
  yield all([call(categoriesSaga)]);
}