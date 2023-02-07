import './shop.styles.scss';

import React, { Component, useContext } from 'react';

import { Product } from '@models/product';
import ProductCard from './../../components/product-card/product-card.component';
import { ProductsContext } from 'contexts/product.context';

export default function Shop() {
	const { products } = useContext(ProductsContext);

	return (
		<div className='products-container'>
			{products.map((product: Product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	);
}
