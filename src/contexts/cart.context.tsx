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

const removeCartItem = (
	cartItems: CartItemModel[],
	cartItemToRemove: CartItemModel
) => {
	// find the cart item to remove
	const existingCartItem = cartItems.find(
		(cartItems) => cartItems.id === cartItemToRemove.id
	);

	// check if quantity is equal to 1, remove that item from the cart
	if (existingCartItem?.quantity === 1) {
		return cartItems.filter((cartItem) => cartItem.id !== existingCartItem.id);
	}

	// return back cartItems with matching cart item with reduced quantity
	return cartItems.map((cartItem) =>
		cartItem.id === cartItemToRemove.id
			? { ...cartItem, quantity: cartItem.quantity - 1 }
			: cartItem
	);
};

const clearCartItem = (
	cartItems: CartItemModel[],
	cartItemToRemove: CartItemModel
) => {
	return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
};

type CartContextType = {
	isCartOpen: boolean;
	setIsCartOpen: Dispatch<SetStateAction<boolean>>;
	cartItems: CartItemModel[];
	addItemToCart: (productToAdd: Product) => void;
	removeItemFromCart: (cartItemToRemove: CartItemModel) => void;
	clearItemFromCart: (cartItemToClear: CartItemModel) => void;
	cartCount: number;
};

export const CartContext = createContext<CartContextType>({
	isCartOpen: false,
	setIsCartOpen: () => {},
	cartItems: [],
	addItemToCart: () => {},
	removeItemFromCart: () => {},
	clearItemFromCart: () => {},
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

	const removeItemFromCart = (cartItemToRemove: CartItemModel) => {
		setCartItems(removeCartItem(cartItems, cartItemToRemove));
	};

	const clearItemFromCart = (cartItemToClear: CartItemModel) => {
		setCartItems(clearCartItem(cartItems, cartItemToClear));
	};

	const value = {
		isCartOpen,
		setIsCartOpen,
		cartItems,
		addItemToCart,
		cartCount,
		removeItemFromCart,
		clearItemFromCart,
	};

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
