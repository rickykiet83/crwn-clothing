import './checkout.styles.scss';

import { selectCartItems, selectCartTotal } from '@store/cart/cart.selector';

import { CartItemModel } from '@models/cart-item.model';
import CheckoutItem from '@components/checkout-item/checkout-item.component';
import PaymentForm from '@components/payment-form/payment-form.component';
import React from 'react';
import { useSelector } from 'react-redux';

export default function Checkout() {
	const cartItems = useSelector(selectCartItems);
	const cartTotal = useSelector(selectCartTotal);

	return (
		<div className='checkout-container'>
			<div className='checkout-header'>
				<div className='header-block'>
					<span>Product</span>
				</div>
				<div className='header-block'>
					<span>Description</span>
				</div>
				<div className='header-block'>
					<span>Quantity</span>
				</div>
				<div className='header-block'>
					<span>Price</span>
				</div>
				<div className='header-block'>
					<span>Remove</span>
				</div>
			</div>
			{cartItems.map((cartItem: CartItemModel) => {
				const { id } = cartItem;
				return <CheckoutItem key={id} cartItem={cartItem} />;
			})}
			<span className='total'>Total: {cartTotal}</span>
			<PaymentForm />
		</div>
	);
}
