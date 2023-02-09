import {
	BaseButton,
	GoogleSignInButton,
	InvertedButton,
} from './button.styles';
import React, { ButtonHTMLAttributes } from 'react';

import { BUTTON_TYPE_CLASSES } from './../../models/button-type.enum';

const getButton = (buttonType: BUTTON_TYPE_CLASSES) =>
	({
		[BUTTON_TYPE_CLASSES.base]: BaseButton,
		[BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
		[BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
	}[buttonType || BUTTON_TYPE_CLASSES.base]);

const Button: React.FC<
	{
		buttonType?: BUTTON_TYPE_CLASSES;
	} & ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, buttonType, ...otherProps }) => {
	const type = buttonType ?? BUTTON_TYPE_CLASSES.base;
	const CustomButton = getButton(type);

	return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
