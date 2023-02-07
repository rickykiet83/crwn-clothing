import './directory.styles.scss';

import { Category } from '@models/category';
import CategoryItem from './../category-item/category-item.component';
import React from 'react';

export default function Directory({ categories }: { categories: Category[] }) {
	return (
		<div className='directory-container'>
			{categories.map((category) => (
				<CategoryItem key={category.id} category={category} />
			))}
		</div>
	);
}
