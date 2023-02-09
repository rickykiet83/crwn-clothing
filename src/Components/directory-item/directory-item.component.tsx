import {
	BackgroundImage,
	Body,
	DirectoryItemContainer,
} from './directory-item.styles';
import { Link, useNavigate } from 'react-router-dom';

import { Category } from '../../models/category';

const DirectoryItem = ({ category }: { category: Category }) => {
	const { title, imageUrl } = category;

	const navigate = useNavigate();

	const onNavigateHandler = () => navigate(`shop/${title}`);
	return (
		<DirectoryItemContainer onClick={onNavigateHandler}>
			<BackgroundImage imageUrl={imageUrl} />
			<Body>
				<h2>{title}</h2>
				<p>Shop Now</p>
			</Body>
		</DirectoryItemContainer>
	);
};

export default DirectoryItem;
