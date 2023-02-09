import './authentication.styles.scss';

import React from 'react';
import SignInForm from '@components/sign-in-form/sign-in-form.component';
import SignUpForm from '@components/sign-up-form/sign-up-form.component';

export default function Authentication() {
	return (
		<div className='authentication-container'>
			<SignInForm />
			<SignUpForm />
		</div>
	);
}
