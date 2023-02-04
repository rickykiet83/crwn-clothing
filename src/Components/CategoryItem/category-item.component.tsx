import './category-item.styles.scss';

import { Category } from '../../Models/category';

const CategoryItem = ({ category }: { category: Category }) => {
	return (
		<div className='category-container'>
			<div
				className='background-image'
				style={{
					backgroundImage: `url(${category.imageUrl})`,
				}}
			>
				<img src={category.imageUrl} />
			</div>
			<div className='category-body-container'>
				<h2>{category.title}</h2>
				<p>Shop Now</p>
			</div>
		</div>
	);
};

export default CategoryItem;
