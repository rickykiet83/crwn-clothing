import { Outlet, Route, Routes } from 'react-router-dom';

import Home from './Routes/Home/Home.component';
import React from 'react';

const Navigation = () => {
	return (
		<div>
			<div>
				<h1>I am the navigation bar</h1>
			</div>
			<Outlet />
		</div>
	);
};

const Shop = () => {
	return <h1>I am the shop page</h1>;
};

export default function App() {
	return (
		<Routes>
			<Route path='/' element={<Navigation />}>
				<Route index element={<Home />} />
				<Route path='shop' element={<Shop />} />
			</Route>
		</Routes>
	);
}
