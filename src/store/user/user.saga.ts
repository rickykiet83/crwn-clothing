import { all, call, put, takeLatest } from 'typed-redux-saga';
import { createUserDocumentFromAuth, getCurrentUser } from '@utils/firebase/firebase.utils';
import { signInFailed, signInSuccess } from './user.action';

import { USER_ACTION_TYPES } from '@store/user/user.types';
import { User } from 'firebase/auth';

export function* getSnapshotFromUserAuth(userAuth: User, additionalDetails?: any) {
  try {
    const userSnapshot = yield* call(
      createUserDocumentFromAuth,
      userAuth,
      additionalDetails);

    yield* put(signInSuccess({ id: userSnapshot?.id, ...userSnapshot?.data() }));
  } catch (error: any) {
    yield put(signInFailed(error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield* call(getCurrentUser);
    if (!userAuth) return;

    yield* call(getSnapshotFromUserAuth, userAuth);

  } catch (error) {
    yield* put(signInFailed(error));
  }
}

export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* userSagas() {
  yield* all([call(onCheckUserSession)]);
}