import './product-card.styles.scss';

import { useDispatch, useSelector } from 'react-redux';

import { BUTTON_TYPE_CLASSES } from '@models/button-type.enum';
import Button from '@components/button/button.component';
import { Product } from '@models/product';
import React from 'react';
import { addItemToCart } from '@store/cart/cart.action';
import { selectCartItems } from '@store/cart/cart.selector';

export default function ProductCard({ product }: { product: Product }) {
	const dispatch = useDispatch();
	const cartItems = useSelector(selectCartItems);

	const { name, imageUrl, price } = product;

	const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

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
