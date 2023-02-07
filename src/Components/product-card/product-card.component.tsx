import './product-card.styles.scss';

import { BUTTON_TYPE_CLASSES } from './../../models/button-type.enum';
import Button from './../button/button.component';
import { Product } from '@models/product';
import React from 'react';

export default function ProductCard({ product }: { product: Product }) {
	const { name, imageUrl, price } = product;
	return (
		<div className='product-card-container'>
			<img src={imageUrl} alt={`${name}`} />
			<div className='footer'>
				<span className='name'>{name}</span>
				<span className='price'>{price}</span>
			</div>
			<Button buttonType={BUTTON_TYPE_CLASSES.inverted}>Add to card</Button>
		</div>
	);
}
