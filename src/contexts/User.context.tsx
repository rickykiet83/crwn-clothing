import {
	Dispatch,
	SetStateAction,
	createContext,
	useEffect,
	useReducer,
} from 'react';
import {
	createUserDocumentFromAuth,
	onAuthStateChangedListener,
} from './../utils/firebase/firebase.utils';

type UserContextType = {
	currentUser: any;
	setCurrentUser: Dispatch<SetStateAction<any>>;
};
// as the actual value you want to access
export const UserContext = createContext<UserContextType>({
	currentUser: null,
	setCurrentUser: () => {},
});

export type UserState = {
	readonly currentUser: any | null;
	readonly isLoading: boolean;
	readonly error: Error | null;
};

const INITIAL_STATE: UserState = {
	currentUser: null,
	isLoading: false,
	error: null,
};

export const USER_ACTION_TYPES = {
	SET_CURRENT_USER: 'SET_CURRENT_USER',
};

export const userReducer = (state = INITIAL_STATE, action: any) => {
	const { type, payload } = action;

	switch (type) {
		case USER_ACTION_TYPES.SET_CURRENT_USER:
			return {
				...state,
				currentUser: payload,
			};

		default:
			return state;
	}
};

export const UserProvider = ({ children }: { children: any }) => {
	const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);

	const setCurrentUser = (user: any) => {
		dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user });
	};

	const value = { currentUser, setCurrentUser };

	useEffect(() => {
		const unsubscribe = onAuthStateChangedListener((user) => {
			if (user) {
				createUserDocumentFromAuth(user);
			}
			setCurrentUser(user);
		});

		return unsubscribe;
	}, []);

	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
