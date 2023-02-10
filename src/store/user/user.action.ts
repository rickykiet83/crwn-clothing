import { USER_ACTION_TYPES } from './user.reducer';
import { createAction } from '@utils/reducer/reducer.utils';

export const setCurrentUser = (user: any) => createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);