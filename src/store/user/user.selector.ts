import { User } from 'firebase/auth';

export const selectCurrentUser = (state: any): User => state.user.currentUser;


export const selectUserIsLoading = (state: any) => state.user.isLoading;