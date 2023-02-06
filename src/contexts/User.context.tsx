import { Dispatch, SetStateAction, createContext, useState } from 'react';

export type UserContextType = {
	currentUser: null;
	setCurrentUser: Dispatch<SetStateAction<null | any>>;
};
// as the actual value you want to access
export const UserContext = createContext<UserContextType>({
	currentUser: null,
	setCurrentUser: () => null,
});

export const UserProvider = ({ children }: { children: any }) => {
	const [currentUser, setCurrentUser] = useState(null);
	const value = { currentUser, setCurrentUser };

	return (
		<UserContext.Provider value={{ currentUser, setCurrentUser }}>
			{children}
		</UserContext.Provider>
	);
};
