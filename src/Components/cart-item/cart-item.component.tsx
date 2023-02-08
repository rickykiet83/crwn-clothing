import { CartItemModel } from '@models/cart-item.model';
import React from 'react';

export default function CartItem({ cartItem }: { cartItem: CartItemModel }) {
	const { name: productName, quantity, price } = cartItem;
	return (
		<div>
			<h2>{productName}</h2>
			<span>{quantity}</span>
		</div>
	);
}
