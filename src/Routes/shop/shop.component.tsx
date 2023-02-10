import './shop.styles.scss';

import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import CategoriesPreview from '@routes/categories-preview/categories-preview.component';
import Category from '@routes/category/category.component';
import { getCategoriesAndDocuments } from '@utils/firebase/firebase.utils';
import { setCategoriesMap } from '@store/category/category.action';
import { useDispatch } from 'react-redux';

export default function Shop() {
	const dispatch = useDispatch();
	useEffect(() => {
		const getCategoriesMap = async () => {
			const categoryMap = await getCategoriesAndDocuments();
			dispatch(setCategoriesMap(categoryMap));
		};

		getCategoriesMap();
	}, []);

	return (
		<Routes>
			<Route index element={<CategoriesPreview />} />
			<Route path=':category' element={<Category />} />
		</Routes>
	);
}
