/* eslint-disable */
const CART_KEY = 'cart';
const TOKEN_KEY = 'jwt';

export const calculatePrice = items =>
  `$${items
    .reduce((acc, item) => acc + item.quantity * item.price, 0)
    .toFixed(2)}`;

// LOCAL STORAGE
// shopping cart
export const setCart = (value, cartKey = CART_KEY) => {
  if (localStorage) {
    localStorage.setItem(cartKey, JSON.stringify(value));
  }
};

export const getCart = (cartKey = CART_KEY) => {
  if (localStorage && localStorage.getItem(cartKey)) {
    return JSON.parse(localStorage.getItem(cartKey));
  }
  return [];
};

// clear cart in localStorage
export const clearCart = (cartKey = CART_KEY) => {
  if (localStorage) {
    localStorage.removeItem(cartKey);
  }
};

// Auth

export const setToken = (value, tokenKey = TOKEN_KEY) => {
  if (localStorage) {
    localStorage.setItem(tokenKey, JSON.stringify(value));
  }
};

export const getToken = (tokenKey = TOKEN_KEY) => {
  if (localStorage && localStorage.getItem(tokenKey)) {
    return JSON.parse(localStorage.getItem(tokenKey));
  }
  return [];
};

// clear token in local storage
export const clearToken = (tokenKey = TOKEN_KEY) => {
  if (localStorage) {
    localStorage.removeItem(tokenKey);
  }
};

// API end points
export const apiUrl =
  process.env.API_URL || 'https://thecoralshop.herokuapp.com';
