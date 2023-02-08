import './directory.styles.scss';

import { Category } from '@models/category';
import DirectoryItem from '../directory-item/directory-item.component';
import React from 'react';

export default function Directory({ categories }: { categories: Category[] }) {
	return (
		<div className='directory-container'>
			{categories.map((category) => (
				<DirectoryItem key={category.id} category={category} />
			))}
		</div>
	);
}
