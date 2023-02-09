import React, { Fragment, useContext } from 'react';

import { CategoriesContext } from './../../contexts/categories.context';
import CategoryPreview from './../../components/category-preview/category-preview.component';

export default function CategoriesPreview() {
	const { categoriesMap } = useContext(CategoriesContext);

	return (
		<Fragment>
			{Object.keys(categoriesMap).map((title: string) => {
				const products = categoriesMap[title];
				return (
					<CategoryPreview key={title} title={title} products={products} />
				);
			})}
		</Fragment>
	);
}
