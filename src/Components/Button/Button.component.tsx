import './button.styles.scss';

import React, { ButtonHTMLAttributes } from 'react';

import { BUTTON_TYPE_CLASSES } from './../../models/button-type.enum';

const Button: React.FC<
	{
		buttonType?: string;
	} & ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, buttonType, ...otherProps }) => {
	const type = buttonType ?? BUTTON_TYPE_CLASSES.base;
	return (
		<button className={`button-container ${type}`} {...otherProps}>
			{children}
		</button>
	);
};

export default Button;
