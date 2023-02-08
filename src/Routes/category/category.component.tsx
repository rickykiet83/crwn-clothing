import './category.styles.scss';

import React, { useContext, useEffect, useState } from 'react';

import { CategoriesContext } from 'contexts/categories.context';
import { Product } from '@models/product';
import ProductCard from './../../components/product-card/product-card.component';
import { useParams } from 'react-router-dom';

export default function Category() {
	const { category } = useParams();
	const { categoriesMap } = useContext(CategoriesContext);
	const [products, setProducts] = useState([]);

	useEffect(() => {
		setProducts(categoriesMap[category || '']);
	}, [category, categoriesMap]);

	return (
		<div className='category-container'>
			{products &&
				products.map((product: Product) => (
					<ProductCard key={product.id} product={product} />
				))}
		</div>
	);
}
