import './spinner.styles';

import { SpinnerContainer, SpinnerOverlay } from './spinner.styles';

import React from 'react';

export default function Spinner() {
	return (
		<SpinnerOverlay>
			<SpinnerContainer></SpinnerContainer>
		</SpinnerOverlay>
	);
}
