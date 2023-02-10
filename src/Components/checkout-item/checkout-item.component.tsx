import './checkout-item.styles.scss';

import {
	addItemToCart,
	clearItemFromCart,
	removeItemToCart,
} from '@store/cart/cart.action';
import { useDispatch, useSelector } from 'react-redux';

import { CartItemModel } from '@models/cart-item.model';
import React from 'react';
import { selectCartItems } from '@store/cart/cart.selector';

export default function CheckoutItem({
	cartItem,
}: {
	cartItem: CartItemModel;
}) {
	const cartItems = useSelector(selectCartItems);
	const dispatch = useDispatch();

	const { name, imageUrl, price, quantity } = cartItem;

	const clearItemHandler = () =>
		dispatch(clearItemFromCart(cartItems, cartItem));

	const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
	const removeItemHandler = () =>
		dispatch(removeItemToCart(cartItems, cartItem));

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
