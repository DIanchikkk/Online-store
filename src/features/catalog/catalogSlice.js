import { createSlice } from '@reduxjs/toolkit';
import { detailedProducts } from '../../mocks/detailedProducts'; // <- импортируем Detailed Products

const initialState = {
  items: detailedProducts,
};

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {},
});

export const selectCatalogItems = state => state.catalog.items;

export default catalogSlice.reducer;
