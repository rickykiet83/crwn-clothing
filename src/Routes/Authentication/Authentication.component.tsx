import './authentication.styles.scss';

import React from 'react';
import SignInForm from './../../Components/SignInForm/SignInForm.component';
import SignUpForm from './../../Components/SignUpForm/SignUpForm.component';

export default function Authentication() {
	return (
		<div className='authentication-container'>
			<SignUpForm />
			<SignInForm />
		</div>
	);
}
