import { configureStore } from '@reduxjs/toolkit';
import { loadState, saveState } from './localStorage';
import cartReducer from './cartSlice';

const persistedState = loadState();

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: persistedState ? { cart: persistedState } : undefined,
});

store.subscribe(() => {
  saveState(store.getState().cart);
});
