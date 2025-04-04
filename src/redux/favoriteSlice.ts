import { createSlice } from "@reduxjs/toolkit";

// localStorage'dan favorileri yükle
const loadFavoritesFromLocalStorage = () => {
  const favorites = localStorage.getItem("favorites");
  return favorites ? JSON.parse(favorites) : [];
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: loadFavoritesFromLocalStorage() as number[],
  reducers: {
    toggleFavorite: (state, action) => {
      const productId = action.payload;
      let updatedFavorites;
      if (state.includes(productId)) {
        updatedFavorites = state.filter((id) => id !== productId);
      } else {
        updatedFavorites = [...state, productId];
      }
      // localStorage'a favorileri kaydet
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      return updatedFavorites;
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
