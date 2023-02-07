import './navigation.styles.scss';

import { Link, Outlet } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from './../../assets/crown.svg';
import { Fragment } from 'react';
import { UserContext } from 'contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import { useContext } from 'react';

export default function Navigation() {
	const { currentUser } = useContext(UserContext);

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
					{currentUser ? (
						<span className='nav-link' onClick={signOutUser}>
							SIGN OUT
						</span>
					) : (
						<Link className='nav-link' to='/auth'>
							SIGN IN
						</Link>
					)}
				</div>
			</div>
			<Outlet />
		</Fragment>
	);
}
