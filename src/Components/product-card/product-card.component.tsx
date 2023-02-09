import './product-card.styles.scss';

import { BUTTON_TYPE_CLASSES } from './../../models/button-type.enum';
import Button from './../button/button.component';
import { CartContext } from './../../contexts/cart.context';
import { Product } from '@models/product';
import React from 'react';
import { useContext } from 'react';

export default function ProductCard({ product }: { product: Product }) {
	const { name, imageUrl, price } = product;
	const { addItemToCart } = useContext(CartContext);

	const addProductToCart = () => addItemToCart(product);

	return (
		<div className='product-card-container'>
			<img src={imageUrl} alt={`${name}`} />
			<div className='footer'>
				<span className='name'>{name}</span>
				<span className='price'>{price}</span>
			</div>
			<Button
				onClick={addProductToCart}
				buttonType={BUTTON_TYPE_CLASSES.inverted}
			>
				Add to card
			</Button>
		</div>
	);
}
