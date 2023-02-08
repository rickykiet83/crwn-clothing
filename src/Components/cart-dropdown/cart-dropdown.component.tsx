import './cart-dropdown.styles.scss';

import React, { useContext } from 'react';

import Button from './../button/button.component';
import { CartContext } from 'contexts/cart.context';
import CartItem from './../cart-item/cart-item.component';
import { CartItemModel } from '@models/cart-item.model';

export default function CartDropdown() {
	const { cartItems } = useContext(CartContext);

	return (
		<div className='cart-dropdown-container'>
			<div className='cart-item'>
				{cartItems.map((item: CartItemModel) => (
					<CartItem key={item.id} cartItem={item} />
				))}
			</div>
			<Button>GO TO CHECKOUT</Button>
		</div>
	);
}
