import './category.styles.scss';

import React, { Fragment, useEffect, useState } from 'react';

import { Product } from '@models/product';
import ProductCard from '@components/product-card/product-card.component';
import { selectCategories } from '@store/category/category.selector';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Category() {
	const { category } = useParams();
	const categories = useSelector(selectCategories);

	const [products, setProducts] = useState([]);

	useEffect(() => {
		setProducts(categories[category || '']);
	}, [category, categories]);

	return (
		<Fragment>
			<h2 className='category-title'>{category?.toUpperCase()}</h2>
			<div className='category-container'>
				{products &&
					products.map((product: Product) => (
						<ProductCard key={product.id} product={product} />
					))}
			</div>
		</Fragment>
	);
}
