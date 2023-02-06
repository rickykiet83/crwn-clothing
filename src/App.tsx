import { Route, Routes } from 'react-router-dom';

import Authentication from 'Routes/Authentication/Authentication.component';
import Home from './Routes/Home/Home.component';
import Navigation from 'Routes/Navigation/Navigation.component';
import React from 'react';
import SignUpForm from './Components/SignUpForm/SignUpForm.component';

const Shop = () => {
	return <h1>I am the shop page</h1>;
};

export default function App() {
	return (
		<Routes>
			<Route path='/' element={<Navigation />}>
				<Route index element={<Home />} />
				<Route path='shop' element={<Shop />} />
				<Route path='auth' element={<Authentication />} />
			</Route>
		</Routes>
	);
}
