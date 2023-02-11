import React, { Fragment } from 'react';
import {
	selectCategoriesMap,
	selectIsCategoriesLoading,
} from '@store/category/category.selector';

import CategoryPreview from '@components/category-preview/category-preview.component';
import Spinner from '@components/spinner/spinner.component';
import { useSelector } from 'react-redux';

export default function CategoriesPreview() {
	const categoriesMap = useSelector(selectCategoriesMap);
	const isLoading = useSelector(selectIsCategoriesLoading);

	return (
		<Fragment>
			{isLoading ? (
				<Spinner />
			) : (
				Object.keys(categoriesMap).map((title: string) => {
					const products = categoriesMap[title];
					return (
						<CategoryPreview key={title} title={title} products={products} />
					);
				})
			)}
		</Fragment>
	);
}
