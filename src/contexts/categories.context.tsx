import { createContext, useEffect, useState } from 'react';

import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils';

type CategoriesContextType = {
	categoriesMap: any;
};

export const CategoriesContext = createContext<CategoriesContextType>({
	categoriesMap: {},
});

export const CategoriesProvider = ({ children }: { children: any }) => {
	const [categoriesMap, setCategoriesMap] = useState({});
	const value = { categoriesMap };

	useEffect(() => {
		const getCategoriesMap = async () => {
			const categoryMap = await getCategoriesAndDocuments();
			setCategoriesMap(categoryMap);
		};

		getCategoriesMap();
	}, []);

	return (
		<CategoriesContext.Provider value={value}>
			{children}
		</CategoriesContext.Provider>
	);
};
