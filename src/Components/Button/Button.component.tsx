import './button.styles.scss';

import React, { ButtonHTMLAttributes } from 'react';

const Button: React.FC<
	{
		buttonType: string;
	} & ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, buttonType, ...otherProps }) => {
	return (
		<button className={`button-container ${buttonType}`} {...otherProps}>
			{children}
		</button>
	);
};

export default Button;
