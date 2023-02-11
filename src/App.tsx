import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import {
	createUserDocumentFromAuth,
	getCurrentUser,
	onAuthStateChangedListener,
} from '@utils/firebase/firebase.utils';

import Authentication from '@routes/authentication/authentication.component';
import Checkout from '@routes/checkout/checkout.component';
import Home from '@routes/home/home.component';
import Navigation from '@routes/navigation/navigation.component';
import Shop from '@routes/shop/shop.component';
import { setCurrentUser } from '@store/user/user.action';
import { useDispatch } from 'react-redux';

export default function App() {
	useEffect(() => {
		getCurrentUser().then((user) => setCurrentUser(user));
	}, []);

	return (
		<Routes>
			<Route path='/' element={<Navigation />}>
				<Route index element={<Home />} />
				<Route path='shop/*' element={<Shop />} />
				<Route path='auth' element={<Authentication />} />
				<Route path='checkout' element={<Checkout />} />
			</Route>
		</Routes>
	);
}
