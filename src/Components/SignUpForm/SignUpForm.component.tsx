import './sign-up-form.styles.scss';

import React, { FormEvent, useState } from 'react';
import {
	createAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth,
} from './../../utils/firebase/firebase.utils';

export default function SignUpForm() {
	const defaultFormFields = {
		displayName: '',
		email: '',
		password: '',
		confirmPassword: '',
	};

	const [formFields, setFormFields] = useState(defaultFormFields);
	const { displayName, email, password, confirmPassword } = formFields;

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (password !== confirmPassword) {
			alert('Your password do not match');
			return;
		}

		try {
			const response = await createAuthUserWithEmailAndPassword(
				email,
				password
			);

			await createUserDocumentFromAuth(response?.user, { displayName });
			resetFormFields();
		} catch (error: any) {
			if (error.code === 'auth/email-already-in-use') {
				alert('Cannot create user, email already in use');
			} else {
				console.log(error);
			}
			console.error('user creation encountered an error', error);
		}
	};

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;

		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<div className='sign-up-container'>
			<h2>Don't have an account?</h2>
			<span>Sign up with your email and password</span>
			<form onSubmit={handleSubmit}>
				<label>Display Name</label>
				<input
					required
					onChange={handleChange}
					name='displayName'
					value={displayName}
				/>
				<label>Email</label>
				<input
					required
					type='email'
					onChange={handleChange}
					name='email'
					value={email}
				/>
				<label>Password</label>
				<input
					required
					type='password'
					onChange={handleChange}
					name='password'
					value={password}
				/>
				<label>Confirm Password</label>
				<input
					required
					type='password'
					onChange={handleChange}
					name='confirmPassword'
					value={confirmPassword}
				/>

				<button type='submit'>Sign Up</button>
			</form>
		</div>
	);
}
