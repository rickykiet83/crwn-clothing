import {
	Dispatch,
	SetStateAction,
	createContext,
	useEffect,
	useState,
} from 'react';

import { CartItemModel } from '@models/cart-item.model';
import { Product } from '@models/product';

const addCartItem = (cartItems: CartItemModel[], productToAdd: Product) => {
	// find if cartItems contains productToAdd
	const existingCartItem = cartItems.find(
		(cartItems) => cartItems.id === productToAdd.id
	);
	// if found, increment quantity
	if (existingCartItem) {
		return cartItems.map((cartItem) =>
			cartItem.id === productToAdd.id
				? { ...cartItem, quantity: (cartItem.quantity += 1) }
				: cartItem
		);
	}
	// return new array with modified cartItems/ new cart item

	return [...cartItems, { ...productToAdd, quantity: 1 }];
};

type CartContextType = {
	isCartOpen: boolean;
	setIsCartOpen: Dispatch<SetStateAction<boolean>>;
	cartItems: CartItemModel[];
	addItemToCart: (productToAdd: Product) => void;
	cartCount: number;
};

export const CartContext = createContext<CartContextType>({
	isCartOpen: false,
	setIsCartOpen: () => {},
	cartItems: [],
	addItemToCart: (productToAdd: Product) => {},
	cartCount: 0,
});

export const CartProvider = ({ children }: { children: any }) => {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [cartItems, setCartItems] = useState<CartItemModel[]>([]);
	const [cartCount, setCartCount] = useState(0);

	useEffect(() => {
		const newCartCount = cartItems.reduce(
			(total, cartItem) => total + cartItem.quantity,
			0
		);
		setCartCount(newCartCount);
	}, [cartItems]);

	const addItemToCart = (productToAdd: Product) => {
		const newCartItem = addCartItem(cartItems, productToAdd);
		setCartItems(newCartItem);
	};

	const value = {
		isCartOpen,
		setIsCartOpen,
		cartItems,
		addItemToCart,
		cartCount,
	};

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
