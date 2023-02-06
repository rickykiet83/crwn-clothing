import {
	createUserDocumentFromAuth,
	signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils';

import React from 'react';
import SignInForm from './../../Components/SignInForm/SignInForm.component';
import SignUpForm from './../../Components/SignUpForm/SignUpForm.component';

export default function Authentication() {
	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup();
		await createUserDocumentFromAuth(user);
	};

	return (
		<div>
			<h1>Sign In Page</h1>
			<SignUpForm />
			<SignInForm />
		</div>
	);
}
