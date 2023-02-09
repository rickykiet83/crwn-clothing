import './checkout-item.styles.scss';

import React, { useContext } from 'react';

import { CartContext } from './../../contexts/cart.context';
import { CartItemModel } from '@models/cart-item.model';

export default function CheckoutItem({
	cartItem,
}: {
	cartItem: CartItemModel;
}) {
	const { removeItemFromCart, addItemToCart, clearItemFromCart } =
		useContext(CartContext);

	const { name, imageUrl, price, quantity } = cartItem;

	const clearItemHandler = () => clearItemFromCart(cartItem);
	const addItemHandler = () => addItemToCart(cartItem);
	const removeItemHandler = () => removeItemFromCart(cartItem);

	return (
		<div className='checkout-item-container'>
			<div className='image-container'>
				<img src={imageUrl} alt={name} />
			</div>
			<span className='name'>{name}</span>
			<span className='quantity'>
				<div className='arrow' onClick={removeItemHandler}>
					&#10094;
				</div>
				<span className='value'>{quantity}</span>
				<div className='arrow' onClick={addItemHandler}>
					&#10095;
				</div>
			</span>
			<span className='price'>{price}</span>
			<div onClick={clearItemHandler} className='remove-button'>
				&#10005;
			</div>
		</div>
	);
}
