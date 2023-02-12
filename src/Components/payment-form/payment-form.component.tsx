import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import {
	FormContainer,
	PaymentButton,
	PaymentFormContainer,
} from './payment-form.styles';
import React, { FormEvent } from 'react';

export default function PaymentForm() {
	const paymentHandler = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	return (
		<PaymentFormContainer>
			<FormContainer>
				<h2>Credit Cart Payment:</h2>
				<CardElement />
				<PaymentButton>Pay now</PaymentButton>
			</FormContainer>
		</PaymentFormContainer>
	);
}
