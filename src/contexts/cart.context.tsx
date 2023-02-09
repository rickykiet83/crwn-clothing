import { createContext, useReducer } from 'react';

import { CartItemModel } from '@models/cart-item.model';
import { Product } from '@models/product';
import { createAction } from '@utils/reducer/reducer.utils';

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
	setIsCartOpen: (bool: boolean) => void;
	cartItems: CartItemModel[];
	addItemToCart: (productToAdd: Product) => void;
	removeItemFromCart: (cartItemToRemove: CartItemModel) => void;
	clearItemFromCart: (cartItemToClear: CartItemModel) => void;
	cartCount: number;
	cartTotal: number;
};

export const CartContext = createContext<CartContextType>({
	isCartOpen: false,
	setIsCartOpen: () => {},
	cartItems: [],
	addItemToCart: () => {},
	removeItemFromCart: () => {},
	clearItemFromCart: () => {},
	cartCount: 0,
	cartTotal: 0,
});

export type CartState = {
	readonly isCartOpen: boolean;
	readonly cartItems: CartItemModel[];
	readonly cartCount: 0;
	readonly cartTotal: 0;
};

const CART_INITIAL_STATE: CartState = {
	isCartOpen: false,
	cartItems: [],
	cartCount: 0,
	cartTotal: 0,
};

export const CART_ACTION_TYPES = {
	SET_CART_ITEMS: 'SET_CART_ITEMS',
	SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
};

const cartReducer = (state = CART_INITIAL_STATE, action: any) => {
	const { type, payload } = action;

	switch (type) {
		case CART_ACTION_TYPES.SET_CART_ITEMS:
			return {
				...state,
				...payload,
			};

		case CART_ACTION_TYPES.SET_IS_CART_OPEN:
			return {
				...state,
				isCartOpen: payload,
			};

		default:
			return state;
	}
};

export const CartProvider = ({ children }: { children: any }) => {
	const [{ cartItems, isCartOpen, cartCount, cartTotal }, dispatch] =
		useReducer(cartReducer, CART_INITIAL_STATE);

	const updateCartItemsReducer = (newCartItems: CartItemModel[]) => {
		const newCartCount = newCartItems.reduce(
			(total, cartItem) => total + cartItem.quantity,
			0
		);

		const newCartTotal = newCartItems.reduce(
			(total, cartItem) => total + cartItem.price * cartItem.quantity,
			0
		);

		dispatch(
			createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
				cartItems: newCartItems,
				cartTotal: newCartTotal,
				cartCount: newCartCount,
			})
		);
	};

	const addItemToCart = (productToAdd: Product) => {
		const newCartItems = addCartItem(cartItems, productToAdd);
		updateCartItemsReducer(newCartItems);
	};

	const removeItemFromCart = (cartItemToRemove: CartItemModel) => {
		const newCartItems = removeCartItem(cartItems, cartItemToRemove);
		updateCartItemsReducer(newCartItems);
	};

	const clearItemFromCart = (cartItemToClear: CartItemModel) => {
		const newCartItems = clearCartItem(cartItems, cartItemToClear);
		updateCartItemsReducer(newCartItems);
	};

	const setIsCartOpen = (bool: boolean) => {
		dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool));
	};

	const value = {
		isCartOpen: isCartOpen,
		setIsCartOpen: setIsCartOpen,
		cartItems,
		addItemToCart,
		cartCount,
		removeItemFromCart,
		clearItemFromCart,
		cartTotal,
	};

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
