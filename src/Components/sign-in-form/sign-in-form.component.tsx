import { ButtonsContainer, SignInContainer } from './sign-in-form.styles';
import React, { FormEvent, useState } from 'react';
import { emailSignInStart, googleSignInStart } from '@store/user/user.action';

import { BUTTON_TYPE_CLASSES } from '@models/button-type.enum';
import Button from '@components/button/button.component';
import FormInput from '@components/form-input/form-input.component';
import { signInAuthUserWithEmailAndPassword } from '@utils/firebase/firebase.utils';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function SignInForm() {
	const defaultFormFields = {
		email: '',
		password: '',
	};

	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		try {
			dispatch(emailSignInStart(email, password));
			resetFormFields();
			navigate('/');
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
		dispatch(googleSignInStart());
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;

		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<SignInContainer>
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
				<ButtonsContainer>
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
				</ButtonsContainer>
			</form>
		</SignInContainer>
	);
}
