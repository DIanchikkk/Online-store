import { createSlice } from '@reduxjs/toolkit';
import { loadState, saveState } from '../../utils/localStorage';

const persistedState = loadState('cart');

const initialState = persistedState || {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      const existing = state.items.find(i => i.id === item.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
      saveState('cart', state);
    },
    removeFromCart(state, action) {
      state.items = state.items.filter(i => i.id !== action.payload);
      saveState('cart', state);
    },
    increaseQuantity(state, action) {
      const item = state.items.find(i => i.id === action.payload);
      if (item) {
        item.quantity += 1;
        saveState('cart', state);
      }
    },
    decreaseQuantity(state, action) {
      const item = state.items.find(i => i.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        saveState('cart', state);
      }
    },
    clearCart(state) {
      state.items = [];
      saveState('cart', state);
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
