import './cart-dropdown.styles.scss';

import Button from './../button/button.component';
import React from 'react';

export default function CartDropdown() {
	return (
		<div className='cart-dropdown-container'>
			<div className='cart-item' />
			<Button>GO TO CHECKOUT</Button>
		</div>
	);
}
