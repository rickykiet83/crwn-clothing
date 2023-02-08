import './category-preview.styles.scss';

import { Product } from '@models/product';
import ProductCard from './../product-card/product-card.component';
import React from 'react';

export default function CategoryPreview({
	title,
	products,
}: {
	title: string;
	products: Product[] | any;
}) {
	return (
		<div className='category-preview-container'>
			<h2>
				<span className='title'>{title.toUpperCase()}</span>
			</h2>
			<div className='preview'>
				{products
					.filter((_: any, idx: number) => idx < 4)
					.map((product: Product) => (
						<ProductCard key={product.id} product={product} />
					))}
			</div>
		</div>
	);
}
