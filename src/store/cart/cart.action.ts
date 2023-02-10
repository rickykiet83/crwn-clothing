import { CART_ACTION_TYPES } from './cart.types';
import { CartItemModel } from '@models/cart-item.model';
import { Product } from '@models/product';
import { createAction } from '@utils/reducer/reducer.utils';

export const setIsCartOpen = (bool: boolean) =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool);


export const addItemToCart = (cartItems: CartItemModel[], productToAdd: Product) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItemToCart = (cartItems: CartItemModel[], cartItemToRemove: CartItemModel) => {
  const newCartItems = removeCartItem(cartItems, cartItemToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const clearItemFromCart = (cartItems: CartItemModel[], cartItemToClear: CartItemModel) => {
  const newCartItems = clearCartItem(cartItems, cartItemToClear);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

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