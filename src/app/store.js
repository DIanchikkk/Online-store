import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice';
import catalogReducer from '../features/catalog/catalogSlice';
import { loadState, saveState } from '../utils/localStorage';

const persistedCart = loadState('cart');

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    catalog: catalogReducer,
  },
  preloadedState: persistedCart ? { cart: persistedCart } : undefined,
});

store.subscribe(() => {
  saveState('cart', store.getState().cart);
});
