import './shop.styles.scss';

import React, { Fragment, useContext } from 'react';

import { CategoriesContext } from 'contexts/categories.context';
import { Product } from '@models/product';
import ProductCard from './../../components/product-card/product-card.component';

export default function Shop() {
	const { categoriesMap } = useContext(CategoriesContext);

	return (
		<Fragment>
			{Object.keys(categoriesMap).map((title: any) => (
				<Fragment>
					<h2>{title}</h2>
					<div className='products-container'>
						{categoriesMap[title].map((product: Product) => (
							<ProductCard key={product.id} product={product} />
						))}
					</div>
				</Fragment>
			))}
		</Fragment>
	);
}
