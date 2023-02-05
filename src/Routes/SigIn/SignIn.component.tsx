import {
	createUserDocumentFromAuth,
	signInWithGooglePopup,
} from './../../utils/firebase/firebase.utils';

import React from 'react';

export default function SignIn() {
	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup();
		await createUserDocumentFromAuth(user);
	};

	return (
		<div>
			<h1>Sign In Page</h1>
			<button onClick={logGoogleUser}>Sign in with Google Popup</button>
		</div>
	);
}
