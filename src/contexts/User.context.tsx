import {
	Dispatch,
	SetStateAction,
	createContext,
	useEffect,
	useState,
} from 'react';
import {
	createUserDocumentFromAuth,
	onAuthStateChangedListener,
} from './../utils/firebase/firebase.utils';

type UserContextType = {
	currentUser: any;
	setCurrentUser: Dispatch<SetStateAction<null | any>>;
};
// as the actual value you want to access
export const UserContext = createContext<UserContextType>({
	currentUser: null,
	setCurrentUser: () => {},
});

export const UserProvider = ({ children }: { children: any }) => {
	const [currentUser, setCurrentUser] = useState(null);
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
