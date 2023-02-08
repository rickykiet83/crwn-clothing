import './cart-dropdown.styles.scss';

import React, { useContext } from 'react';

import Button from './../button/button.component';
import { CartContext } from 'contexts/cart.context';
import CartItem from './../cart-item/cart-item.component';
import { CartItemModel } from '@models/cart-item.model';
import { useNavigate } from 'react-router-dom';

export default function CartDropdown() {
	const { cartItems, setIsCartOpen } = useContext(CartContext);
	const navigate = useNavigate();

	const goToCheckoutHandler = () => {
		setIsCartOpen(false);
		navigate('/checkout');
	};
	return (
		<div className='cart-dropdown-container'>
			<div className='cart-item'>
				{cartItems.map((item: CartItemModel) => (
					<CartItem key={item.id} cartItem={item} />
				))}
			</div>
			<Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
		</div>
	);
}
