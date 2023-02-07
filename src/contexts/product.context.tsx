import { createContext, useState } from 'react';

import PRODUCTS from './../shop-data.json';
import { Product } from '@models/product';

type ProductsContextType = {
	products: Product[];
};

export const ProductsContext = createContext<ProductsContextType>({
	products: [],
});

export const ProductsProvider = ({ children }: { children: any }) => {
	const [products, setProducts] = useState(PRODUCTS);
	const value = { products };

	return (
		<ProductsContext.Provider value={value}>
			{children}
		</ProductsContext.Provider>
	);
};
