import './shop.styles.scss';

import React, { Fragment, useContext } from 'react';

import { CategoriesContext } from 'contexts/categories.context';
import CategoryPreview from './../../components/category-preview/category-preview.component';

export default function Shop() {
	const { categoriesMap } = useContext(CategoriesContext);

	return (
		<div className='shop-container'>
			{Object.keys(categoriesMap).map((title: string) => {
				const products = categoriesMap[title];
				return (
					<CategoryPreview key={title} title={title} products={products} />
				);
			})}
		</div>
	);
}
