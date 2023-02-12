import { all, call, put, takeLatest } from 'typed-redux-saga';
import { createUserDocumentFromAuth, getCurrentUser, signInAuthUserWithEmailAndPassword, signInWithGooglePopup } from '@utils/firebase/firebase.utils';
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
    yield* put(signInFailed(error as Error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield* call(getCurrentUser);
    if (!userAuth) return;

    yield* call(getSnapshotFromUserAuth, userAuth);

  } catch (error) {
    yield* put(signInFailed(error as Error));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield* call(signInWithGooglePopup);
    yield* call(getSnapshotFromUserAuth, user);

  } catch (error: any) {
    yield* put(signInFailed(error as Error));
  }
}

export function* signInWithEmail(payload: any) {
  try {
    const userCredential = yield* call(
      signInAuthUserWithEmailAndPassword,
      payload.email,
      payload.password
    );

    if (userCredential) {
      const { user } = userCredential;
      yield* call(getSnapshotFromUserAuth, user);
    }
  } catch (error) {
    yield* put(signInFailed(error as Error));
  }
}

export function* onGoogleSignInStart() {
  yield* takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onCheckUserSession() {
  yield* takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onEmailSignInStart() {
  yield* takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail);
}


export function* userSagas() {
  yield* all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onEmailSignInStart)
  ]);
}