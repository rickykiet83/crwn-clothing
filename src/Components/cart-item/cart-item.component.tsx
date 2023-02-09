import './cart-item.styles.scss';

import { CartItemModel } from './../../models/cart-item.model';
import React from 'react';

export default function CartItem({ cartItem }: { cartItem: CartItemModel }) {
	const { name, imageUrl, quantity, price } = cartItem;
	return (
		<div className='cart-item-container'>
			<img src={imageUrl} alt={name} />
			<div className='item-details'>
				<span className='name'>{name}</span>
				<span className='price'>
					{quantity} * {price}
				</span>
			</div>
		</div>
	);
}
