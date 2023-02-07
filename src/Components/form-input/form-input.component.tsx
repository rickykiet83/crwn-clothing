import './form-input.styles.scss';

import { InputHTMLAttributes } from 'react';

const FormInput: React.FC<
	{ label: string } & InputHTMLAttributes<HTMLInputElement>
> = ({ label, ...otherProps }) => {
	return (
		<div className='group'>
			<input className='form-input' {...otherProps} />
			{label && (
				<label
					className={`${
						otherProps.value?.toString().length ? 'shrink' : ''
					} form-input-label`}
				>
					{label}
				</label>
			)}
		</div>
	);
};

export default FormInput;
