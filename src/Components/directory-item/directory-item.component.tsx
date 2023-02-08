import './directory-item.styles.scss';

import { Category } from '../../models/category';
import { Link } from 'react-router-dom';

const DirectoryItem = ({ category }: { category: Category }) => {
	return (
		<div className='directory-item-container'>
			<div
				className='background-image'
				style={{
					backgroundImage: `url(${category.imageUrl})`,
				}}
			/>
			<div className='body'>
				<h2>
					<Link to={`shop/${category.title}`} title={category.title}>
						{category.title}
					</Link>
				</h2>
				<p>
					<Link to={`shop/${category.title}`} title={category.title}>
						Shop Now
					</Link>
				</p>
			</div>
		</div>
	);
};

export default DirectoryItem;
