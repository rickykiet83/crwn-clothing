import './shop.styles.scss';

import { Route, Routes } from 'react-router-dom';

import CategoriesPreview from '@routes/categories-preview/categories-preview.component';
import Category from '@routes/category/category.component';
import React from 'react';

export default function Shop() {
	return (
		<Routes>
			<Route index element={<CategoriesPreview />} />
			<Route path=':category' element={<Category />} />
		</Routes>
	);
}
