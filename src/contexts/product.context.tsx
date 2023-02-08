import { createContext, useEffect, useState } from 'react';

import PRODUCTS from './../shop-data.json';
import { Product } from '@models/product';
import { getCategoriesAndDocuments } from './../utils/firebase/firebase.utils';

type ProductsContextType = {
	products: Product[];
};

export const ProductsContext = createContext<ProductsContextType>({
	products: [],
});

export const ProductsProvider = ({ children }: { children: any }) => {
	const [products, setProducts] = useState([]);
	const value = { products };

	useEffect(() => {
		const getCategoriesMap = async () => {
			const categoryMap = await getCategoriesAndDocuments();
			console.log(categoryMap);
		};

		getCategoriesMap();
	}, []);

	return (
		<ProductsContext.Provider value={value}>
			{children}
		</ProductsContext.Provider>
	);
};
