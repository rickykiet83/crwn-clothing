import { Route, Routes } from 'react-router-dom';

import Home from './Routes/Home/Home.component';
import React from 'react';

export default function App() {
	return (
		<Routes>
			<Route path='/home' element={<Home />}></Route>
		</Routes>
	);
}
