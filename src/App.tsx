import React, { Suspense, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { checkUserSession } from '@store/user/user.action';
import { useDispatch } from 'react-redux';

const Navigation = lazy(
	() => import('@routes/navigation/navigation.component')
);

const Home = lazy(() => import('@routes/home/home.component'));
const Shop = lazy(() => import('@routes/shop/shop.component'));
const Authentication = lazy(
	() => import('@routes/authentication/authentication.component')
);
const Checkout = lazy(() => import('@routes/checkout/checkout.component'));

export default function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(checkUserSession());
	}, []);

	return (
		<Suspense>
			<Routes>
				<Route path='/' element={<Navigation />}>
					<Route index element={<Home />} />
					<Route path='shop/*' element={<Shop />} />
					<Route path='auth' element={<Authentication />} />
					<Route path='checkout' element={<Checkout />} />
				</Route>
			</Routes>
		</Suspense>
	);
}
