import './sign-up-form.styles.scss';

import React, { useState } from 'react';

export default function SignUpForm() {
	const defaultFormFields = {
		displayName: '',
		email: '',
		password: '',
		confirmPassword: '',
	};

	const [formFields, setFormFields] = useState(defaultFormFields);

	const { displayName, email, password, confirmPassword } = formFields;

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;

		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<div className='sign-up-container'>
			<h2>Don't have an account?</h2>
			<span>Sign up with your email and password</span>
			<form onSubmit={() => {}}>
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
