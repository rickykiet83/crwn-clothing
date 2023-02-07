import './sign-in-form.styles.scss';

import React, { FormEvent, useState } from 'react';
import {
	createUserDocumentFromAuth,
	signInAuthUserWithEmailAndPassword,
	signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils';

import { BUTTON_TYPE_CLASSES } from '../Button/Button.component';
import Button from '../Button/Button.component';
import FormInput from '../FormInput/FormInput.component';

export default function SignInForm() {
	const defaultFormFields = {
		email: '',
		password: '',
	};

	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		try {
			const response = await signInAuthUserWithEmailAndPassword(
				email,
				password
			);
			resetFormFields();
		} catch (error: any) {
			switch (error.code) {
				case 'auth/user-not-found':
					alert('no user associated with this email');
					break;
				case 'auth/wrong-password':
					alert('incorrect password or email');
					break;

				default:
					console.log(error);
			}
		}
	};

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const signInWithGoogle = async () => {
		const { user } = await signInWithGooglePopup();
		await createUserDocumentFromAuth(user);
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;

		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<div className='sign-in-container'>
			<h2>Already have an account?</h2>
			<span>Sign in with your email and password</span>
			<form onSubmit={handleSubmit}>
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
				<div className='buttons-container'>
					<Button type='submit' buttonType={BUTTON_TYPE_CLASSES.base}>
						Sign In
					</Button>
					<Button
						type='button'
						onClick={signInWithGoogle}
						buttonType={BUTTON_TYPE_CLASSES.google}
					>
						Google Sign In
					</Button>
				</div>
			</form>
		</div>
	);
}
