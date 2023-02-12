import { USER_ACTION_TYPES } from '@store/user/user.types';
import { User } from 'firebase/auth';
import { createAction } from '@utils/reducer/reducer.utils';

export const setCurrentUser = (user: any) => createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);

export const checkUserSession = () => createAction(USER_ACTION_TYPES.CHECK_USER_SESSION);

export const googleSignInStart = () => createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START);

export const emailSignInStart = (email: string, password: string) => createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email, password });

export const signInSuccess = (user: any) => createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user);

export const signInFailed = (error: any) => createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, { error });

export const signUpStart = (email: string, password: string, displayName: string) =>
  createAction(USER_ACTION_TYPES.SIGN_UP_START, { email, password, displayName });

export const signUpSuccess = (user: User, additionalDetails: any) =>
  createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, { user, additionalDetails });

export const signUpFailed = (error) => createAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error);

