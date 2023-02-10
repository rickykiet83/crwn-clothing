import {
	CartDropdownContainer,
	CartItems,
	EmptyMessage,
} from './cart-dropdown.styles';
import { useDispatch, useSelector } from 'react-redux';

import Button from '@components/button/button.component';
import CartItem from '@components/cart-item/cart-item.component';
import { CartItemModel } from '@models/cart-item.model';
import React from 'react';
import { selectCartItems } from '@store/cart/cart.selector';
import { setIsCartOpen } from '@store/cart/cart.action';
import { useNavigate } from 'react-router-dom';

export default function CartDropdown() {
	const dispatch = useDispatch();
	const cartItems = useSelector(selectCartItems || []);

	const navigate = useNavigate();

	const goToCheckoutHandler = () => {
		dispatch(setIsCartOpen(false));
		navigate('/checkout');
	};
	return (
		<CartDropdownContainer>
			<CartItems>
				{cartItems.length ? (
					cartItems.map((item: CartItemModel) => (
						<CartItem key={item.id} cartItem={item} />
					))
				) : (
					<EmptyMessage>Your cart is empty</EmptyMessage>
				)}
			</CartItems>
			<Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
		</CartDropdownContainer>
	);
}
