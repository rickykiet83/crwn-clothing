import './category.styles.tsx';

import { CategoryContainer, Title } from './category.styles';
import React, { Fragment, useEffect, useState } from 'react';
import {
	selectCategoriesMap,
	selectIsCategoriesLoading,
} from '@store/category/category.selector';

import { Product } from '@models/product';
import ProductCard from '@components/product-card/product-card.component';
import Spinner from '@components/spinner/spinner.component';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Category() {
	const { category } = useParams();
	const categoriesMap: any = useSelector(selectCategoriesMap);
	const isLoading = useSelector(selectIsCategoriesLoading);

	const [products, setProducts] = useState<Product[]>([]);

	useEffect(() => {
		setProducts(categoriesMap[category || '']);
	}, [category, categoriesMap]);

	return (
		<Fragment>
			<Title>{category?.toString().toUpperCase()}</Title>
			{isLoading ? (
				<Spinner />
			) : (
				<CategoryContainer>
					{products &&
						products.map((product: Product) => (
							<ProductCard key={product.id} product={product} />
						))}
				</CategoryContainer>
			)}
		</Fragment>
	);
}
