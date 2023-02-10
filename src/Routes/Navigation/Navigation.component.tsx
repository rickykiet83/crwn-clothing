import {
	LogoContainer,
	NavLink,
	NavLinks,
	NavigationContainer,
} from './navigation.styles';

import { CartContext } from '@contexts/cart.context';
import CartDropdown from '@components/cart-dropdown/cart-dropdown.component';
import CartIcon from '@components/cart-icon/cart-icon.component';
import { ReactComponent as CrwnLogo } from './../../assets/crown.svg';
import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { UserContext } from '@contexts/user.context';
import { signOutUser } from '@utils/firebase/firebase.utils';
import { useContext } from 'react';

export default function Navigation() {
	const { currentUser } = useContext(UserContext);
	const { isCartOpen } = useContext(CartContext);

	return (
		<Fragment>
			<NavigationContainer>
				<LogoContainer to='/'>
					<CrwnLogo className='logo' />
				</LogoContainer>
				<NavLinks>
					<NavLink to='/shop'>SHOP</NavLink>
					{currentUser ? (
						<NavLink as='span' onClick={signOutUser}>
							SIGN OUT
						</NavLink>
					) : (
						<NavLink to='/auth'>SIGN IN</NavLink>
					)}
					<CartIcon />
				</NavLinks>
				{isCartOpen && <CartDropdown />}
			</NavigationContainer>
			<Outlet />
		</Fragment>
	);
}
