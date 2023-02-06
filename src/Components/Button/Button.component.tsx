import './button.styles.scss';

import React, { ButtonHTMLAttributes } from 'react';

export enum BUTTON_TYPE_CLASSES {
	base = 'base',
	google = 'google-sign-in',
	inverted = 'inverted',
}

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
