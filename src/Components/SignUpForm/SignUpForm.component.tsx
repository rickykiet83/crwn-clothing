import './sign-up-form.styles.scss';

import React, { FormEvent, useState } from 'react';
import {
	createAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth,
} from './../../utils/firebase/firebase.utils';

import { BUTTON_TYPE_CLASSES } from './../Button/Button.component';
import Button from './../Button/Button.component';
import FormInput from './../FormInput/FormInput.component';

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
				<FormInput
					label='Display Name'
					type='text'
					onChange={handleChange}
					name='displayName'
					value={displayName}
				/>
				<FormInput
					required
					type='email'
					onChange={handleChange}
					name='email'
					value={email}
					label='Email'
				/>
				<FormInput
					required
					type='password'
					onChange={handleChange}
					name='password'
					label='Password'
					value={password}
				/>
				<FormInput
					required
					type='password'
					onChange={handleChange}
					name='confirmPassword'
					label='Confirm Password'
					value={confirmPassword}
				/>
				<Button buttonType={BUTTON_TYPE_CLASSES.base} type='submit'>
					Sign Up
				</Button>
			</form>
		</div>
	);
}
