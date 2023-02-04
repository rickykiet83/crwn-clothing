import { Route, Routes } from 'react-router-dom';

import Home from './Routes/Home/Home.component';
import React from 'react';

const Shop = () => {
	return <h1>I am the shop page</h1>;
};

export default function App() {
	return (
		<Routes>
			<Route path='/home' element={<Home />}>
				<Route path='shop' element={<Shop />} />
			</Route>
		</Routes>
	);
}
