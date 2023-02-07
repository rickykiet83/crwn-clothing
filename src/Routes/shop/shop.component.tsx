import React, { Component, useContext } from 'react';

import { Product } from '@models/product';
import { ProductsContext } from 'contexts/product.context';

export default function Shop() {
	const { products } = useContext(ProductsContext);

	return (
		<div>
			{products.map((product: Product) => (
				<div key={product.id}>
					<h1>{product.name}</h1>
				</div>
			))}
		</div>
	);
}
