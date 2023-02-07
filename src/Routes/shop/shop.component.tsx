import React, { Component } from 'react';

import { Product } from '@models/product';
import SHOP_DATA from './../../shop-data.json';

export default class Shop extends Component {
	render() {
		return (
			<div>
				{SHOP_DATA.map((product: Product) => (
					<div key={product.id}>
						<h1>{product.name}</h1>
					</div>
				))}
			</div>
		);
	}
}
