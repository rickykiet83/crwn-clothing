import './navigation.styles.scss';

import { Link, Outlet } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from './../../assets/crown.svg';
import { Fragment } from 'react';

export default function Navigation() {
	return (
		<Fragment>
			<div className='navigation'>
				<Link className='logo-container' to='/'>
					<CrwnLogo className='logo' />
				</Link>
				<div className='nav-links-container'>
					<Link className='nav-link' to='/shop'>
						SHOP
					</Link>
				</div>
			</div>
			<Outlet />
		</Fragment>
	);
}
