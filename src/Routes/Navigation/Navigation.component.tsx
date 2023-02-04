import { Link, Outlet } from 'react-router-dom';

import { Fragment } from 'react';
import Home from 'Routes/Home/Home.component';

export default function Navigation() {
	return (
		<Fragment>
			<div className='navigation'>
				<Link className='logo-container' to='/'>
					<div>Logo</div>
				</Link>
				<div className='nav-links-container'>
					<Link className='nav-link' to='/shop'>
						Shop
					</Link>
				</div>
			</div>
			<Outlet />
		</Fragment>
	);
}
