import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import {
	FormContainer,
	PaymentButton,
	PaymentFormContainer,
} from './payment-form.styles';
import React, { FormEvent, useState } from 'react';

import { StripeCardElement } from '@stripe/stripe-js/types/stripe-js';
import { selectCartTotal } from '@store/cart/cart.selector';
import { selectCurrentUser } from '@store/user/user.selector';
import { useSelector } from 'react-redux';

export default function PaymentForm() {
	const stripe = useStripe();
	const elements = useElements();
	const amount = useSelector(selectCartTotal);
	const currentUser = useSelector(selectCurrentUser);
	const [isProcessingPayment, setIsProcessingPayment] = useState(false);

	const paymentHandler = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!stripe || !elements) return;

		setIsProcessingPayment(true);

		const response = await fetch('/.netlify/functions/create-payment-intent', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ amount: amount * 100 }),
		}).then((res) => res.json());

		const {
			paymentIntent: { client_secret },
		} = response;

		const cardDetails = elements.getElement(CardElement) as StripeCardElement;

		const paymentResult = await stripe.confirmCardPayment(client_secret, {
			payment_method: {
				card: cardDetails,
				billing_details: {
					name: currentUser
						? currentUser.displayName! || currentUser.email!
						: 'Guest',
				},
			},
		});

		setIsProcessingPayment(false);

		if (paymentResult.error) {
			alert(paymentResult.error.message);
		} else {
			if (paymentResult.paymentIntent.status === 'succeeded') {
				alert('Payment Successful');
			}
		}
	};

	return (
		<PaymentFormContainer>
			<FormContainer onSubmit={paymentHandler}>
				<h2>Credit Cart Payment:</h2>
				<CardElement />
				<PaymentButton isLoading={isProcessingPayment} type='submit'>
					Pay now
				</PaymentButton>
			</FormContainer>
		</PaymentFormContainer>
	);
}
