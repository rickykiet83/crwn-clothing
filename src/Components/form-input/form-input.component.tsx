import { FormInputLabel, Group, Input } from './form-input.styles';

import { InputHTMLAttributes } from 'react';

const FormInput: React.FC<
	{ label: string } & InputHTMLAttributes<HTMLInputElement>
> = ({ label, ...otherProps }) => {
	return (
		<Group>
			<Input {...otherProps} />
			{label && (
				<FormInputLabel
					shrink={Boolean(
						otherProps.value &&
							typeof otherProps.value === 'string' &&
							otherProps.value.length
					)}
				>
					{label}
				</FormInputLabel>
			)}
		</Group>
	);
};

export default FormInput;
